#!/bin/bash

# Claude 테마 블로그의 MCP 테스트 실행 스크립트
cd "$(dirname "$0")"

# Chromium 브라우저만 사용하여 테스트를 실행합니다
echo "🎭 Playwright MCP 테스트 실행 중..."
npx playwright test --project=chromium

# 테스트 결과 보고서를 자동으로 열기
npx playwright show-report
