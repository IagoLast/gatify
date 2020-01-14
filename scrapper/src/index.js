const scrapper = require('./scrapper.js');

(async () => {
    const items = await scrapper.scrapItems('https://www.milanuncios.com/gatos-en-barcelona/adopcion.htm');
    const filtered = items.filter(item => item !== undefined);
    console.log('\n\n');
    console.warn(JSON.stringify(filtered));
    console.log('\n\n');
})();
