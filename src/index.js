const puppeteer = require('puppeteer');

const scrape = async () => {
  const browser = await puppeteer.launch({headless: true});
  try {
    const page = await browser.newPage();
    await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './reports'});
    await page.waitFor(1000);
    await page.goto('https://www.transtats.bts.gov/DL_SelectFields.asp?Table_ID=236', { waitUntil: 'networkidle0' });
    await page.click('button[name="Download"]');
    await page.waitFor(6000);
  } catch (error) {
    console.error('errorrrrrr', error);
  } finally {
    await browser.close();
  }

};

scrape();