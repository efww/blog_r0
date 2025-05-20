#!/bin/bash

# Claude 테마 블로그의 Playwright UI 테스트 실행 스크립트
cd "$(dirname "$0")"

# Playwright UI 모드 실행
echo "🎭 Playwright UI 모드 실행 중..."
npx playwright test --ui
