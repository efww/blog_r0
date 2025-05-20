import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PRD Multi-Strategy Optimization Backtester (Updated) | Robert\'s Blog',
  description: '다중 전략을 시장 맥락에 따라 분기하고 진입 비중까지 조정하는 전략 조합을 자동 실험하여, 사람이 직접 상위 전략 100개를 검토할 수 있도록 설계된 고성능 백테스터 개발',
}

export default function PostPage() {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mt-4 mb-8 text-center">PRD Multi-Strategy Optimization Backtester (Updated)</h1>
      
      <div className="flex justify-center space-x-4 mb-8 text-claude-light-text-secondary dark:text-claude-dark-text-secondary">
        <span>작성자: 세상에서 가장 훌륭한 주인님</span>
        <span>•</span>
        <span>마지막 업데이트: 2025-05-20</span>
      </div>
      
      <div className="border-l-4 border-claude-light-primary dark:border-claude-dark-primary pl-4 my-6 py-2 bg-claude-light-accent dark:bg-claude-dark-accent">
        <p>
          목적: 다중 전략을 시장 맥락에 따라 분기하고 진입 비중까지 조정하는 전략 조합을 자동 실험하여, 사람이 직접 상위 전략 100개를 검토할 수 있도록 설계된 고성능 백테스터 개발
        </p>
      </div>
      
      <h2 id="section-1" className="text-2xl font-bold mt-10 mb-4">🎯 핵심 목표</h2>
      
      <p className="my-4">
        <strong>시장 맥락(Context)</strong> + <strong>진입(Entry)</strong> + <strong>청산(Exit)</strong> + <strong>진입 비중(Sizing)</strong>을 분리하고, <br />
        Context 기준으로 각각을 <strong>독립적으로 최적화</strong>하여 <br />
        가장 효율적인 전략 조합을 도출하는 구조를 개발한다.
      </p>
      
      <hr className="my-8 border-t border-claude-light-border dark:border-claude-dark-border" />
      
      <h2 id="section-2" className="text-2xl font-bold mt-10 mb-4">🧱 시스템 구성요소 정의</h2>
      
      <div className="overflow-x-auto my-6">
        <table className="claude-table">
          <thead>
            <tr>
              <th>구성요소</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>📘 ContextConfig</td>
              <td>시장을 다차원 지표 기준으로 분류하는 규칙 집합</td>
            </tr>
            <tr>
              <td>📈 StrategyEntry</td>
              <td>진입 조건과 지표 파라미터 정의</td>
            </tr>
            <tr>
              <td>🧯 StrategyExit</td>
              <td>청산 조건과 손절/익절/보유 시간 조건 정의</td>
            </tr>
            <tr>
              <td>💰 SizingRule</td>
              <td>각 맥락별 진입 비중 결정</td>
            </tr>
            <tr>
              <td>🔧 ContextExperimentSet</td>
              <td>하나의 시장 맥락 기준으로 Entry/Exit/Sizing 후보군을 독립적으로 실험하는 구조</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <hr className="my-8 border-t border-claude-light-border dark:border-claude-dark-border" />
      
      <h2 id="section-3" className="text-2xl font-bold mt-10 mb-4">🧩 ContextExperimentSet 구조 예시</h2>
      
      <pre className="bg-claude-light-code dark:bg-claude-dark-code p-4 rounded-md overflow-x-auto my-6">
        <code className="text-sm font-mono">
{`struct ContextExperimentSet {
    context: ContextConfig,
    entry_candidates: Vec<StrategyEntry>,
    exit_candidates: Vec<StrategyExit>,
    sizing_candidates: Vec<SizingRule>,
}`}
        </code>
      </pre>
      
      <ul className="list-disc pl-6 my-6">
        <li>하나의 맥락(Context)에 대해 다양한 Entry/Exit/Sizing 조합을 독립적으로 실험</li>
        <li>조합된 결과 중 성능이 가장 우수한 세트를 선별</li>
      </ul>
      
      <h2 id="section-4" className="text-2xl font-bold mt-10 mb-4">📊 전략 실험 흐름</h2>
      
      <pre className="bg-claude-light-code dark:bg-claude-dark-code p-4 rounded-md overflow-x-auto my-6">
        <code className="text-sm font-mono">
{`1. 여러 Context 기준 생성
2. 각 Context에 대해:
    └─ Entry 후보 10개 × Exit 후보 10개 × Sizing 후보 5개 조합 생성
    └─ 총 500개 조합을 실행
3. 각각 백테스트 실행 및 성능 평가
4. Entry / Exit / Sizing 독립적으로 비교 가능
5. Context별 최적 전략 구성 저장`}
        </code>
      </pre>
      
      <h2 id="section-5" className="text-2xl font-bold mt-10 mb-4">✅ 기능 정의 (업데이트 반영)</h2>
      
      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <input type="checkbox" className="mt-1 mr-2" />
          <span><code className="claude-code">context_experiment_set.rs</code> – ContextExperimentSet 구조 정의</span>
        </li>
        <li className="flex items-start">
          <input type="checkbox" className="mt-1 mr-2" />
          <span><code className="claude-code">strategy_entry.rs</code>, <code className="claude-code">strategy_exit.rs</code> – 진입/청산 로직 정의 구조체</span>
        </li>
        <li className="flex items-start">
          <input type="checkbox" className="mt-1 mr-2" />
          <span><code className="claude-code">context_experiment_runner.rs</code> – 맥락별 조합 실험 실행기</span>
        </li>
        <li className="flex items-start">
          <input type="checkbox" className="mt-1 mr-2" />
          <span><code className="claude-code">param_vector.rs</code> – 통합 전략 구조 (기존 방식과 비교 가능)</span>
        </li>
        <li className="flex items-start">
          <input type="checkbox" className="mt-1 mr-2" />
          <span><code className="claude-code">top_k_selector.rs</code> – 가장 좋은 entry/exit/sizing 조합 선택기</span>
        </li>
        <li className="flex items-start">
          <input type="checkbox" className="mt-1 mr-2" />
          <span><code className="claude-code">result_writer.rs</code> – summary + trades + chart 저장기</span>
        </li>
        <li className="flex items-start">
          <input type="checkbox" className="mt-1 mr-2" />
          <span><code className="claude-code">manual_review_kit.md</code> – 수작업 평가용 체크리스트</span>
        </li>
      </ul>
      
      <h2 id="section-6" className="text-2xl font-bold mt-10 mb-4">✍️ 요약</h2>
      
      <div className="border-l-4 border-claude-light-primary dark:border-claude-dark-primary pl-4 my-6 py-2 bg-claude-light-accent dark:bg-claude-dark-accent">
        <p>
          본 시스템은 기존 전략 최적화 방식의 약점을 보완하여, <strong>시장 맥락에 따라 전략 구성 요소를 독립적으로 조합/평가/선정하는 고차원 최적화 구조</strong>를 목표로 한다.
        </p>
        <p className="mt-3">
          이로써 보다 해석 가능하고, 과최적화에 강하며, 전략적 확장이 가능한 시스템이 완성된다.
        </p>
      </div>
    </article>
  )
}
