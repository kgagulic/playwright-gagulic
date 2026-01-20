import { test } from '@playwright/test';
import { ScoreBoardPage } from '../POMs/scoreBoardPage';




test('filter score board', async ({ page }) => {
  const scoreBoardPage = new ScoreBoardPage(page);

  await page.goto('https://preview.owasp-juice.shop/#/score-board');


  await scoreBoardPage.filteredScoreBoard();

  await scoreBoardPage.assertfilteredScoreBoardIsShown();

});