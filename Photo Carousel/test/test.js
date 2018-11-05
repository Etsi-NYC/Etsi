const puppeteer = require("puppeteer");
const axios = require("axios");

describe(
  "Testing the frontend",
  () => {
    let page;
    let browser;
    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 80
      });
      page = await browser.newPage();
      await page.goto("http://localhost:3000/");
    });

    test("description header should exist", async () => {
      await page.waitForSelector(".jsEzHv");
      const html = await page.$eval(".jsEzHv", e => e.innerHTML);
      await expect(html).toBe("Description");
    });

    test("clicking more should show more text", async () => {
      await page.waitForSelector(".sc-iwsKbI");
      await page.click(".sc-iwsKbI");
      await page.waitForSelector(".sc-iwsKbI");
      const expandedText = await page.$eval(".sc-iwsKbI", e => e.innerHTML);
      await expect(expandedText).toBe("- Less");
    });

    test("clicking on favorite button should bring up toast", async () => {
      await page.waitForSelector(".sc-bZQynM");
      await page.click(".sc-bZQynM");
      await page.waitForSelector(".Toastify__toast-body");
      const toastText = await page.$eval(
        ".Toastify__toast-body",
        e => e.innerText
      );
      await expect(toastText).toBe("✓ Favorited!");
		});

		test("clicking on zoom should bring up lightbox", async () => {
      await page.waitForSelector("#zoom");
      await page.click("#zoom");
      await page.waitForSelector(".ril-inner");
      const lightbox = await page.$eval(
        ".ril-inner",
        e => e ? true : false
      );
      await expect(lightbox).toBe(true);
		});

    afterAll(() => {
      browser.close();
    });
  },
  16000
);

describe("api call to database", () => {
  it("should load item data", () => {
    return axios.get(`http://localhost:3000/api/1`).then(data => {
      expect(data).toBeDefined();
      expect(data.data[0].id).toEqual(1);
    });
  });
});
