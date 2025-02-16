import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('[data-test="firstName"]');
    this.lastNameField = page.locator('[data-test="lastName"]');
    this.postalCodeField = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.summaryTotal = page.locator('.summary_subtotal_label');
    this.finishButton = page.locator('[data-test="finish"]');
    this.thankYouNote = page.locator('.complete-header');
  }

  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.fill(postalCode);
  }

  async continueToNextStep() {
    await this.continueButton.click();
  }

  async verifyOrderTotal(expectedTotal) {
    const totalText = await this.summaryTotal.innerText();
    await expect(totalText).toContain(expectedTotal);
  }

  async completeOrder() {
    await this.finishButton.click();
  }

  async verifyThankYouMessage(expectedMessage) {
    const messageText = await this.thankYouNote.innerText();
    await expect(messageText).toBe(expectedMessage);
  }
}
