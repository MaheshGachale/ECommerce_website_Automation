import { expect } from '@playwright/test';

export class ProductPage {
  /**
   * Initializes a new instance of the ProductPage class.
   *
   * @param {Page} page - The Playwright Page object to interact with.
   * @property {Locator} productName - Locator for the product name element.
   * @property {Locator} addToCartButton - Locator for the add to cart button.
   * @property {Locator} backToProductsButton - Locator for the back to products button.
   * @property {Locator} cartLink - Locator for the shopping cart link.
   */

  constructor(page) {
    this.page = page;
    this.productName = page.locator("//div[text()='Sauce Labs Backpack']");
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.backToProductsButton = page.locator('[data-test="back-to-products"]');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async selectProduct() {
    await this.productName.click();
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async backToProducts() {
    await this.backToProductsButton.click();
  }

  async navigateToCart() {
    await this.cartLink.click();
  }
}
