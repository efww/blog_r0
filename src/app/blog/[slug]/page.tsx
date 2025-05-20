import { Metadata } from 'next'
import Link from 'next/link'

interface BlogPostParams {
  params: {
    slug: string
  }
}

// This function generates the static paths for the blog posts
export async function generateStaticParams() {
  // In a real app, this would fetch from your content source
  // For now, we'll just return some sample slugs
  return [
    { slug: 'first-post' },
    { slug: 'second-post' },
    { slug: 'prd-multi-strategy-optimization-backtester' }
  ]
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  // 실제로는 여기서 slug를 이용해 블로그 포스트 데이터를 가져와 메타데이터를 생성합니다.
  return {
    title: `${params.slug} | Robert's Blog`,
    description: `${params.slug} 포스트에 대한 설명입니다.`,
  }
}

export default function BlogPost({ params }: BlogPostParams) {
  // 실제로는 여기서 slug를 이용해 블로그 포스트 데이터를 가져옵니다.
  const post = {
    title: `${params.slug} 포스트 제목`,
    date: '2023-06-01',
    tags: ['웹개발', 'React', 'Next.js'],
    content: `
      <p>이것은 ${params.slug} 포스트의 내용입니다. 마크다운이나 HTML로 작성된 콘텐츠가 여기에 들어갑니다.</p>
      <h2>섹션 1</h2>
      <p>섹션 1의 내용입니다. 여기에는 다양한 텍스트와 이미지, 코드 블록 등이 포함될 수 있습니다.</p>
      <pre><code>// 코드 예시
const hello = 'world';
console.log(hello);</code></pre>
      <h2>섹션 2</h2>
      <p>섹션 2의 내용입니다. 여기에는 인용구나 목록 등이 포함될 수 있습니다.</p>
      <blockquote>
        <p>이것은 인용구 예시입니다. 다른 사람의 말이나 글을 인용할 때 사용합니다.</p>
      </blockquote>
      <ul>
        <li>목록 항목 1</li>
        <li>목록 항목 2</li>
        <li>목록 항목 3</li>
      </ul>
    `
  }

  return (
    <div className="page-transition">
      <article className="article-container">
        <header className="article-header">
          <h1 className="article-title">{post.title}</h1>
          <div className="article-meta">
            <time className="article-date">{post.date}</time>
            <div className="article-tags">
              {post.tags.map((tag, i) => (
                <Link key={i} href={`/tags/${tag}`} className="article-tag">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </header>
        
        <div 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="article-footer mt-8 pt-6 border-t border-claude-light-border dark:border-claude-dark-border">
          <div className="flex justify-between">
            <Link href="/blog" className="claude-button">
              ← 모든 포스트
            </Link>
            <Link href="#top" className="claude-button">
              맨 위로 ↑
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
} 