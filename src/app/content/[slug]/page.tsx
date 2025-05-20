import { Metadata } from 'next'
import Link from 'next/link'
import { getContentBySlug, getAllContentSlugs } from '@/lib/markdown'

interface ContentPageParams {
  params: {
    slug: string
  }
}

// 동적 라우팅을 위한 generateStaticParams 함수
// 개발 환경에서는 이 함수가 동작하지 않고, 
// 런타임에 요청에 따라 페이지가 렌더링됩니다
export async function generateStaticParams() {
  try {
    // 모든 컨텐츠 슬러그 가져오기 시도
    return getAllContentSlugs()
  } catch (error) {
    console.warn('컨텐츠 슬러그 가져오기 실패:', error)
    // 빈 배열 반환 - 모든 동적 경로는 런타임에 처리됨
    return []
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: ContentPageParams): Promise<Metadata> {
  const content = await getContentBySlug(params.slug)
  
  return {
    title: `${content.title} | Digital Garden`,
    description: content.description || `Notes on ${content.title}`,
  }
}

export default async function ContentPage({ params }: ContentPageParams) {
  const content = await getContentBySlug(params.slug)
  
  return (
    <div className="page-transition">
      <article className="article-container">
        <header className="article-header">
          <h1 className="article-title">{content.title}</h1>
          <div className="article-meta">
            {content.date && (
              <time className="article-date">{content.date}</time>
            )}
            {content.tags && content.tags.length > 0 && (
              <div className="article-tags">
                {content.tags.map((tag: string) => (
                  <Link key={tag} href={`/tags/${tag}`} className="article-tag">
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </header>
        
        <div 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
        
        <div className="article-footer mt-8 pt-6 border-t border-claude-light-border dark:border-claude-dark-border">
          <div className="flex justify-between">
            <Link href="/" className="claude-button">
              ← Back to All Notes
            </Link>
            <Link href="#top" className="claude-button">
              ↑ Top
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
} 