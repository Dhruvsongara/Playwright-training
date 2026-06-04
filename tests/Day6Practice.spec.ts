import {test,expect} from "@playwright/test";
 
test("assertions", async ({page})=>{
 
    await page.goto("https://www.apple.com/in/store",{timeout: 60000});
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL('https://www.apple.com/in/store');
    await expect(page).toHaveTitle("Apple Store Online - Apple (IN)");
    await expect(page).not.toHaveTitle('Store');
    await expect(page.locator("//h1[text()='Store']")).toBeVisible();
    await expect(page.getByRole('main')).toContainText('The best way to buy the products you love.');
    await expect(page.getByRole('heading', { name: 'The latest.' })).toBeVisible();
    await expect(page.getByLabel('iPhone', { exact: true })).toContainText('iPhone');
    // await expect(page.locator("rf-ccard-img-full")).toHaveCount(5);
});
 
// test("soft assertions", async ({page})=>{
 
//     await page.goto("https://www.apple.com/in/store");
//     await expect.soft(page).toHaveTitle("APPLE");
//     await expect(page.locator("//h1[text()='Store']")).toBeVisible();
// });

//to see the trace of the aboce test case we can use the npx playwright show-trace trace.zip
 
test("different waitings",async ({page})=>{
 
    await page.goto("https://shop.unicornstore.in/",{timeout : 60000});
     await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL('https://shop.unicornstore.in/');
    await expect(page.getByAltText("logo", {exact:true})).toBeVisible({timeout:20000});
    await expect(page.locator("//a[@routerlink='/deals-of-day']")).toBeVisible({timeout:30000});
    await expect(page.getByRole('button', { name: ' Search' })).toBeVisible();
    await expect(page.getByRole('button', { name: ' Search' })).toBeEnabled();
    await expect(page.getByRole('button', { name: '' })).toBeVisible();
    await expect(page.getByRole('button', { name: '' })).toBeEnabled();
    await expect(page.getByRole('navigation')).toContainText('Shop');
    await expect(page.getByRole('navigation')).toContainText('Student Offers');

});


//to run the test case multiple times we can define this npx playwright test --repeat-each=3 in the terminal

