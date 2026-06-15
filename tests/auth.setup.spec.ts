import { test } from "@playwright/test";
import { UnicornHome } from "../pages/UnicornHome";
import dataFile from "../test-data/dataFile.json";
 
test("authenticate", async ({ page }) => {
 
    const productPage = new UnicornHome(page);
 
    await productPage.unicornURL();
    await productPage.pageCheck();
 
    await productPage.login(
        dataFile.login.email,
        dataFile.login.password
    );
 
    await page.context().storageState({
        path: "playwright/.auth/user.json"
    });
}); 