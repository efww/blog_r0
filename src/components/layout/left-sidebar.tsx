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
    <aside className="claude-sidebar left-0 w-64 border-r z-20">
      <div className="p-4">
        <div className="mb-6">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-claude-light-primary dark:text-claude-dark-primary">Robert&apos;s</h1>
          </Link>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="claude-input w-full"
            />
          </div>
          <ThemeToggle className="ml-2" />
        </div>
        
        <nav className="mt-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 px-3 rounded-md hover:bg-claude-light-accent dark:hover:bg-claude-dark-accent ${
                    pathname === item.href
                      ? 'bg-claude-light-accent dark:bg-claude-dark-accent font-medium text-claude-light-primary dark:text-claude-dark-primary'
                      : 'text-claude-light-text dark:text-claude-dark-text'
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
