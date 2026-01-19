import { Page, Locator, expect } from '@playwright/test';
export class HomePage {
  readonly page: Page;
  readonly categoryMenu: Locator;
  readonly products: Locator;
  readonly consumerGoodsLink: Locator;
  constructor(page: Page) {
    this.page = page;
    this.categoryMenu = page.locator('.category-list');
    this.products = page.locator('.product-list-item');
    this.consumerGoodsLink = page.locator('#primary-menu').getByRole('link', { name: 'Consumer Goods' });
  }
   async goToCategory() {
        await this.consumerGoodsLink.click();
    }
    async assertConsumerGoodsAreOpen(){

    }
  }