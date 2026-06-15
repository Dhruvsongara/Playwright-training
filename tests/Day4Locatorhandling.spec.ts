import {test, expect} from "@playwright/test";

test("Dropdown Handling @regression", async ({page})=>{

    // await page.goto("https://www.irctc.co.in/nget/train-search");
    // await page.locator("#journeyClass").click();
    
    //static dropdown handling
    await page.goto("https://www.gsrtc.in/site/");
    await page.getByRole('button', { name: 'Close' }).click();
    await page.locator("#selectNoOfPassengersA").selectOption("3");

    //dynamic dropdown handling
    await page.getByRole('textbox', { name: 'Source' }).pressSequentially("Ahmedabad")
    await page.getByText('AHMEDABAD ADALAJ X').click();
    await page.pause();
});

// test.only("checkbox and radio butons", async ({page})=>{

//     await page.goto("https://www.air.irctc.co.in/");
//     await page.waitForLoadState("networkidle");
//     await page.getByLabel("Senior Citizen ").check();
//     await expect(page.getByLabel("Senior Citizen ")).toBeChecked();
//     await page.getByLabel("Senior Citizen ").uncheck();
//     await expect(page.getByLabel("Senior Citizen")).not.toBeChecked();
// });

test('checkbox @smoke', async ({ page }) => {

  //checkbox
  await page.goto('https://www.gsrtc.in/site/');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#singleLadyA').check();
  await expect(page.locator('#singleLadyA')).toBeChecked();
  await page.locator('#singleLadyA').uncheck();
  await expect(page.locator('#singleLadyA')).not.toBeChecked();
});

// test('radio button', async ({ page }) => {

//   //Radio button
//   await page.goto("https://www.makemytrip.com/flights/",{timeout:90000});
//   await page.locator('.commonModal__close').click();
//   await page.getByText('Round Trip').click();
//   await expect(page.getByText('Round Trip')).toHaveClass(/selected/);
// });


test('Mouse events @smoke', async ({ page }) => {

  await page.goto('https://qaplayground.vercel.app/');
  await page.getByTestId('btn-normal').click();
  await expect(page.getByTestId('btn-output')).toContainText('✓ Normal click registered');
  await page.getByTestId('btn-double').dblclick();
  await expect(page.getByTestId('btn-output')).toContainText('✓ Double click detected!');
  await page.getByTestId('btn-right').click({button: 'right'});
  await expect(page.getByTestId('btn-output')).toContainText('✓ Right-click (contextmenu) event detected!');
});

test("Keyboard events @regression", async ({page})=>{

  await page.goto('https://shop.unicornstore.in/');
  await page.getByRole('button', { name: ' Search' }).click();
  await page.locator("//input[@id='searchbar']").click();
  await page.getByRole('textbox', { name: 'I\'m Looking For' }).fill("iphone");
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.getByRole('textbox', { name: 'I\'m Looking For' }).pressSequentially("airpods");
  await page.keyboard.press('Enter');

});

// test('Date Picker', async ({ page }) => {

//   await page.goto('https://www.air.irctc.co.in/');

//   const departureField = page.getByRole('textbox', { name: 'Departure' });
//   const returnField = page.getByRole('textbox', { name: 'Return' });

//   await departureField.click();
//   await page.getByText('10', { exact: true }).click();
  
//   await returnField.click();
//   await page.getByRole('cell', { name: '17' }).click();

//   const departureValue = await departureField.inputValue();
//   const returnValue = await returnField.inputValue();

//   console.log('Departure:', departureValue);
//   console.log('Return:', returnValue);

//   await expect(departureField).toHaveValue(/10/);
//   await expect(returnField).toHaveValue(/17/);

// });