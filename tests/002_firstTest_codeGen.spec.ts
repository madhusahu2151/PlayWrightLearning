import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('await page.goto('https://demowebshop.tricentis.com/'););
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' }toBeVisible();
  await expect(page.locator('body')).toMatchAriaSnapshot(`- heading "Welcome to our store" [level=2]`);
  await expect(page.locator('body')).toMatchAriaSnapshot(`- heading "Welcome to our store" [level=2]`);
});