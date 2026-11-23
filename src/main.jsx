
import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const slides = [
  {
    type: 'cover',
    eyebrow: '통일의 의미와 가치',
    title: ['서로 다른 오늘을 넘어', '함께 만드는 내일'],
    description:
      '북한을 이해하고, 통일의 의미와 우리가 나아갈 방향을 생각해 봅시다.',
  },
  {
    type: 'goals',
    eyebrow: 'TODAY’S LEARNING GOALS',
    title: ['오늘의 학습 목표'],
    goals: [
      ['01', '북한에 대한 시선을 알 수 있다.', '북한을 바라보는 다양한 관점을 살펴봅니다.'],
      ['02', '통일에 대해 자세히 알 수 있다.', '통일의 의미와 필요한 이유, 가치를 알아봅니다.'],
      ['03', '바람직한 통일의 방향을 알 수 있다.', '서로 존중하고 평화롭게 함께하는 방법을 생각합니다.'],
    ],
    note: '세 가지 목표를 생각하며 함께 배워 봅시다.',
  },
  {
    type: 'content',
    eyebrow: '01 · NORTH KOREA',
    title: ['북한을 바라보는', '다양한 시선'],
    lead: '북한을 한 가지 모습만으로 판단하기보다 여러 관점에서 살펴보는 것이 중요합니다.',
    cards: [
      ['안보의 관점', '북한의 군사적 행동과 긴장 상황을 살피고, 우리 사회의 안전과 평화를 지키는 문제를 생각합니다.', '안전'],
      ['사람과 인권의 관점', '북한의 정치 체제와 북한 주민을 구분하고, 주민들의 생활과 인권에도 관심을 가집니다.', '인권'],
      ['평화와 교류의 관점', '대화와 교류가 갈등을 줄이고 서로를 이해하는 데 어떤 도움을 줄 수 있는지 생각합니다.', '평화'],
    ],
    takeaway: '핵심: 사실에 근거해 살펴보고, 북한의 체제·정책과 주민을 구분해 균형 있게 이해하기',
  },
  {
    type: 'content',
    eyebrow: '02 · MEANING & VALUE',
    title: ['통일의 의미와', '가치'],
    lead: '통일은 분단된 남북한이 하나의 공동체를 이루어 평화롭게 살아가기 위한 과정입니다.',
    cards: [
      ['분단의 아픔 줄이기', '헤어진 이산가족의 아픔을 줄이고, 오랜 분단으로 생긴 적대감과 갈등을 극복할 기회를 마련합니다.', '회복'],
      ['평화와 안전', '한반도의 군사적 긴장을 낮추고, 전쟁의 위험을 줄여 더 안전한 삶의 터전을 만드는 데 기여할 수 있습니다.', '평화'],
      ['함께 만드는 기회', '사람과 문화의 교류가 넓어지고, 서로의 경험과 자원을 활용해 새로운 가능성을 만들어 갈 수 있습니다.', '협력'],
    ],
    takeaway: '기억하기: 통일은 단순히 국토를 합치는 일이 아니라 사람과 마음, 생활을 이어 가는 과정입니다.',
  },
  {
    type: 'content',
    eyebrow: '03 · PEACEFUL FUTURE',
    title: ['바람직한 통일의', '방향'],
    lead: '통일은 서두르거나 강요하기보다 평화와 신뢰를 바탕으로 차근차근 준비해야 합니다.',
    cards: [
      ['대화와 교류 확대', '꾸준한 대화와 문화·체육·경제 분야의 교류로 서로를 이해하고 신뢰를 쌓아 갑니다.', '대화'],
      ['차이와 인권 존중', '서로 다른 제도와 생활 방식이 있음을 인정하고, 모든 사람의 존엄과 기본적 권리를 존중합니다.', '존중'],
      ['국민의 공감과 준비', '통일의 과정과 비용, 사회적 변화를 충분히 논의하고 국민의 공감대와 합의를 넓혀 갑니다.', '합의'],
    ],
    takeaway: '핵심: 평화적으로, 서로 존중하며, 국민의 공감과 합의를 바탕으로 준비하기',
  },

  // NEW: 영상 슬라이드
  {
    type: 'video',
    eyebrow: 'VIDEO TIME',
    title: ['영상으로 알아봅시다'],
    description: '영상을 시청한 뒤 배운 내용을 퀴즈로 확인해 봅시다.',
  },

  {
    type: 'quiz',
    eyebrow: 'CHECK YOUR THINKING · 01',
    title: ['북한을 바라보는', '나의 시선'],
    question: '북한 주민과 북한의 정치·군사적 상황은 구분해서 바라볼 필요가 있다.',
    answer: 'O',
    explanation: '북한의 정책이나 체제에 대한 판단과 북한 주민 한 사람 한 사람에 대한 이해는 구분할 수 있어야 합니다. 다양한 정보를 바탕으로 균형 있게 바라보는 태도가 중요합니다.',
  },
  {
    type: 'quiz',
    eyebrow: 'CHECK YOUR THINKING · 02',
    title: ['통일의 의미와', '가치 알아보기'],
    question: '통일은 단순히 남한과 북한의 제도와 영토를 하나로 합치는 것만을 의미한다.',
    answer: 'X',
    explanation: '통일은 분단으로 생긴 갈등과 아픔을 줄이고, 서로의 차이를 이해하며 평화롭게 함께 살아갈 공동체를 만들어 가는 과정이기도 합니다.',
  },
  {
    type: 'quiz',
    eyebrow: 'CHECK YOUR THINKING · 03',
    title: ['바람직한 통일의', '방향은 무엇일까?'],
    question: '바람직한 통일을 위해서는 서로의 차이를 존중하고, 대화와 교류를 통해 평화적으로 준비해야 한다.',
    answer: 'O',
    explanation: '통일은 어느 한쪽의 생각을 강요하는 방식이 아니라, 서로를 존중하고 합의와 평화를 바탕으로 차근차근 준비하는 방향이어야 합니다.',
  },
  {
    type: 'summary',
    eyebrow: 'TODAY’S SUMMARY',
    title: ['오늘 배운 내용', '정리하기'],
  },
]

