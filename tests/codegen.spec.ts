import { test, expect } from '@playwright/test';

test('test @sanity', async ({ page }) => {
  await page.goto('https://www.rahulshettyacademy.com/client/#/auth/login');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('dhruv123@gmail.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Dhruv@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('ADIDAS ORIGINAL')).toBeVisible();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(2).click();
  await page.getByRole('button', { name: '   Cart' }).click();
  await expect(page.getByRole('heading', { name: 'My Cart' })).toBeVisible();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await page.getByRole('textbox', { name: 'Select Country' }).click();
  await page.getByRole('textbox', { name: 'Select Country' }).pressSequentially('Ind');
  await page.getByRole('button', { name: ' India' }).click();
  await page.getByRole('combobox').first().selectOption('08');
  await page.getByRole('combobox').nth(1).selectOption('27');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('123');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Dhruv');
  await page.getByText('Place Order').click();
  await expect(page.getByRole('heading', { name: 'Thankyou for the order.' })).toBeVisible();
  await page.pause();
});