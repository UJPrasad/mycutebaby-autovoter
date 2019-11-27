const puppeteer = require("puppeteer");
const BABYLINK = "https://mycutebaby.in/contest/participant/?n=5dc060abd363e&utm_source=wsapp_share&utm_campaign=November_2019&utm_medium=shared&utm_term=wsapp_shared_5dc060abd363e&utm_content=participant";

const voteForMe = async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto(BABYLINK);

  await page.waitFor(5000);
  await page.waitForSelector(".col-md-12 #v");
  await page.waitFor(5000);
  await page.click(".col-md-12 #v");
  await page.$eval(".col-md-12 #v", el => (el.value = "JP")); // replace your name here
//   await page.waitFor(5000);
  await page.waitForSelector(".row #vote_btn");
  await page.click(".row #vote_btn");

  await browser.close();
};

voteForMe();

setInterval(() => {
  voteForMe();
}, 1800000);