import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home | Robert\'s Blog',
  description: 'Welcome to Robert\'s blog',
}

export default function Home() {
  // 임시 블로그 포스트 데이터
  const posts = [
    {
      id: 1,
      title: '첫 번째 블로그 포스트',
      excerpt: '이것은 첫 번째 블로그 포스트의 요약입니다. 여기에는 포스트의 간략한 내용이 들어갑니다.',
      date: '2023-06-01',
      tags: ['웹개발', 'React', 'Next.js']
    },
    {
      id: 2,
      title: '두 번째 블로그 포스트',
      excerpt: '이것은 두 번째 블로그 포스트의 요약입니다. 여기에는 포스트의 간략한 내용이 들어갑니다.',
      date: '2023-06-15',
      tags: ['프로그래밍', 'JavaScript']
    },
    {
      id: 3,
      title: '세 번째 블로그 포스트',
      excerpt: '이것은 세 번째 블로그 포스트의 요약입니다. 여기에는 포스트의 간략한 내용이 들어갑니다.',
      date: '2023-07-01',
      tags: ['데이터분석', 'Python']
    }
  ]

  return (
    <div className="page-transition">
      <section className="mb-12 slide-up">
        <h1 className="claude-title">Welcome to Robert&apos;s Blog</h1>
        <p className="text-center text-claude-light-text-secondary dark:text-claude-dark-text-secondary mb-8">
          세상에서 가장 흥륭한 블로그에 오신 것을 환영합니다.
        </p>
      </section>

      <section className="mb-12 slide-up delay-100">
        <h2 className="text-2xl font-bold mb-6">최근 포스트</h2>
        <div className="space-y-6">
          {posts.map((post, index) => (
            <article 
              key={post.id} 
              className="claude-card hover-lift hover-shadow slide-in delay-200"
            >
              <Link href={`/blog/post-${post.id}`}>
                <h3 className="text-xl font-semibold mb-2 text-claude-light-primary dark:text-claude-dark-primary">
                  {post.title}
                </h3>
              </Link>
              <p className="text-claude-light-text-secondary dark:text-claude-dark-text-secondary mb-3">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-claude-light-accent dark:bg-claude-dark-accent px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <time className="text-sm text-claude-light-text-tertiary dark:text-claude-dark-text-tertiary">
                  {post.date}
                </time>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/blog" className="claude-button inline-block">
            모든 포스트 보기
          </Link>
        </div>
      </section>

      <section className="mb-12 slide-up delay-200">
        <h2 className="text-2xl font-bold mb-6">소개</h2>
        <div className="claude-card">
          <p className="mb-4">
            안녕하세요! 저는 Robert입니다. 이 블로그는 제가 배우고 경험한 것들을 공유하는 공간입니다.
          </p>
          <p>
            주로 웹 개발, 프로그래밍, 그리고 데이터 분석에 관한 글을 작성합니다.
            더 알고 싶으시다면 <Link href="/about" className="claude-link">소개 페이지</Link>를 방문해주세요.
          </p>
        </div>
      </section>
    </div>
  )
}
