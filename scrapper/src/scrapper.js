const puppeteer = require('puppeteer');


async function scrapItems(url) {
    console.info('Starting...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    let urls = await page.$$eval('.aditem-detail-title', links => links.map(link => link.getAttribute('href')));
    urls = urls.map(url => `https://www.milanuncios.com${url}`);

    console.info('About to scrap:', urls);

    const items = await Promise.all(urls.map(url => scrapItem(url, browser)));

    await browser.close();

    return items;
}

async function scrapItem(url, browser) {
    let title, description, phone, images, dateCreated;
    try {
        const page = await browser.newPage();

        await page.goto(url);
        console.info('scrapping', url);

        [title, description, phone, images, dateCreated] = await Promise.all([
            _getElementText('.ad-detail-title', page),
            _getElementText('.pagAnuCuerpoAnu', page),
            _getPhone(browser, page),
            _getImages(page),
            _getElementText('.pagAnuStatsCreated', page),
        ]);

        dateCreated = _parseDateString(dateCreated);
    }
    catch (err) {
        console.info('\nFailed: ', url);
        console.error(err);
        return;
    }

    return { title, description, phone, images, dateCreated };
}


function _parseDateString(dateString) {
    const [day, month, year] = dateString.split('-');
    return new Date(Date.parse([year, month, day].join('-')));
}

async function _getElementText(selector, page) {
    const element = await page.$(selector);
    return page.evaluate(element => element.textContent.trim(), element);
}


async function _getImages(page) {
    return await page.$$eval('.pagAnuFoto img', imgs => imgs.map(img => img.getAttribute('src')));
}

async function _getPhone(browser, mainPage) {
    const id = await _getElementText('.pillRef strong', mainPage);
    const page = await browser.newPage();
    await page.goto(`https://www.milanuncios.com/datos-contacto/?usePhoneProxy=0&from=detail&id=${id}`);
    const phone = await _getElementText('.telefonos', page);
    await page.close();
    return phone;
}


module.exports = { scrapItem, scrapItems };