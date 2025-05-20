# Cloudflare Pages 설정 가이드

이 문서는 Next.js 블로그를 Cloudflare Pages에 배포하는 방법을 설명합니다.

## 1. Cloudflare Pages 프로젝트 생성

1. Cloudflare 대시보드에 로그인합니다.
2. "Pages" 탭으로 이동합니다.
3. "Create a project" 버튼을 클릭합니다.
4. "Connect to Git" 옵션을 선택합니다.
5. GitHub 계정에 연결하고 `efww/blog` 저장소를 선택합니다.

## 2. 빌드 설정 구성

다음과 같이 빌드 설정을 구성합니다:

- **프로젝트 이름**: `efwwww` (또는 원하는 이름)
- **프로덕션 브랜치**: `main`
- **빌드 설정**:
  - **프레임워크 프리셋**: Next.js
  - **빌드 명령어**: `npm run build`
  - **빌드 출력 디렉토리**: `out`
- **환경 변수**:
  - `NODE_VERSION`: `20`

## 3. 빌드 및 배포

1. "Save and Deploy" 버튼을 클릭합니다.
2. Cloudflare Pages가 저장소의 코드를 가져와 빌드하고 배포합니다.
3. 빌드가 완료되면 `https://efwwww.pages.dev` URL에서 블로그를 확인할 수 있습니다.

## 4. 커스텀 도메인 설정 (선택 사항)

1. 배포된 프로젝트 페이지에서 "Custom domains" 탭으로 이동합니다.
2. "Set up a custom domain" 버튼을 클릭합니다.
3. 사용할 도메인을 입력하고 안내에 따라 DNS 설정을 구성합니다.

## 5. 자동 배포

GitHub 저장소에 변경 사항을 푸시할 때마다 Cloudflare Pages는 자동으로 새 빌드를 시작하고 배포합니다.

로컬에서 변경 사항을 푸시하려면:

```bash
./deploy.sh
```

이 스크립트는 블로그를 빌드하고, 변경 사항을 커밋하고, GitHub에 푸시합니다.
