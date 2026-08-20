const { chromium } = require("playwright-core");
const { pathToFileURL } = require("url");

(async () => {

const htmlPath = "/work/site/index.html";
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || "/usr/bin/chromium-browser",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--disable-background-networking", "--use-gl=swiftshader"]
});
const context = await browser.newContext({ viewport: { width: 1440, height: 1100 }, locale: "zh-CN" });
await context.route("**/*", async (route) => {
  const url = route.request().url();
  if (url.startsWith("file:") || url.startsWith("data:") || url.startsWith("blob:")) return route.continue();
  return route.abort();
});
const page = await context.newPage();
const errors = [];
const requests = [];
page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
page.on("console", (message) => { if (["error", "warning"].includes(message.type())) errors.push(`console ${message.type()}: ${message.text()}`); });
page.on("request", (request) => { if (!request.url().startsWith("file:") && !request.url().startsWith("data:") && !request.url().startsWith("blob:")) requests.push(request.url()); });
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load" });
const assert = (condition, message) => { if (!condition) throw new Error(message); };
assert(await page.locator(".public-governance-card").count() === 6, "synthetic card count should be 6");
assert(await page.locator("[data-public-count=web]").textContent() === "2", "web category count should be 2");
assert(await page.locator("[data-public-count=creative]").textContent() === "1", "creative category count should be 1");
assert(await page.locator("[data-public-count=spoken]").textContent() === "1", "spoken category count should be 1");
assert(await page.locator("[data-public-count=realtime]").textContent() === "1", "realtime category count should be 1");
assert(await page.locator("[data-public-count=systems]").textContent() === "1", "systems category count should be 1");

await page.locator("[data-filter-kind=category] [data-public-category=web]").click();
assert(await page.locator(".public-governance-card").count() === 2, "category filter should show 2 web cards");
await page.locator("#public-governance-search").fill("hero");
assert(await page.locator(".public-governance-card").count() === 1, "search should intersect category filter");
await page.locator("#public-governance-search").fill("");
await page.locator("[data-filter-kind=category] [data-public-category=all]").click();

const archive = page.locator('.public-governance-card[data-public-category="spoken"] .public-demo-action');
assert(await archive.isDisabled(), "archive-only record must not have an approval action");
const firstUnreviewed = page.locator('.public-governance-card[data-public-status="unreviewed"] .public-demo-action').first();
await firstUnreviewed.click();
assert((await page.locator("#public-batch-output").inputValue()).includes("public-review-batch-demo-1"), "demo batch should be generated");
assert((await page.locator("#public-batch-output").inputValue()).includes('"synchronized": false'), "demo batch must be unsynchronized");
assert(await page.locator('.public-governance-card[data-public-status="approved"]').count() >= 2, "simulated approval should be visible");

await page.locator("[data-public-view=gallery]").click();
assert(await page.locator("#public-governance-list").getAttribute("data-view") === "gallery", "gallery view should activate");
await page.setViewportSize({ width: 430, height: 900 });
assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 4), "mobile page must not overflow horizontally");
assert(await page.locator(".public-governance-card").count() >= 1, "mobile gallery should retain cards");
assert(requests.length === 0, "page must not send external requests");
assert(errors.length === 0, `console/page errors: ${errors.join(" | ")}`);

console.log(JSON.stringify({ status: "PASS", cards: 6, categoryCounts: { web: 2, creative: 1, spoken: 1, realtime: 1, systems: 1 }, searchIntersection: true, approvalBatch: true, gallery: true, mobileOverflow: false, externalRequests: requests.length, errors: errors.length }, null, 2));
await browser.close();
})().catch((error) => {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
});
