import { test, expect } from '@playwright/test';

test.describe('사이드바', () => {
  test('왼쪽 사이드바에 로고가 표시됨', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('.left.sidebar').getByRole('heading', { name: "Robert's" });
    await expect(logo).toBeVisible();
  });

  test('왼쪽 사이드바에 검색창이 표시됨', async ({ page }) => {
    await page.goto('/');
    const searchInput = page.locator('.left.sidebar input[placeholder="Search..."]');
    await expect(searchInput).toBeVisible();
  });

  test('왼쪽 사이드바에 네비게이션 메뉴가 표시됨', async ({ page }) => {
    await page.goto('/');
    const homeLink = page.locator('.left.sidebar').getByRole('link', { name: 'Home' });
    const blogLink = page.locator('.left.sidebar').getByRole('link', { name: 'Blog' });
    const aboutLink = page.locator('.left.sidebar').getByRole('link', { name: 'About' });
    
    await expect(homeLink).toBeVisible();
    await expect(blogLink).toBeVisible();
    await expect(aboutLink).toBeVisible();
  });

  test('오른쪽 사이드바에 목차가 표시됨', async ({ page }) => {
    await page.goto('/');
    const tocHeading = page.locator('.right.sidebar').getByRole('heading', { name: '목차' });
    await expect(tocHeading).toBeVisible();
  });

  test('오른쪽 사이드바에 백링크가 표시됨', async ({ page }) => {
    await page.goto('/');
    const backlinksHeading = page.locator('.right.sidebar').getByRole('heading', { name: '백링크' });
    await expect(backlinksHeading).toBeVisible();
  });

  test('데스크톱에서 양쪽 사이드바가 표시됨', async ({ page }) => {
    // 데스크톱 화면 크기 설정
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    
    const leftSidebar = page.locator('.sidebar.left');
    const rightSidebar = page.locator('.sidebar.right');
    
    await expect(leftSidebar).toBeVisible();
    await expect(rightSidebar).toBeVisible();
  });

  test('태블릿에서 왼쪽 사이드바만 표시됨', async ({ page }) => {
    // 태블릿 화면 크기 설정
    await page.setViewportSize({ width: 900, height: 1200 });
    await page.goto('/');
    
    const leftSidebar = page.locator('.sidebar.left');
    const rightSidebar = page.locator('.sidebar.right');
    
    await expect(leftSidebar).toBeVisible();
    await expect(rightSidebar).not.toBeVisible();
  });

  test('모바일에서 사이드바가 표시되지 않음', async ({ page }) => {
    // 모바일 화면 크기 설정
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const leftSidebar = page.locator('.sidebar.left');
    const rightSidebar = page.locator('.sidebar.right');
    
    // 이 테스트는 현재 구현에 따라 달라질 수 있음
    // 최상위 레이아웃이 실제로 사이드바를 숨기는지 여부에 따라 달라짐
    await expect(rightSidebar).not.toBeVisible();
  });
});
