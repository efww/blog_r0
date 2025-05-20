import { Metadata } from 'next'
import Link from 'next/link'
import { getContentBySlug, getAllContentSlugs } from '@/lib/markdown'

interface ContentPageParams {
  params: {
    slug: string
  }
}

// 정적 사이트 생성을 위한 generateStaticParams 함수
export async function generateStaticParams() {
  try {
    // 모든 컨텐츠 슬러그 가져오기 시도
    const slugs = getAllContentSlugs()
    console.log('사용 가능한 콘텐츠 슬러그:', slugs.map(item => item.params.slug))
    return slugs
  } catch (error) {
    console.warn('컨텐츠 슬러그 가져오기 실패:', error)
    // 빌드 환경에서는 수동으로 슬러그 정의
    // 최신 파일을 포함하여 모든 콘텐츠 파일을 여기에 추가해야 합니다
    return [
      { slug: 'sample-note' },
      { slug: 'index' },
      { slug: 'PRD Multi-Strategy Optimization Backtester (Updated)' },
      { slug: '1111' } // 새로 추가한 파일
    ]
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