function App() {
  const [page, setPage] = useState(0)
  const slide = slides[page]

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault()
        setPage((current) => Math.min(current + 1, slides.length - 1))
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setPage((current) => Math.max(current - 1, 0))
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <main className={`deck ${slide.type}`}>
      <div className="background-shape shape-one" />
      <div className="background-shape shape-two" />

      <section className="slide" key={page}>
        <p className="eyebrow">{slide.eyebrow}</p>

        <h1>
          {slide.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>

        {slide.type === 'cover' && <Cover slide={slide} />}
        {slide.type === 'goals' && <Goals slide={slide} />}
        {slide.type === 'content' && <Content slide={slide} />}
        {slide.type === 'video' && <Video slide={slide} />}
        {slide.type === 'quiz' && <Quiz slide={slide} />}
        {slide.type === 'summary' && <Summary />}
      </section>

      <nav className="controls" aria-label="슬라이드 이동">
        <button
          onClick={() => setPage(Math.max(0, page - 1))}
          disabled={page === 0}
        >
          이전
        </button>

        <div className="progress">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === page ? 'dot active' : 'dot'}
              onClick={() => setPage(index)}
              aria-label={`${index + 1}번 슬라이드`}
            />
          ))}
        </div>

        <button
          onClick={() => setPage(Math.min(page + 1, slides.length - 1))}
          disabled={page === slides.length - 1}
        >
          다음
        </button>
      </nav>

      <span className="page-count">
        {String(page + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </span>
    </main>
  )
}

function Cover({ slide }) {
  return (
    <div className="cover-content">
      <p>{slide.description}</p>

      <span className="hint">
        화살표 키 또는 아래 버튼으로 넘겨 보세요
      </span>

      <div className="unification-art">
        <img
          src={import.meta.env.BASE_URL + 'unification-illustration.png'}
          alt="서로 어깨동무하는 세 친구와 평화의 비둘기"
        />
      </div>
    </div>
  )
}

function Goals({ slide }) {
  return (
    <div className="goals-content">
      <div className="goal-list">
        {slide.goals.map(([number, title, body]) => (
          <article className="goal-card" key={number}>
            <span>{number}</span>
            <div>
              <b>{title}</b>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="wide-note">{slide.note}</p>
    </div>
  )
}

function Content({ slide }) {
  return (
    <div className="content-area">
      <p className="content-lead">{slide.lead}</p>

      <div className="content-cards">
        {slide.cards.map(([heading, body, tag], index) => (
          <article className="content-card" key={heading}>
            <div className={`content-number tone-${index}`}>
              0{index + 1}
            </div>

            <div className="content-copy">
              <div className="content-card-top">
                <b>{heading}</b>
                <span>{tag}</span>
              </div>

              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="content-takeaway">{slide.takeaway}</p>
    </div>
  )
}

// NEW: 유튜브 영상 슬라이드
function Video({ slide }) {
  return (
    <div className="quiz-content">
      <p className="content-lead">{slide.description}</p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: '20px',
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/jP9bIExONO4"
          title="통일 관련 유튜브 쇼츠"
          style={{
            width: '100%',
            maxWidth: '360px',
            aspectRatio: '9 / 16',
            border: 'none',
            borderRadius: '18px',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <p className="quiz-hint">
        영상 시청을 마쳤다면 다음 버튼을 눌러 퀴즈를 풀어 보세요.
      </p>
    </div>
  )
}

function Quiz({ slide }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)
  }, [slide.question])

  return (
    <div className="quiz-content">
      <article className="quiz-card">
        <span className="quiz-label">QUESTION</span>

        <p>{slide.question}</p>

        <button
          className="answer-button"
          onClick={() => setShow((value) => !value)}
        >
          {show ? '정답 숨기기' : '정답 확인하기'}
        </button>

        {show && (
          <div className="answer-panel">
            <span>ANSWER</span>
            <strong>{slide.answer}</strong>
            <p>{slide.explanation}</p>
          </div>
        )}
      </article>

      <p className="quiz-hint">
        먼저 스스로 생각해 본 뒤 정답을 확인해 보세요.
      </p>
    </div>
  )
}

// 마지막 핵심 정리 슬라이드
function Summary() {
  return (
    <div className="summary-content">
      <div className="summary-highlight">
        <span>ONE KEY MESSAGE</span>

        <p>
          통일은 서로의 차이를 존중하고,
          대화와 평화를 통해 함께 더 나은 미래를
          만들어 가는 과정입니다.
        </p>
      </div>

      <div className="summary-list">
        <article className="summary-item">
          <span>01</span>
          <p>
            북한은 다양한 관점에서 균형 있게
            바라보아야 합니다.
          </p>
        </article>

        <article className="summary-item">
          <span>02</span>
          <p>
            통일은 분단의 아픔을 줄이고 평화로운
            공동체를 만들어 가는 과정입니다.
          </p>
        </article>

        <article className="summary-item">
          <span>03</span>
          <p>
            바람직한 통일은 대화와 교류,
            상호 존중과 국민의 공감을 바탕으로
            준비해야 합니다.
          </p>
        </article>
      </div>

      <p className="summary-footer">
        서로 이해하고 존중하는 마음이
        평화로운 미래의 시작입니다.
      </p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
)
