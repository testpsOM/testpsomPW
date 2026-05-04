import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://testshop.omantel.om/en/store');

  const name:String =await page.title();
  console.log(name);
  await expect(page).toHaveTitle(/Omantel/);
});



// test('test', async ({ page }) => {
//   await page.goto('https://testshop.omantel.om/en/store');
//   await page.locator('div:nth-child(5)').first().click();
//   await page.getByRole('textbox', { name: 'Phone number or e-mail' }).click();
//   await page.getByRole('textbox', { name: 'Phone number or e-mail' }).fill('69104232');
//   await page.getByRole('textbox', { name: 'Phone number or e-mail' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Omantel@777');
//   await page.getByText('Sign in').click();
//   await page.locator('a').filter({ hasText: 'Store' }).click();
//   await page.getByRole('button', { name: 'Smartphones' }).first().click();
//   await page.getByRole('button', { name: 'Apple' }).click();
//   await page.getByRole('link', { name: 'new tag icon AppleiPhone 17 Pro Max Starts from  522.000 With 5% VAT:  548.' }).click();
//   await page.locator('.sc-fbNXWD.TIwUc > div > .injected-svg').click();
//   await page.getByRole('button', { name: 'Add to cart' }).click();
//   await page.getByRole('img').nth(2).click();
//   await page.getByRole('img').nth(3).click();
//   await page.getByRole('link', { name: '2', exact: true }).click();
//   await page.getByRole('checkbox').first().uncheck();
//   await page.getByRole('button', { name: 'Remove insurance' }).click();
//   await page.getByTestId('icon-plus').getByRole('img').click();
//   await page.locator('.sc-kNMOeM > div:nth-child(3)').click();
//   await page.locator('.sc-ePYyfT').first().click();
//   await page.locator('.sc-ePYyfT').first().click();
//   await page.getByText('Remove Item').click();
//   await page.getByRole('button', { name: 'Go to store' }).click();
// });
