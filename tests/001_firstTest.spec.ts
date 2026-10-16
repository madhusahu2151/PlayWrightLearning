import {test,expect} from "@playwright/test"

test("Basic Test", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await expect(page.locator("body")).toBeVisible();
    await expect(page).toHaveTitle("Demo Web Shop");


});
