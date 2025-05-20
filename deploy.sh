#!/bin/bash

# Next.js 블로그 빌드 및 Cloudflare Pages 배포 스크립트
cd "$(dirname "$0")"

echo "📦 블로그 빌드 중..."
npm run build

if [ $? -eq 0 ]; then
  echo "✅ 빌드 완료!"
  
  # out 디렉토리 확인
  if [ -d "out" ]; then
    echo "✅ 'out' 디렉토리가 성공적으로 생성되었습니다."
    
    # _redirects 파일을 out 디렉토리로 복사
    cp _redirects out/ 2>/dev/null || :
    echo "✅ Cloudflare Pages 설정 파일 복사 완료"
    
    # Git 저장소에 변경사항 추가
    git add .
    
    # 현재 날짜와 시간으로 커밋 메시지 생성
    COMMIT_DATE=$(date "+%Y-%m-%d %H:%M:%S")
    git commit -m "$COMMIT_DATE 업데이트"
    
    # 변경사항 푸시
    git push
    
    echo "🚀 Cloudflare Pages 배포 준비 완료!"
    echo "📝 참고: Cloudflare Pages는 GitHub 저장소에 연결되어 있어야 자동으로 배포됩니다."
    echo "   Cloudflare Pages 대시보드에서 다음 설정을 확인하세요:"
    echo "   - 프로젝트: efww/blog"
    echo "   - 빌드 명령어: npm run build"
    echo "   - 출력 디렉토리: out"
  else
    echo "❌ 'out' 디렉토리가 생성되지 않았습니다. 빌드 설정을 확인하세요."
    exit 1
  fi
else
  echo "❌ 빌드 실패!"
  exit 1
fi
