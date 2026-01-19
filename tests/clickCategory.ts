import { test } from '@playwright/test';
import { HomePage } from '../POMs/homePage';
let homePage: HomePage;

test('navigate category', async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto('https://www.next.ro/en/branded');
  await homePage.goToCategory();

});


/*
test('Add item to cart', async () => {
    // given
    await homePage.addItemToCart('Phones', 'Samsung galaxy s6');
    await homePage.assertItemAddedToCart('Product added');
    // when
    await cartPage.openCart();
    await cartPage.assertCartIsOpened();
    // then
    await cartPage.assertItemIsInCart('Samsung galaxy s6');
});
*/