import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Robert\'s Blog',
  description: 'Welcome to Robert\'s blog',
}

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="claude-title">Robert&apos;s Blog</h1>
      <p className="claude-subtitle">세상에서 가장 훌륭한 블로그</p>
      
      <div className="claude-card">
        <h2 className="text-xl font-semibold mb-2">환영합니다!</h2>
        <p className="mb-4">
          이 블로그는 최신 기술과 전략에 대한 글을 공유하는 공간입니다.
          Claude 테마와 함께 깔끔하고 우아한 디자인으로 진행됩니다.
        </p>
        <a href="/blog" className="claude-link">글 목록 보기 →</a>
      </div>
      
      <h2 className="text-xl font-semibold mt-8 mb-3">최근 글</h2>
      <div className="grid gap-4">
        <div className="claude-card">
          <h3 className="text-lg font-medium mb-1">
            <a href="/blog/prd-multi-strategy-optimization-backtester" className="claude-link">
              PRD Multi-Strategy Optimization Backtester (Updated)
            </a>
          </h3>
          <p className="text-claude-light-text-secondary dark:text-claude-dark-text-secondary text-sm mb-2">
            2025년 5월 20일
          </p>
          <p className="line-clamp-2">
            다중 전략을 시장 맥락에 따라 분기하고 진입 비중까지 조정하는 전략 조합을 자동 실험하여, 
            사람이 직접 상위 전략 100개를 검토할 수 있도록 설계된 고성능 백테스터 개발
          </p>
        </div>
        
        <div className="claude-card">
          <h3 className="text-lg font-medium mb-1">
            <a href="/blog/example-post" className="claude-link">
              일반적인 블로그 글 예시
            </a>
          </h3>
          <p className="text-claude-light-text-secondary dark:text-claude-dark-text-secondary text-sm mb-2">
            2025년 5월 15일
          </p>
          <p className="line-clamp-2">
            블로그 글의 예시로, 마크다운 형식으로 작성된 글입니다. 코드 블록, 표, 인용구 등
            다양한 요소를 포함하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}
