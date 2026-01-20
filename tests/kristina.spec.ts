import { test } from '@playwright/test';
import { KristinaPage } from '../POMs/kristinaPage';


test('clicking on product for description', async ({ page }) => {
  const kristinaPage = new KristinaPage(page);

  await page.goto('https://preview.owasp-juice.shop/#/');

  await kristinaPage.productDetails();

  await kristinaPage.assertProductDetailsAreOpened();
  

});
