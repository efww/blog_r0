#!/bin/bash

# 블로그 빌드 및 배포 스크립트
cd "$(dirname "$0")"

echo "📦 블로그 빌드 중..."
npm run build

if [ $? -eq 0 ]; then
  echo "✅ 빌드 완료!"
  
  # Git 저장소에 변경사항 추가
  git add .
  
  # 현재 날짜와 시간으로 커밋 메시지 생성
  COMMIT_DATE=$(date "+%Y-%m-%d %H:%M:%S")
  git commit -m "$COMMIT_DATE 업데이트"
  
  # 변경사항 푸시
  git push
  
  echo "🚀 배포 완료!"
else
  echo "❌ 빌드 실패!"
  exit 1
fi
