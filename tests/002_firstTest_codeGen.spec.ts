import { test, expect } from '@playwright/test';

test('Verify Demo Web Shop home page', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  await expect(
    page.getByRole('link', { name: 'Tricentis Demo Web Shop' })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Welcome to our store' })
  ).toBeVisible();
});
