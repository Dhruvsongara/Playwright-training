import {test,expect} from "@playwright/test";

test("assertions", async ({page})=>{

    await page.goto("https://www.apple.com/in/store");
    await expect(page).toHaveTitle("Apple Store Online - Apple (IN)");
    await expect(page.locator("//h1[text()='Store']")).toBeVisible();
});