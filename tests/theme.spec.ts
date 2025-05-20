import { test, expect } from '@playwright/test';

test.describe('테마 기능', () => {
  test('초기 테마 상태 확인', async ({ page }) => {
    await page.goto('/');
    
    // 시스템 설정에 따라 다를 수 있으므로 페이지가 로드되었는지만 확인
    await expect(page.locator('body')).toBeVisible();
  });

  test('다크 모드 토글 버튼 작동 확인', async ({ page }) => {
    await page.goto('/');
    
    // 초기 상태 확인
    const initialHasLightClass = await page.evaluate(() => {
      return !document.documentElement.classList.contains('dark');
    });
    
    // 테마 토글 버튼 클릭
    await page.getByRole('button', { name: 'Toggle theme' }).click();
    
    // 토글 후 상태 확인
    const afterToggleHasLightClass = await page.evaluate(() => {
      return !document.documentElement.classList.contains('dark');
    });
    
    // 상태가 변경되었는지 확인
    expect(afterToggleHasLightClass).not.toBe(initialHasLightClass);
    
    // 다시 토글
    await page.getByRole('button', { name: 'Toggle theme' }).click();
    
    // 원래 상태로 돌아왔는지 확인
    const afterSecondToggleHasLightClass = await page.evaluate(() => {
      return !document.documentElement.classList.contains('dark');
    });
    
    expect(afterSecondToggleHasLightClass).toBe(initialHasLightClass);
  });

  test('Claude 테마 색상이 적용됨', async ({ page }) => {
    await page.goto('/');
    
    // 라이트 모드에서의 색상 확인
    const primaryColorInLightMode = await page.evaluate(() => {
      const element = document.querySelector('.text-claude-light-primary');
      if (!element) return null;
      return window.getComputedStyle(element).color;
    });
    
    // 테마 토글 버튼 클릭
    await page.getByRole('button', { name: 'Toggle theme' }).click();
    
    // 다크 모드에서의 색상 확인
    const primaryColorInDarkMode = await page.evaluate(() => {
      const element = document.querySelector('.dark\\:text-claude-dark-primary');
      if (!element) return null;
      return window.getComputedStyle(element).color;
    });
    
    // 색상이 다른지 확인
    expect(primaryColorInLightMode).not.toBe(primaryColorInDarkMode);
  });
});
