"use client"

export default function RightSidebar() {
  return (
    <aside className="claude-sidebar right-0 border-l z-20">
      <div className="p-4">
        <div className="sidebar-section">
          <h3 className="sidebar-title">목차</h3>
          <div className="space-y-1">
            <div>
              <a href="#section-1" className="sidebar-link hover-lift">
                1. 첫 번째 섹션
              </a>
            </div>
            <div>
              <a href="#section-2" className="sidebar-link hover-lift">
                2. 두 번째 섹션
              </a>
              <div className="pl-3 border-l border-claude-light-border dark:border-claude-dark-border mt-1 ml-2 space-y-1">
                <a href="#section-2-1" className="sidebar-link hover-lift">
                  2.1 하위 섹션
                </a>
                <a href="#section-2-2" className="sidebar-link hover-lift">
                  2.2 하위 섹션
                </a>
              </div>
            </div>
            <div>
              <a href="#section-3" className="sidebar-link hover-lift">
                3. 세 번째 섹션
              </a>
            </div>
          </div>
        </div>
        
        <div className="sidebar-section pt-4 border-t border-claude-light-border dark:border-claude-dark-border">
          <h3 className="sidebar-title">백링크</h3>
          <div className="backlinks">
            <a href="#" className="backlink-item hover-lift">
              연관 포스트 1
            </a>
            <a href="#" className="backlink-item hover-lift">
              연관 포스트 2
            </a>
          </div>
        </div>
        
        <div className="sidebar-section pt-4 border-t border-claude-light-border dark:border-claude-dark-border">
          <h3 className="sidebar-title">태그</h3>
          <div className="flex flex-wrap gap-2">
            <a href="#" className="claude-link internal text-sm">tech</a>
            <a href="#" className="claude-link internal text-sm">programming</a>
            <a href="#" className="claude-link internal text-sm">web</a>
          </div>
        </div>
      </div>
    </aside>
  )
}
