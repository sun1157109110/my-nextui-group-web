const puppeteer = require('puppeteer');

async function screenshot(url, path) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // 设置视口大小
  await page.setViewport({
    width: 1280,
    height: 800
  });
  await page.goto(url, {
    waitUntil: 'networkidle0'
  });
  const cookies = await page.cookies();
  await page.setCookie(...cookies);
  console.log(cookies,'@@');
  await page.screenshot({
    path: path,
    fullPage: true,
    optimizeForSpeed: true
  });
  await browser.close();
}

screenshot('https://juejin.cn/', 'test1.webp')