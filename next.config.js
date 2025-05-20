/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  // Remove static export for now to enable dynamic routes
  images: {
    unoptimized: true,  // Cloudflare Pages에서 이미지 최적화 비활성화
  },
  // 기존 사이트 baseUrl 설정
  basePath: '',
  trailingSlash: true,
}

// CommonJS 모듈 내보내기 방식으로 변경
module.exports = nextConfig
