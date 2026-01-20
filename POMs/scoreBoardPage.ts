import { Page, Locator, expect } from '@playwright/test';

export class ScoreBoardPage {
  readonly page: Page;
  readonly filterButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filterButton = page.getByRole('button', { name: 'Observability Failures' });
  }

  async filteredScoreBoard() {
    await this.filterButton.click();
  }

  async assertfilteredScoreBoardIsShown() {
    await expect(this.page).toHaveURL(
      'https://preview.owasp-juice.shop/#/score-board?categories=Observability%20Failures'
    );
  }
}