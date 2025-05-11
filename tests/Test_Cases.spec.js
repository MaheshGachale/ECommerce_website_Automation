import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { credentials } from '../config';


test('End_To_End_Testing_Ecommerce_website', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.navigateToLoginPage();
  await loginPage.login(credentials.username, credentials.password);


  // Product selection
  await productPage.selectProduct();
  await productPage.addProductToCart();
  await productPage.backToProducts();
  await productPage.navigateToCart();

  // Cart verification
  await cartPage.verifyProductPrice('$29.99');
  await cartPage.proceedToCheckout();

  // Checkout process
  await checkoutPage.fillCheckoutInfo('Mahesh', 'G', '1234');
  await checkoutPage.continueToNextStep();
  await checkoutPage.verifyOrderTotal('$29.99');
  await checkoutPage.completeOrder();
  await checkoutPage.verifyThankYouMessage('Thank you for your order!');
});
