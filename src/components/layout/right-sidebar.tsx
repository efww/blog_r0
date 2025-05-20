"use client"

export default function RightSidebar() {
  return (
    <aside className="claude-sidebar right-0 w-64 border-l z-20">
      <div className="p-4">
        <h3 className="text-lg font-medium mb-4">목차</h3>
        <div className="space-y-2 text-sm">
          <div>
            <a href="#section-1" className="block py-1 hover:text-claude-light-primary dark:hover:text-claude-dark-primary">
              1. 첫 번째 섹션
            </a>
          </div>
          <div>
            <a href="#section-2" className="block py-1 hover:text-claude-light-primary dark:hover:text-claude-dark-primary">
              2. 두 번째 섹션
            </a>
            <div className="pl-3 border-l border-claude-light-border dark:border-claude-dark-border mt-1">
              <a href="#section-2-1" className="block py-1 hover:text-claude-light-primary dark:hover:text-claude-dark-primary">
                2.1 하위 섹션
              </a>
              <a href="#section-2-2" className="block py-1 hover:text-claude-light-primary dark:hover:text-claude-dark-primary">
                2.2 하위 섹션
              </a>
            </div>
          </div>
          <div>
            <a href="#section-3" className="block py-1 hover:text-claude-light-primary dark:hover:text-claude-dark-primary">
              3. 세 번째 섹션
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-claude-light-border dark:border-claude-dark-border">
          <h3 className="text-lg font-medium mb-4">백링크</h3>
          <div className="space-y-2 text-sm">
            <a href="#" className="block py-1 px-2 rounded hover:bg-claude-light-accent dark:hover:bg-claude-dark-accent">
              연관 포스트 1
            </a>
            <a href="#" className="block py-1 px-2 rounded hover:bg-claude-light-accent dark:hover:bg-claude-dark-accent">
              연관 포스트 2
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}
