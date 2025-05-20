#!/bin/bash

# 현재 디렉토리 위치 확인
cd $(dirname "$0")

# 현재 날짜와 시간을 한국 형식으로 가져옴
DATE=$(date "+%Y-%m-%d %H:%M:%S")

# git 명령어 실행
git add .
git commit -m "$DATE 업데이트"
git push

echo "============================="
echo "깃 푸시 완료: $DATE"
echo "============================="

# 5초 후 자동 종료
sleep 5
