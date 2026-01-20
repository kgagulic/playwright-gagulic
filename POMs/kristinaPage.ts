import { Page, Locator, expect } from '@playwright/test';

export class KristinaPage {
  readonly page: Page;
  readonly productDescription: Locator;
  readonly customerFeedback: Locator;

   constructor(page: Page) {
    this.page = page;
    this.productDescription = page.locator('div').filter({ hasText: 'Apple Juice (1000ml)1.99¤' }).nth(5);
    this.customerFeedback = page.getByRole('link', { name: 'Go to contact us page' });

   }

    async productDetails() {
    await this.productDescription.click();
  }

   async assertProductDetailsAreOpened() {
   const newWindow = this.page.getByRole('heading', { name: 'Apple Juice (1000ml)' });

    await expect(newWindow).toBeVisible();
    }

  async goToFeedback() {
        await this.customerFeedback.click();
    }

   async assertConsumerFeedbackIsOpen(){
       await expect(this.page).toHaveURL('https://preview.owasp-juice.shop/#/contact'); 
    } 

  }