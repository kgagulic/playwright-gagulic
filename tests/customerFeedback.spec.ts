import { test } from '@playwright/test';
import { KristinaPage } from '../POMs/kristinaPage';

test('open category', async ({ page }) => {
  const kristinaPage = new KristinaPage(page);

  await page.goto('https://preview.owasp-juice.shop/#/');

  await kristinaPage.goToFeedback();

  
  await kristinaPage.assertConsumerFeedbackIsOpen();

});
