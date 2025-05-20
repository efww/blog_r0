import { Metadata } from 'next'
import Link from 'next/link'
import { getAllContent } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'Home | Robert\'s Blog',
  description: 'Welcome to Robert\'s blog',
}

export default async function Home() {
  const allContent = await getAllContent();
  
  return (
    <div className="page-transition">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Digital Garden</h1>
        <p className="text-claude-light-text-secondary dark:text-claude-dark-text-secondary">
          A collection of all my digital notes and articles
        </p>
      </header>
      
      <section>
        <div className="grid gap-6">
          {allContent.map((content) => (
            <article key={content.slug} className="claude-card hover-lift transition-all duration-200">
              <Link 
                href={`/content/${encodeURIComponent(content.slug)}`}
                className="block p-4 no-underline text-claude-light-text dark:text-claude-dark-text hover:text-claude-light-text dark:hover:text-claude-dark-text"
              >
                <h2 className="text-xl font-semibold mb-2">{content.title}</h2>
                
                <div className="flex items-center text-sm text-claude-light-text-tertiary dark:text-claude-dark-text-tertiary mb-2">
                  <time>{content.date}</time>
                </div>
                
                {content.description && (
                  <p className="text-claude-light-text-secondary dark:text-claude-dark-text-secondary">
                    {content.description}
                  </p>
                )}
                
                {content.tags && content.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {content.tags.map((tag: string) => (
                      <span 
                        key={tag} 
                        className="text-xs bg-claude-light-accent dark:bg-claude-dark-accent px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
