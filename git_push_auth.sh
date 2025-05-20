#!/bin/bash

# GitHub 사용자 이름 설정 (변경 필요)
USERNAME="efww"

# 현재 디렉토리 위치 확인
cd $(dirname "$0")

# 현재 날짜와 시간을 한국 형식으로 가져옴
DATE=$(date "+%Y-%m-%d %H:%M:%S")

# git 명령어 실행
git add .
git commit --allow-empty -m "$DATE 업데이트"

# GitHub 개인 액세스 토큰을 입력받음
echo "GitHub 개인 액세스 토큰을 입력하세요:"
read -s TOKEN

# 토큰을 사용하여 push
git push https://$USERNAME:$TOKEN@github.com/efww/blog.git main

echo "============================="
echo "깃 푸시 완료: $DATE"
echo "============================="
