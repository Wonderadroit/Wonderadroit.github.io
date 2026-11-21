const { test, expect } = require('@playwright/test');

test('premium portfolio content and primary navigation render', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Wonder Olabisi | Security Engineering, Migration Technology & QA');
  await expect(page.getByRole('heading', { name: /Build systems.*Test the evidence/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Try the interactive QA lab/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Northstar Supply' })).toBeVisible();
  await expect(page.getByText(/not a real customer finding/i)).toBeVisible();
  await expect(page.getByRole('link', { name: /Explore CYDRA Web2 on GitHub/i })).toHaveAttribute('href', 'https://github.com/Wonderadroit/Cydra_web2');
});

test('search and category filter narrow the product grid', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('searchbox', { name: 'Search products' }).fill('Travel Mug');
  await expect(page.locator('#products .product')).toHaveCount(1);
  await expect(page.locator('#products')).toContainText('Travel Mug');
  await page.getByRole('searchbox', { name: 'Search products' }).fill('');
  await page.getByLabel('Filter by category').selectOption('desk');
  await expect(page.locator('#products')).toContainText('Desk Stand');
  await expect(page.locator('#products')).not.toContainText('Travel Mug');
});

test('seeded mismatch is reproducible and observation unlocks reference result', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Add Travel Mug to cart' }).click();
  await expect(page.locator('#products')).toContainText('$18.00');
  await expect(page.locator('#lines')).toContainText('$21.00');
  await expect(page.locator('#count')).toHaveText('1');
  await page.getByRole('radio', { name: /Travel Mug price changes in the cart/i }).check();
  await page.getByRole('button', { name: /Record observation/i }).click();
  await expect(page.locator('#obsstatus')).toContainText('identified the seeded mismatch');
  await expect(page.locator('#revealed')).toBeVisible();
  await expect(page.locator('#revealed')).toContainText('listing shows $18.00');
});

test('report download contains steps, expected/actual, and synthetic disclosure', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('radio', { name: /Travel Mug price changes in the cart/i }).check();
  await page.getByRole('button', { name: /Record observation/i }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: /Download report/i }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('cydra-synthetic-qa-report.md');
  const stream = await download.createReadStream();
  let body = '';
  for await (const chunk of stream) body += chunk.toString('utf8');
  expect(body).toContain('This is a fictional training scenario');
  expect(body).toContain('## Steps to reproduce');
  expect(body).toContain('## Expected result');
  expect(body).toContain('## Actual result');
  expect(body).toContain('No production system or real customer application was tested');
});

test('reset clears cart and restores the locked reference state', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Add Travel Mug to cart' }).click();
  await page.getByRole('radio', { name: /Travel Mug price changes in the cart/i }).check();
  await page.getByRole('button', { name: /Record observation/i }).click();
  await expect(page.locator('#revealed')).toBeVisible();
  await page.getByRole('button', { name: /Reset experience/i }).click();
  await expect(page.locator('#count')).toHaveText('0');
  await expect(page.locator('#total')).toHaveText('$0.00');
  await expect(page.locator('#revealed')).toBeHidden();
  await expect(page.locator('#locked')).toBeVisible();
  await expect(page.locator('#progresslabel')).toHaveText('0 of 3 steps');
});

test('layout remains usable at a narrow mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Build systems.*Test the evidence/i })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add Travel Mug to cart' })).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});


test('professional positioning, Project Frontier and metadata are present', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Wonder Olabisi.*Security Engineering/i);
  await expect(page.getByRole('heading', { name: /Build systems.*Test the evidence/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Project Frontier.*trustworthy digital systems/i })).toBeVisible();
  await expect(page.getByText(/Not an NIS or government system/i)).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://wonderadroit.github.io/');
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /Project Frontier/);
});

test('mobile navigation opens, follows a link and closes accessibly', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: /Menu/ });
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Project Frontier' })).toBeVisible();
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Project Frontier' }).click();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(page).toHaveURL(/#frontier$/);
});

test('skip link moves keyboard users to the main content', async ({ page }) => {
  await page.goto('/');
  const skip = page.getByRole('link', { name: 'Skip to content' });
  await expect(skip).toHaveAttribute('href', '#main-content');
});
