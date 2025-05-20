"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'

export default function LeftSidebar() {
  const pathname = usePathname()
  
  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Blog', href: '/blog' },
    { title: 'About', href: '/about' },
  ]
  
  return (
    <aside className="claude-sidebar left-0 border-r z-20">
      <div className="p-4">
        <div className="mb-6">
          <Link href="/" className="flex items-center hover-lift">
            <h1 className="text-2xl font-bold text-claude-light-text dark:text-claude-dark-text">Robert&apos;s</h1>
          </Link>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
          <ThemeToggle className="ml-2" />
        </div>
        
        <nav className="mt-6 sidebar-section">
          <h3 className="sidebar-title">Navigation</h3>
          <ul className="sidebar-list">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`sidebar-link hover-lift ${
                    pathname === item.href ? 'active' : ''
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="sidebar-section">
          <h3 className="sidebar-title">Recent Posts</h3>
          <ul className="sidebar-list">
            <li>
              <Link href="/blog/first-post" className="sidebar-link hover-lift">
                First Post
              </Link>
            </li>
            <li>
              <Link href="/blog/second-post" className="sidebar-link hover-lift">
                Second Post
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="sidebar-section">
          <h3 className="sidebar-title">Tags</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/tags/tech" className="claude-link internal text-sm">tech</Link>
            <Link href="/tags/programming" className="claude-link internal text-sm">programming</Link>
            <Link href="/tags/web" className="claude-link internal text-sm">web</Link>
            <Link href="/tags/design" className="claude-link internal text-sm">design</Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
