const scrapper = require('./scrapper');
const puppeteer = require('puppeteer');


describe('scrapper', () => {
    it('.scrapItems()', async () => {

    });
    
    it('.scrapItem()', async () => {
        const browser = await puppeteer.launch();
        const actual = await scrapper.scrapItem('https://www.milanuncios.com/venta-de-gatos/adopcion-gatitos-325795848.htm', browser);

        expect(actual.title).toEqual('ADOPCIÓN GATITOS')
        expect(actual.description.includes('Tienen casi 4 meses')).toBeTruthy();
        expect(actual.phone).toEqual('717101680');
        expect(actual.images).toEqual([
            'https://img.milanuncios.com/fg/3257/95/325795848_1.jpg?VersionId=h0TRxzvOzZ1uAKNaia.9UkQFo1kLJ3_j',
            'https://img.milanuncios.com/fg/3257/95/325795848_2.jpg?VersionId=XbLlDMB8dVK8JPUFEbDZXtwlfbSYsPR_',
            'https://img.milanuncios.com/fg/3257/95/325795848_3.jpg?VersionId=IUrtqBvHRmE7gDYrYpJutiTWPim5.Hqx',
            'https://img.milanuncios.com/fg/3257/95/325795848_4.jpg?VersionId=CpFQaGkGOmxRHpVNS3z4ztC4loolhYHo',
            'https://img.milanuncios.com/fg/3257/95/325795848_5.jpg?VersionId=9iQYKf8.28GLVKHGehB_CxSWDcSxzwsz',
        ]);

        expect(actual.dateCreated.getMilliseconds()).toEqual(Date.parse('27-12-2019'));

        await browser.close();
    }, 30000);
});