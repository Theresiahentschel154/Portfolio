const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.error('PAGE ERROR:', error.message));

  console.log("Navigating...");
  await page.goto('http://localhost:5173/');
  
  // wait a bit for any react renders
  await page.waitForTimeout(2000);
  
  await browser.close();
})();
