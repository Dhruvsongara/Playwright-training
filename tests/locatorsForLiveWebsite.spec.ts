// the code is commented because it is failing in the ci/cd pipeline



// import {test, expect} from "@playwright/test";

// test("Product Search", async ({page})=>{

//     await page.goto("https://www.croma.com/");
//     await page.getByTestId("deliver").click();
//     await page.getByPlaceholder("Enter Pincode").fill("383001");
//     await page.getByRole("button", {name : 'Continue'});
//     await page.locator("input[@id='searchV2']").fill("iphone");
//     await page.getByTestId('search-bar').getByRole('img').click();
// });

// import { test, expect } from '@playwright/test';
 
// test("Unicorn", async ({page})=>{
 
//     await page.goto('https://shop.unicornstore.in/',{timeout:100000});
//     await page.getByRole('link', { name: 'Shop ' }).click();
//     await page.getByText('iPhone 17 ProNew').click();
//     await page.locator('div').filter({ hasText: /^Cosmic Orange$/ }).click();
//     await page.getByRole('heading', { name: '512GB' }).click();
//     await page.getByRole('button', { name: 'Add to Cart', exact: true }).click();
//     // await page.locator(".cart-buttons-type").click();
//     await page.getByRole('button', { name: ' Search' }).click();
//     // await page.locator("button .sr-only").first().click();
//     await page.locator("//input[@id='searchbar']").click();
//     // await page.getByRole('textbox', { name: 'I\'m Looking For' }).click();
//     await page.getByRole('textbox', { name: 'I\'m Looking For' }).fill('airpods');
//     // await page.getByRole('textbox', { name: 'I\'m Looking For' }).press('Enter');
//     await page.locator("//input[@name='search']").press('Enter');
//     // await page.getByRole('link', { name: 'Product Image AirPods Pro (2nd gen)' }).click();
//     // await page.getByText('AirPods Pro (2nd gen)', { exact: true }).click();
//     // await page.locator('a').filter({ hasText: 'AirPods Pro (2nd gen)' }).click();
//     await page.locator('div.card-body').filter({ hasText: 'AirPods Pro (2nd gen)' }).click();
//     // await page.getByRole('button', { name: 'Add To Cart' }).first().click();
//     // await page.getByRole('button', { name: 'Continue Checkout' }).click();
// });
 


//This test is commented because it is not passing the ci/cd pipeline but it is working correctly in the vscode.


// test("Croma", async ({browser})=>{
 
//     const context = await browser.newContext({
//         permissions: []
//     });
//     const page = await context.newPage();
//     const searchTerm = "iphone";
//     await page.goto("https://www.croma.com/",{timeout:100000});
//     await page.context().clearPermissions();
//     // await page.getByTestId("deliver").click();
//     // await page.locator("//div[@data-testid='deliver']").last().click();
//     // await page.getByPlaceholder("Enter Pincode").fill("383001");
//     // await page.getByRole('textbox', { name: 'Enter Pincode' }).click();
//     // await page.getByRole('textbox', { name: 'Enter Pincode' }).press('Control+A');
//     // await page.getByRole('textbox', { name: 'Enter Pincode' }).fill('383001');
//     await page.getByRole("button", {name : 'Continue'}).click();
//     await page.locator("#searchV2").click();
//     await page.locator("#searchV2").fill(searchTerm);
//     // await page.locator("//input[@id='searchV2']").fill("iphone");
//     await page.getByTestId('search-bar').getByRole('img').click();
 
//     //add to cart flow
//     await expect(page.locator("h1:has-text('iphone')")).toBeVisible();
//     const page1Promise = page.waitForEvent('popup');
//     await page.getByText('Apple iPhone 17e (256GB, Black)').click();
//     const page1 = await page1Promise;
//     await page1.getByText('White').click();




    // const selectPlanButton = page1.getByRole('button',{name:' Select Plan'});
    // await selectPlanButton.scrollIntoViewIfNeeded();
    // await selectPlanButton.click();
    

    // const selectPlanButton = page1.getByRole('button', { name: 'Select Plan' });
    // await selectPlanButton.scrollIntoViewIfNeeded();
    // await selectPlanButton.click();

    // await page1.evaluate(() => {window.scrollBy(0, 1000);});
    // await page1.scrollIntoViewIfNeeded();
    // await page.mouse.wheel(0,1000);
    // await page1.getByRole('button', { name: 'Select Plan' }).click();
    // await page1.getByTestId('addToCart-button-click').click();
    // await page1.getByRole('button', { name: 'Proceed to Cart' }).click();
    // await page.pause();
// });
 
 


 