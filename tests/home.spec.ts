import { test, expect } from '@playwright/test';

test.describe('홈페이지', () => {
  test('페이지 타이틀이 올바르게 표시됨', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Robert's Blog/);
  });

  test('헤더가 표시됨', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { name: "Robert's Blog" });
    await expect(heading).toBeVisible();
  });

  test('최근 글 섹션이 표시됨', async ({ page }) => {
    await page.goto('/');
    const recentPostsHeading = page.getByRole('heading', { name: '최근 글' });
    await expect(recentPostsHeading).toBeVisible();
  });

  test('블로그 링크가 작동함', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: '글 목록 보기' }).click();
    await expect(page).toHaveURL('/blog');
  });
});

test.describe('블로그 목록 페이지', () => {
  test('블로그 페이지 타이틀이 표시됨', async ({ page }) => {
    await page.goto('/blog');
    const heading = page.getByRole('heading', { name: 'Blog' });
    await expect(heading).toBeVisible();
  });

  test('블로그 게시물이 표시됨', async ({ page }) => {
    await page.goto('/blog');
    const firstPost = page.getByRole('link', { name: 'PRD Multi-Strategy Optimization Backtester (Updated)' });
    await expect(firstPost).toBeVisible();
  });

  test('게시물 링크가 작동함', async ({ page }) => {
    await page.goto('/blog');
    await page.getByRole('link', { name: 'PRD Multi-Strategy Optimization Backtester (Updated)' }).click();
    await expect(page).toHaveURL('/blog/prd-multi-strategy-optimization-backtester');
  });
});

test.describe('블로그 게시물 페이지', () => {
  test('게시물 내용이 표시됨', async ({ page }) => {
    await page.goto('/blog/prd-multi-strategy-optimization-backtester');
    const heading = page.getByRole('heading', { name: 'PRD Multi-Strategy Optimization Backtester (Updated)' });
    await expect(heading).toBeVisible();
  });

  test('작성자 정보가 표시됨', async ({ page }) => {
    await page.goto('/blog/prd-multi-strategy-optimization-backtester');
    const authorInfo = page.getByText('작성자: 세상에서 가장 훌륭한 주인님');
    await expect(authorInfo).toBeVisible();
  });
});

test.describe('다크 모드', () => {
  test('테마 전환 버튼이 작동함', async ({ page }) => {
    await page.goto('/');
    
    // 현재 테마 체크
    const initialTheme = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });
    
    // 테마 전환 버튼 클릭
    await page.getByRole('button', { name: 'Toggle theme' }).click();
    
    // 테마가 변경되었는지 확인
    const newTheme = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });
    
    expect(newTheme).not.toBe(initialTheme);
  });
});

test.describe('반응형 레이아웃', () => {
  test('모바일 화면에서 사이드바가 숨겨짐', async ({ page }) => {
    // 모바일 화면 크기 설정
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 오른쪽 사이드바 존재 여부 확인
    const rightSidebar = page.locator('.sidebar.right');
    await expect(rightSidebar).not.toBeVisible();
  });
});
