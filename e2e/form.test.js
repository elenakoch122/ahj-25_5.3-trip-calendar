import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(200000);

describe('TicketSearchForm', () => {
  let browser;
  let page;
  let server;

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 100,
      // devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
    server.kill();
  });

  test('should show block date-roundtrip, if roundtrip checked', async () => {
    await page.goto('http://localhost:5000/', { waitUntil: 'load' });
    await page.waitForSelector('.container');

    const roundtrip = await page.$('#roundtrip');

    await roundtrip.click();

    await page.waitForSelector('.block-date-roundtrip');
  });

  test('should show block date, if roundtrip unchecked', async () => {
    await page.goto('http://localhost:5000/', { waitUntil: 'load' });
    await page.waitForSelector('.container');

    const roundtrip = await page.$('#roundtrip');

    await roundtrip.click();
    await page.waitForSelector('.block-date-roundtrip');

    await roundtrip.click();
    await page.waitForSelector('.block-date');
  });
});
