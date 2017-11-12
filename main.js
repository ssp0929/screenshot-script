const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const pathToThisDirectory = path.dirname(fs.realpathSync(__filename));

const url = 'http://google.com';
const name = 'google.png';
const runHeadless = true;
const width = 1000;
const height = 500;

async function getPic() {
  const browser = await puppeteer.launch({headless: runHeadless});
  const page = await browser.newPage();

  await page.goto(url);
  await page.setViewport({width: width, height: height});
  await page.screenshot({path: path.join(pathToThisDirectory, '/images/', name) });
  await browser.close();
}

getPic();