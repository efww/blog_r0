# Claude Theme Blog

Claude 테마를 기반으로 한 깔끔한 블로그 플랫폼입니다. Next.js와 Tailwind CSS를 사용하여 개발되었습니다.

## 특징

- 🎨 Claude AI 테마 디자인 (라이트/다크 모드)
- 📱 반응형 레이아웃
- ⚡ Next.js 기반 빠른 성능
- 📝 마크다운 지원
- 🔍 옵시디언 연동 지원
- 🎭 Playwright MCP 테스트 환경

## 시작하기

```bash
# 개발 서버 실행
./run-dev.sh

# 혹은
npm run dev
```

## 테스트하기

```bash
# MCP 테스트 실행
./run-mcp-test.sh

# UI 모드에서 테스트 실행
./run-mcp-ui.sh

# 테스트 보고서 보기
npm run test:report
```

## 배포하기

```bash
# 빌드 및 배포
./deploy.sh

# 혹은
npm run build
```

## 디렉토리 구조

```
/
├── src/
│   ├── app/            # 페이지 컴포넌트
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── lib/            # 유틸리티 함수
│   └── styles/         # 글로벌 스타일
├── content/            # 마크다운 콘텐츠
├── public/             # 정적 파일
├── tests/              # Playwright MCP 테스트
└── package.json
```

## 옵시디언 연동

이 블로그는 옵시디언의 마크다운 파일과 연동됩니다. `content` 디렉토리에 옵시디언 노트를 배치하면 자동으로 블로그 포스트로 변환됩니다.

## MCP 테스트 실행하기

Playwright를 사용한 MCP 테스트를 실행하려면:

1. 테스트 브라우저 설치하기:
   ```bash
   npm run test:install
   ```

2. 테스트 실행하기:
   ```bash
   npm run test
   ```

3. UI 모드에서 테스트 실행하기:
   ```bash
   npm run test:ui
   ```

4. 디버그 모드에서 테스트 실행하기:
   ```bash
   npm run test:debug
   ```

5. 테스트 보고서 보기:
   ```bash
   npm run test:report
   ```

## 커스터마이징

### 테마 색상 변경

`tailwind.config.js` 파일에서 Claude 테마 색상을 수정할 수 있습니다.

### 레이아웃 수정

`src/app/layout.tsx` 파일에서 기본 레이아웃을 수정할 수 있습니다.
