
> 작성자: 세상에서 가장 훌륭한 주인님  
> 마지막 업데이트: 2025-05-20  
> 목적: 다중 전략을 시장 맥락에 따라 분기하고 진입 비중까지 조정하는 전략 조합을 자동 실험하여, 사람이 직접 상위 전략 100개를 검토할 수 있도록 설계된 고성능 백테스터 개발

---

## 🎯 핵심 목표

**시장 맥락(Context)** + **진입(Entry)** + **청산(Exit)** + **진입 비중(Sizing)** 을 분리하고,  
Context 기준으로 각각을 **독립적으로 최적화**하여  
가장 효율적인 전략 조합을 도출하는 구조를 개발한다.

---

## 🧱 시스템 구성요소 정의

| 구성요소 | 설명 |
|----------|------|
| 📘 ContextConfig | 시장을 다차원 지표 기준으로 분류하는 규칙 집합 |
| 📈 StrategyEntry | 진입 조건과 지표 파라미터 정의 |
| 🧯 StrategyExit | 청산 조건과 손절/익절/보유 시간 조건 정의 |
| 💰 SizingRule | 각 맥락별 진입 비중 결정 |
| 🔧 ContextExperimentSet | 하나의 시장 맥락 기준으로 Entry/Exit/Sizing 후보군을 독립적으로 실험하는 구조 |

---

## 🧩 ContextExperimentSet 구조 예시

```rust
struct ContextExperimentSet {
    context: ContextConfig,
    entry_candidates: Vec<StrategyEntry>,
    exit_candidates: Vec<StrategyExit>,
    sizing_candidates: Vec<SizingRule>,
}
```

- 하나의 맥락(Context)에 대해 다양한 Entry/Exit/Sizing 조합을 독립적으로 실험
- 조합된 결과 중 성능이 가장 우수한 세트를 선별

---

## 📊 전략 실험 흐름

```text
1. 여러 Context 기준 생성
2. 각 Context에 대해:
    └─ Entry 후보 10개 × Exit 후보 10개 × Sizing 후보 5개 조합 생성
    └─ 총 500개 조합을 실행
3. 각각 백테스트 실행 및 성능 평가
4. Entry / Exit / Sizing 독립적으로 비교 가능
5. Context별 최적 전략 구성 저장
```

---

## ✅ 기능 정의 (업데이트 반영)

- [ ] `context_experiment_set.rs` – ContextExperimentSet 구조 정의
- [ ] `strategy_entry.rs`, `strategy_exit.rs` – 진입/청산 로직 정의 구조체
- [ ] `context_experiment_runner.rs` – 맥락별 조합 실험 실행기
- [ ] `param_vector.rs` – 통합 전략 구조 (기존 방식과 비교 가능)
- [ ] `top_k_selector.rs` – 가장 좋은 entry/exit/sizing 조합 선택기
- [ ] `result_writer.rs` – summary + trades + chart 저장기
- [ ] `manual_review_kit.md` – 수작업 평가용 체크리스트

---

## ✍️ 요약

> 본 시스템은 기존 전략 최적화 방식의 약점을 보완하여,  
> **시장 맥락에 따라 전략 구성 요소를 독립적으로 조합/평가/선정하는 고차원 최적화 구조**를 목표로 한다.

이로써 보다 해석 가능하고, 과최적화에 강하며, 전략적 확장이 가능한 시스템이 완성된다.
