const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const targetUrl = process.argv[2];

    if (!targetUrl) {
        console.log("No link provided.");
        process.exit(1);
    }

    console.log(`Accessing ${targetUrl}...`);
    await page.goto(targetUrl, { waitUntil: 'networkidle2' });

    // Example: Click the first button it finds
    const button = await page.$("button");
    if (button) {
        await button.click();
        console.log("Button clicked.");
    }

    // Example: Fill the first input field (if needed)
    const input = await page.$("input[type='text']");
    if (input) {
        await input.type("Automated response");
        console.log("Form filled.");
    }

    await browser.close();
    console.log("Automation complete.");
})();