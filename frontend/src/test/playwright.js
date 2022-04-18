
// run it by type in below command
//node .\src\test\playwright.js
// it will catch an image and record a video in .\Videos folder

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });

  // record an video
  const context = await browser.newContext({
      recordVideo:{dir:'videos'}
  });
  
  // Open new page
  const page = await context.newPage();

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click text=LondonLEGO 21034 Architecture London $20Add To Basket >> button
  await page.locator('text=LondonLEGO 21034 Architecture London $20Add To Basket >> button').click();
  // assert.equal(page.url(), 'http://localhost:3000/cart');

  // Click text=+
  await page.locator('text=+').click();

  // Click text=+
  await page.locator('text=+').click();

  // Click text=Back To Home
  await page.locator('text=Back To Home').click();
  // assert.equal(page.url(), 'http://localhost:3000/');

  // Click text=SydneyLEGO 21032 Architecture Sydney Skyline Building $30Add To Basket >> button
  await page.locator('text=SydneyLEGO 21032 Architecture Sydney Skyline Building $30Add To Basket >> button').click();
  // assert.equal(page.url(), 'http://localhost:3000/cart');

  // Click text=+ >> nth=1
  await page.locator('text=+').nth(1).click();

  // Click text=Place order
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/Order' }*/),
    page.locator('text=Place order').click()
  ]);

  // Click text=Back To Home
  await page.locator('text=Back To Home').click();
  // assert.equal(page.url(), 'http://localhost:3000/');

  // catch a screen shot
  await page.screenshot({path:".\\videos\\localhost.png"})
  // ---------------------
  await context.close();
  await browser.close();
})();