import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...

await page.goto('https://demowebshop.tricentis.com/');
await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
await page.getByRole('heading', { name: 'Welcome to our store' }).click();
await page.getByRole('heading', { name: 'Welcome to our store' }).click();
});