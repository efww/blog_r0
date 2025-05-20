"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { useState, useEffect } from 'react'

export default function LeftSidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 800)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])
  
  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Blog', href: '/blog' },
    { title: 'About', href: '/about' },
  ]
  
  return (
    <>
      {/* Mobile menu toggle button */}
      {isMobile && (
        <button 
          className="fixed top-4 left-4 z-30 p-2 rounded-md bg-claude-light-surface dark:bg-claude-dark-surface border border-claude-light-border dark:border-claude-dark-border"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      )}
      
      <aside className={`claude-sidebar left-0 border-r z-20 ${isMobile && !isMobileMenuOpen ? 'hidden' : ''}`}>
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
                    onClick={() => isMobile && setIsMobileMenuOpen(false)}
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
                <Link 
                  href="/blog/first-post" 
                  className="sidebar-link hover-lift"
                  onClick={() => isMobile && setIsMobileMenuOpen(false)}
                >
                  First Post
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog/second-post" 
                  className="sidebar-link hover-lift"
                  onClick={() => isMobile && setIsMobileMenuOpen(false)}
                >
                  Second Post
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="sidebar-section">
            <h3 className="sidebar-title">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/tags/tech" className="claude-link internal text-sm" onClick={() => isMobile && setIsMobileMenuOpen(false)}>tech</Link>
              <Link href="/tags/programming" className="claude-link internal text-sm" onClick={() => isMobile && setIsMobileMenuOpen(false)}>programming</Link>
              <Link href="/tags/web" className="claude-link internal text-sm" onClick={() => isMobile && setIsMobileMenuOpen(false)}>web</Link>
              <Link href="/tags/design" className="claude-link internal text-sm" onClick={() => isMobile && setIsMobileMenuOpen(false)}>design</Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
