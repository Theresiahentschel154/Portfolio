const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));
    page.on('response', response => {
      if (!response.ok()) {
        console.log(`HTTP ERROR: ${response.status()} ${response.url()}`);
      }
    });

    console.log("Navigating to http://localhost:5173/");
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    
    await browser.close();
  } catch (err) {
    console.error('Puppeteer Script Error:', err);
  }
})();
