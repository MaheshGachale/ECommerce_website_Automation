import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.priceLocator = page.locator('.inventory_item_price');
    this.checkoutButton = page.locator("//button[text() ='Checkout']");
  }

  async verifyProductPrice(expectedPrice) {
    const priceText = await this.priceLocator.innerText();
    await expect(priceText).toBe(expectedPrice);
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
