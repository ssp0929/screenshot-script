const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const pathToThisDirectory = path.dirname(fs.realpathSync(__filename));

const url = 'http://stephensp.com';
const name = 'stephensp.png';

async function getPic() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);
  await page.screenshot({path: path.join(pathToThisDirectory, '/images/', name) });
  await browser.close();
}

getPic();