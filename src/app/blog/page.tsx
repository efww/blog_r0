import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Robert\'s Blog',
  description: 'Blog posts on Robert\'s Blog',
}

// 임시 블로그 게시물 데이터
const posts = [
  {
    slug: 'prd-multi-strategy-optimization-backtester',
    title: 'PRD Multi-Strategy Optimization Backtester (Updated)',
    date: '2025-05-20',
    excerpt: '다중 전략을 시장 맥락에 따라 분기하고 진입 비중까지 조정하는 전략 조합을 자동 실험하여, 사람이 직접 상위 전략 100개를 검토할 수 있도록 설계된 고성능 백테스터 개발',
  },
  {
    slug: 'example-post',
    title: '일반적인 블로그 글 예시',
    date: '2025-05-15',
    excerpt: '블로그 글의 예시로, 마크다운 형식으로 작성된 글입니다. 코드 블록, 표, 인용구 등 다양한 요소를 포함하고 있습니다.',
  },
  {
    slug: 'context-experiment-set',
    title: 'Context Experiment Set 구조 설계',
    date: '2025-05-10',
    excerpt: '하나의 맥락 지표를 기준으로 다양한 진입/청산/비중 전략을 조합하여 실험할 수 있는 구조를 설계합니다.',
  },
  {
    slug: 'market-context-definition',
    title: '시장 맥락 정의와 매매 전략 분리',
    date: '2025-05-05',
    excerpt: '시장 상황에 따라 전략을 동적으로 변경하는 맥락 기반 시스템 설계에 대한 고찰입니다.',
  },
]

export default function BlogPage() {
  return (
    <div>
      <h1 className="claude-title">Blog</h1>
      
      <div className="grid gap-6 mt-8">
        {posts.map((post) => (
          <article key={post.slug} className="claude-card">
            <h2 className="text-xl font-semibold mb-1">
              <Link href={`/blog/${post.slug}`} className="claude-link hover:no-underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-claude-light-text-secondary dark:text-claude-dark-text-secondary text-sm mb-2">
              {post.date}
            </p>
            <p className="line-clamp-3">{post.excerpt}</p>
            <div className="mt-3">
              <Link 
                href={`/blog/${post.slug}`} 
                className="text-sm claude-link"
              >
                계속 읽기 →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
