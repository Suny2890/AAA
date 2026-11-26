
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
        '북한의 실제 생활 모습을 사실에 근거해 살펴봅니다. 북한은 국가에서 식량과 물품을 배급하는 체제이지만, 경제 위기 이후 장마당을 통해 스스로 생계를 해결하는 모습도 나타납니다.',
        '사실',
      ],
      [
        '보편적 가치에 근거한 관점',
        '자유와 인권, 인간의 존엄성은 모든 사람이 누려야 할 보편적 가치입니다. 북한 주민도 충분한 식량과 의료 서비스를 누리고 자유와 권리를 보장받아야 합니다.',
        '인권',
      ],
      [
        '균형 있는 관점',
        '북한의 정치 체제와 정책, 주민들의 실제 삶을 구분해서 바라보아야 합니다. 조선소년단과 같은 조직생활이나 문화생활 등 다양한 모습을 함께 살펴보며 한쪽으로 치우치지 않게 이해해야 합니다.',
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
        '분단된 남한과 북한이 하나의 민족 공동체를 이루는 것입니다. 분단으로 헤어진 이산가족의 아픔을 해결하고 남북한이 함께 살아갈 미래를 만들어 가는 과정입니다.',
        '공동체',
      ],
      [
        '평화의 정착',
        '남북한 사이의 군사적 긴장과 갈등을 줄이고 전쟁의 위험이 없는 평화로운 한반도를 만들어 갑니다.',
        '평화',
      ],
      [
        '인간 존엄성과 인권 보장',
        '남북한 주민 모두의 자유와 인권을 존중합니다. 이산가족이 다시 만나고 모든 사람이 인간다운 삶을 누릴 수 있도록 합니다.',
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
        '상호 존중과 교류 확대',
        '남북한 사이의 대화와 교류를 통해 서로에 대한 신뢰를 쌓고 군사적 긴장과 갈등을 줄여 평화로운 한반도를 만들어 갑니다.',
        '평화',
      ],
      [
        '법과 제도적 기반 마련',
        '통일 이후 발생할 수 있는 사회적 혼란을 줄이기 위해 법과 제도를 미리 준비하고, 남북한의 서로 다른 제도와 생활 방식이 조화를 이루도록 합니다.',
        '제도',
      ],
      [
        '국제적 협력 강화',
        '주변 국가와 국제사회가 한반도의 평화와 통일을 위해 협력하도록 노력합니다. 국제사회의 지지와 협력을 바탕으로 안정적인 통일을 준비합니다.',
        '협력',
      ],
    ],
    takeaway: '핵심: 평화의 정착, 법과 제도적 기반 마련, 국제적 협력을 통해 통일을 준비하기',
  },
  {
    type: 'video',
    eyebrow: 'VIDEO TIME',

    title: ['영상으로 보는 비참한 현실'],

    description: '영상을 시청한 뒤 배운 내용을 퀴즈로 확인해 봅시다.',
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
