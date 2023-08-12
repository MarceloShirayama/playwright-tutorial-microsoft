import { test, expect } from "@playwright/test";

const baseUrl = String(process.env.CONTOSOTRADERS_URL);

test("test", async ({ page }) => {
  await page.goto(baseUrl);
  await page
    .getByPlaceholder("Search by product name or search by image")
    .click();
  await page
    .getByPlaceholder("Search by product name or search by image")
    .fill("xbox");
  await page.getByRole("button", { name: "iconimage" }).click();
  await page
    .getByRole("img", {
      name: "Xbox Wireless Controller Mineral Camo Special Edition",
    })
    .click();
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "Add To Bag" }).click();
  await page.getByLabel("cart").click();
  await expect(page.getByTestId("subtotal")).toHaveText("$448.00");
});
