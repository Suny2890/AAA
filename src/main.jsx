
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
    lead: '북한을 정확하게 이해하기 위해서는 사실과 보편적 가치를 바탕으로 균형 있게 바라보아야 합니다.',
    cards: [
      [
        '객관적 사실에 근거한 관점',
        '북한 정권이 내세우는 모습이 북한 주민이 실제 겪는 상황과 일치하지 않을 수 있고 북한은 언론의 자유가 보장되고 있다고 말하지만 실제 언론은 당의 정책을 선정하고 옹호하는 역할을 함.',
        '사실',
      ],
      [
        '보편적 가치에 근거한 관점',
        '자유, 평화, 인권 등과 같은 보편적 가치에 근거해 북한 주민의 삶을 이해해야한다. 실제로 국제 사회에서 북한 주민의 인권 수준은 열악한 것으로 평가 받고 있다.',
        '자유, 인권, 평화',
      ],
      [
        '균형 있는 관점',
        '북한을 경계의 대상으로만 바라보면 남북간의 대립을 해소하기 어렵다. 그렇다고 북한을 협력의 대상으로만 바라보면 북한의 위협에 적절하게 대처할 수 없기 때문에 북한의 이중적 성격을 균형있게 인식해야 한다.',
        '균형',
      ],
    ],
    takeaway: '핵심: 객관적인 사실과 보편적 가치를 바탕으로 북한을 균형 있게 이해하기',
  },
  {
    type: 'content',
    eyebrow: '02 · MEANING & VALUE',
    title: ['통일의 의미와', '가치'],
    lead: '통일은 분단된 남북한이 하나의 공동체를 이루고, 서로 존중하며 평화롭게 살아가기 위한 과정입니다.',
    cards: [
      [
        '통일의 의미',
        '남북한 주민이 함께 살아갈 삶을 만드는 과정.',
        '공동체',
      ],
      [
        '평화의 장착',
        '분단의 상황에서 가장 시급하고 중요하게 다루어야 할 보편적 가치이고 한반도의 실질적인 평화의 정착은 세계 평화에 기여함.',
        '평화',
      ],
      [
        '인간 존엄성과 인권 보장',
        '분단의 상황은 남북한 주민 모두의 인권을 위협하지만 통일은 한반도에 사는 모든 사람의 존엄성과 권리를 지키려는 노력의 과정이다.',
        '존엄',
      ],
      [
        '공동체의 행복',
        '통일이 되면 경제 협력, 문화협력, 유라시아 횡단 철도 등을 통해 남북한 주민의 삶의 질이 향상된다.',
        '행복',
      ],
    ],
    takeaway: '기억하기: 통일은 평화와 인권을 바탕으로 모두가 행복한 공동체를 만들어 가는 과정입니다.',
  },
  {
    type: 'content',
    eyebrow: '03 · PEACEFUL FUTURE',
    title: ['바람직한 통일의', '방향'],
    lead: '바람직한 통일을 위해서는 평화를 지키고, 제도적 기반을 마련하며, 국제사회와 협력해야 합니다.',
    cards: [
      [
        '평화의 정착',
        '지속적인 교류와 협력을 통해 신뢰를 쌓아 교류의 폭을 넓히고, 남북한의 경제적 격차를 줄여 나가야 하고 남북 모두가 함께 발전할 수 있어야 한다.',
        '교류, 협력',
      ],
      [
        '법과 제도적 기반 마련',
        '도덕적 가치를 바탕으로 법과 제도를 갖추어야 하고 공동의 합의한 법과 제도가 있으면 갈등에 대처할 수 있다.',
        '제도',
      ],
      [
        '국제적 협력 강화',
        '국제적 협력을 강화해 우호적 분위기를 형성해야 하고 한반도의 통일이 평화에 이바지하고 각 나라의 이익에 도움이 된다는 점을 주변 국가에 알려야 한다.',
        '협력',
      ],
    ],
    takeaway: '핵심: 평화의 정착, 법과 제도적 기반 마련, 국제적 협력을 통해 통일을 준비하기',
  },
  {
    type: 'video',
    eyebrow: 'VIDEO TIME',

    title: ['영상'],

    description: '남북한 사이에 국제적 협력이 이뤄지지 않았을때 생기는 현상을 영상으로 봅시다.',
  },
  {
    type: 'quiz',
    eyebrow: 'CHECK YOUR THINKING · 01',
    title: ['북한을 바라보는', '나의 시선'],
    question: '북한을 바라볼 때 객관적 사실과 보편적 가치를 바탕으로 균형 있게 이해해야 한다.',
    answer: 'O',
    explanation: '북한의 정치 체제와 주민들의 실제 삶을 구분하고, 객관적인 사실과 인권 등 보편적 가치를 바탕으로 균형 있게 바라보는 태도가 중요합니다.',
  },
  {
    type: 'quiz',
    eyebrow: 'CHECK YOUR THINKING · 02',
    title: ['통일의 의미와', '가치 알아보기'],
    question: '통일은 남북한의 영토와 제도만 합치면 완성되므로, 주민들의 인권과 행복은 고려하지 않아도 된다.',
    answer: 'X',
    explanation: '통일은 영토와 제도만 합치는 것이 아닙니다. 평화의 정착과 주민들의 인간 존엄성 및 인권 보장, 공동체의 행복까지 함께 이루어 가는 과정입니다.',
  },
  {
    type: 'quiz',
    eyebrow: 'CHECK YOUR THINKING · 03',
    title: ['바람직한 통일의', '방향은 무엇일까?'],
    question: '바람직한 통일을 위해서는 평화의 정착, 법과 제도적 기반 마련, 국제적 협력이 필요하다.',
    answer: 'O',
    explanation: '평화로운 통일을 위해서는 남북한 사이의 신뢰를 쌓고, 통일에 필요한 법과 제도를 준비하며, 국제사회와 협력하는 노력이 필요합니다.',
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

      <div className={`content-cards ${slide.cards.length === 4 ? 'four-cards' : ''}`}>
        {slide.cards.map(([heading, body, tag], index) => (
          <article className="content-card" key={heading}>
            <div className={`content-number tone-${index}`}>
              {String(index + 1).padStart(2, '0')}
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

function Video({ slide }) {
  return (
    <div className="quiz-content">
      <p className="content-lead">{slide.description}</p>

      <div className="video-frame">
        <iframe
          src="https://www.youtube.com/embed/jP9bIExONO4"
          title="통일 관련 유튜브 쇼츠"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <p className="quiz-hint">
        영상 시청이 끝나면 다음 페이지 @(&$*@(%
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

function Summary() {
  return (
    <div className="summary-content">
      <div className="summary-highlight">
        <span>ONE KEY MESSAGE</span>

        <p>
          통일은 서로의 차이를 존중하고,
          평화와 협력을 바탕으로
          모두가 행복한 공동체를 만들어 가는 과정입니다.
        </p>
      </div>

      <div className="summary-list">
        <article className="summary-item">
          <span>01</span>
          <p>
            북한은 객관적 사실과 보편적 가치를
            바탕으로 균형 있게 바라보아야 합니다.
          </p>
        </article>

        <article className="summary-item">
          <span>02</span>
          <p>
            통일은 평화의 정착과 인간 존엄성 및
            인권 보장, 공동체의 행복을 위한 과정입니다.
          </p>
        </article>

        <article className="summary-item">
          <span>03</span>
          <p>
            바람직한 통일을 위해 평화의 정착,
            법과 제도적 기반 마련, 국제적 협력이 필요합니다.
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
