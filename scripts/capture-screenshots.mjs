import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer";

const outDir = path.resolve(process.cwd(), "public", "projects");

const targets = [
  { url: "https://drupalfit.com/", fileName: "drupalfit.jpg" },
  { url: "https://www.aes.com/", fileName: "aes.jpg" },
  { url: "https://dc250.us/", fileName: "dc250.jpg" },
  { url: "https://www.visitnc.com/", fileName: "visitnc.jpg" },
];

async function ensureDirectory(dirPath) {
  await fs.promises.mkdir(dirPath, { recursive: true });
}

async function capture() {
  await ensureDirectory(outDir);

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1200, height: 675, deviceScaleFactor: 1 },
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  // Set a reasonable UA to avoid some bot blocks
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
  );

  for (const { url, fileName } of targets) {
    const outPath = path.join(outDir, fileName);
    try {
      console.log(`Capturing ${url} -> ${outPath}`);
      const resp = await page.goto(url, {
        waitUntil: "networkidle2",
        timeout: 60000,
      });
      if (!resp || !resp.ok()) {
        console.warn(`Warning: Non-OK response for ${url}`);
      }
      // Ensure body exists and then give client-side apps a moment to settle
      await page.waitForSelector("body", { timeout: 30000 });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await page.screenshot({
        path: outPath,
        type: "jpeg",
        quality: 80,
        fullPage: false,
      });
    } catch (err) {
      console.error(`Failed to capture ${url}:`, err);
    }
  }

  await browser.close();
}

capture().catch((e) => {
  console.error(e);
  process.exit(1);
});
