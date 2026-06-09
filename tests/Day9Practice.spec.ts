import {test, expect} from "@playwright/test";


/*

hooks practice is performed on the unicornproductvalidate.spec.ts website

*/

test.skip("Skip annotation", async ({page})=>{

    //skip annotation
    await page.goto('https://www.gsrtc.in/site/');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.locator('#singleLadyA').check();
    await expect(page.locator('#singleLadyA')).toBeChecked();
    await page.locator('#singleLadyA').uncheck();
    await expect(page.locator('#singleLadyA')).not.toBeChecked();
});


test.describe.skip('Skip all tests in this block', () => {

    //only annotation
    // test.only('Only annotation', async ({ page }) => {

    // await page.goto('https://www.air.irctc.co.in/');

    // const departureField = page.getByRole('textbox', { name: 'Departure' });
    // const returnField = page.getByRole('textbox', { name: 'Return' });

    // await departureField.click();
    // await page.getByText('10', { exact: true }).click();
    
    // await returnField.click();
    // await page.getByRole('cell', { name: '17' }).click();

    // const departureValue = await departureField.inputValue();
    // const returnValue = await returnField.inputValue();

    // console.log('Departure:', departureValue);
    // console.log('Return:', returnValue);

    // await expect(departureField).toHaveValue(/10/);
    // await expect(returnField).toHaveValue(/17/);

    // });

    //fix me annotation
    test.fixme('Fix Me annotation', async ({ page }) => {

    await page.goto("https://www.makemytrip.com/flights/",{timeout:90000});
    await page.locator('.commonModal__close').click();
    await page.getByText('Round Trip').click();
    await expect(page.getByText('Round Trip')).toHaveClass(/selected/);
    });

});

//to do the filtering by tag and run this test we can use npx playwright test Day9Practice.spec.ts --grep @smoke

test("Slow annotation @regression", async ({page,browserName})=>{

    //slow annotation
    test.slow(browserName === 'chromium');
    await page.goto("https://www.air.irctc.co.in/");
    await page.waitForLoadState("networkidle");
    await page.getByLabel("Senior Citizen ").check();
    await expect(page.getByLabel("Senior Citizen ")).toBeChecked();
    await page.getByLabel("Senior Citizen ").uncheck();
    await expect(page.getByLabel("Senior Citizen")).not.toBeChecked();
});

test.fail("Fail annotation", async ({page})=>{

    //fail annotation
    await page.goto("https://www.apple.com/in/store",{timeout: 60000});
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL('https://www.apple.com/in/store');
    await expect(page).toHaveTitle("Apple Store Online - Apple (IN)");
    await expect(page).not.toHaveTitle('Store');
    await expect(page.locator("//h1[text()='Store']")).toBeVisible();
    await expect(page.getByRole('main')).toContainText('The best way to buy the products you love.');
    await expect(page.getByRole('heading', { name: 'The latest.' })).toBeVisible();
    await expect(page.getByLabel('iPhone', { exact: true })).toContainText('iPhone');
    await expect(page.locator("rf-ccard-img-full")).toHaveCount(5);
});

//to do the filtering by tag and run this test we can use npx playwright test Day9Practice.spec.ts --grep @smoke

test("Tags @smoke ",async ({page})=>{
 
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
