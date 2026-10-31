import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const slides = [
  {
    type: 'cover',
    eyebrow: 'MULTICULTURAL SOCIETY',
    title: ['서로 달라도', '함께 사는 사회'],
    description: '차이를 발견하는 데서 멈추지 않고, 이해로 나아가는 우리의 이야기',
  },
  {
    type: 'meaning',
    eyebrow: '01  의미와 등장 배경',
    title: ['다문화 사회란', '무엇일까요?'],
    cards: [
      ['다문화 사회', '서로 다른 언어, 문화, 종교, 생활방식을 가진 사람들이 한 사회 안에서 함께 살아가는 모습'],
      ['등장 배경', '국제결혼, 이주 노동, 유학, 난민, 세계화로 사람들의 이동이 활발해졌기 때문'],
    ],
    note: '핵심은 “같아지는 것”이 아니라 “다름을 인정하며 함께하는 것”입니다.',
  },
  {
    type: 'groups',
    eyebrow: '02  우리 안의 경계',
    title: ['내집단과 외집단,', '편견은 어디서 시작될까?'],
    left: ['내집단', '내가 속해 있다고 느끼는 집단', '익숙함 · 소속감 · 신뢰'],
    right: ['외집단', '나와 다르다고 느끼는 집단', '낯섦 · 거리감 · 경계'],
    bottom: '낯섦은 자연스러운 감정이지만, 사실을 확인하지 않은 일반화는 편견이 됩니다.',
  },
  {
    type: 'conflict',
    eyebrow: '03  다문화 사회가 마주한 문제',
    title: ['차이는 갈등의 이유가 아니라', '대화의 출발점입니다'],
    items: [
      ['문화의 차이', '인사법, 식사 예절, 시간 개념이 달라 오해가 생길 수 있습니다.'],
      ['종교와 생활', '복장, 음식, 휴일에 대한 서로 다른 기준이 충돌할 수 있습니다.'],
      ['고정관념과 차별', '한 사람의 모습을 집단 전체의 특징으로 단정할 때 차별이 시작됩니다.'],
    ],
  },
  {
    type: 'video',
    eyebrow: '04  영상으로 생각 넓히기',
    title: ['영상으로 만나는', '다문화 사회'],
    videoUrl: 'https://www.youtube.com/embed/uNTm_EX3EQo',
    description: '영상을 보며 서로 다른 문화가 함께 살아가는 사회에 대해 생각해 봅시다.',
  },
  {
    type: 'quiz',
    eyebrow: '05  함께 풀어보는 문제 · 01',
    title: ['문화 상대주의란', '무엇일까요?'],
    question: '문화가 생겨난 환경이나 역사적·사회적 상황을 고려해 문화를 이해하는 태도를 무엇이라고 할까요?',
    answer: '문화 상대주의',
    explanation: '다른 문화를 그 사회의 환경과 맥락 속에서 이해하려는 태도입니다.',
  },
  {
    type: 'quiz',
    eyebrow: '05  함께 풀어보는 문제 · 02',
    title: ['갈등의 원인을', '찾아봅시다'],
    question: '이주민들이 우리 사회에서 함께 살아가고 있지만 언어 교육과 생활 적응을 위한 도움을 충분히 받지 못하고 있습니다. 이 상황의 원인은 무엇일까요?',
    answer: '이주민 지원 부족',
    explanation: '언어 교육과 생활 적응을 돕는 사회적 지원이 충분하지 않은 상황입니다.',
  },
  {
    type: 'quiz',
    eyebrow: '05  함께 풀어보는 문제 · 03',
    title: ['맞으면 O,', '틀리면 X'],
    question: '다양한 종교가 추구하는 가치를 인정하지 않고 자신의 믿음만을 강요하는 것은 문화의 차이로 일어나는 갈등이다.',
    answer: 'O',
    explanation: '서로 다른 종교와 가치관을 존중하지 않을 때 문화적 갈등이 생길 수 있습니다.',
  },
  {
    type: 'quiz',
    eyebrow: '05  함께 풀어보는 문제 · 04',
    title: ['이주민과 난민을', '둘러싼 문제'],
    question: '난민법이 제정된 이후 우리 사회에 유입되는 난민이 늘고 있지만, 이들의 정착을 돕는 제도가 부족한 문제와 관련된 정답은 무엇일까요?',
    answer: '이주민 지원 부족',
    explanation: '이주민과 난민이 안정적으로 정착할 수 있도록 제도와 지원을 마련해야 합니다.',
  },
  {
    type: 'quiz',
    eyebrow: '05  함께 풀어보는 문제 · 05',
    title: ['문화 차이로', '일어나는 갈등'],
    question: '언어, 가치관, 생활 방식 등 서로 다른 문화를 이해하지 못해 생기는 갈등을 무엇이라고 할까요?',
    answer: '문화 차이로 인한 갈등',
    explanation: '서로의 문화적 배경을 이해하고 존중하려는 노력이 필요합니다.',
  },
  {
    type: 'action',
    eyebrow: '06  편견을 줄이는 작은 선택',
    title: ['생각을 바꾸는', '세 가지 질문'],
    steps: [
      ['01', '내가 아는 것은 사실일까?', '소문 대신 직접 확인하기'],
      ['02', '모두가 정말 그럴까?', '한 사람과 집단을 구분하기'],
      ['03', '내 입장이 바뀐다면?', '상대의 입장에서 한 번 더 생각하기'],
    ],
    quote: '다름은 틀림이 아니라, 더 넓은 세상을 보는 또 하나의 창입니다.',
  },
]

function App() {
  const [page, setPage] = useState(0)
  const slide = slides[page]

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') setPage((current) => Math.min(current + 1, slides.length - 1))
      if (event.key === 'ArrowLeft') setPage((current) => Math.max(current - 1, 0))
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
        <h1>{slide.title.map((line) => <span key={line}>{line}</span>)}</h1>

        {slide.type === 'cover' && <Cover slide={slide} />}
        {slide.type === 'meaning' && <Meaning slide={slide} />}
        {slide.type === 'groups' && <Groups slide={slide} />}
        {slide.type === 'conflict' && <Conflict slide={slide} />}
        {slide.type === 'action' && <Action slide={slide} />}
        {slide.type === 'video' && <Video slide={slide} />}
        {slide.type === 'quiz' && <Quiz slide={slide} />}
      </section>
      <nav className="controls" aria-label="슬라이드 이동">
        <button onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0}>이전</button>
        <div className="progress">{slides.map((_, index) => <button key={index} className={index === page ? 'dot active' : 'dot'} onClick={() => setPage(index)} aria-label={`${index + 1}번 슬라이드`} />)}</div>
        <button onClick={() => setPage(Math.min(slides.length - 1, page + 1))} disabled={page === slides.length - 1}>다음</button>
      </nav>
      <span className="page-count">0{page + 1} / 0{slides.length}</span>
    </main>
  )
}

function Video({ slide }) {
  return <div className="video-content"><p>{slide.description}</p><div className="video-frame"><iframe src={slide.videoUrl} title="다문화 사회 관련 영상" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><a className="video-link" href="https://youtu.be/uNTm_EX3EQo?si=WKiqSZwQly4Bnccm" target="_blank" rel="noreferrer">유튜브에서 영상 보기 ↗</a></div>
}

function Quiz({ slide }) {
  const [show, setShow] = useState(false)
  useEffect(() => setShow(false), [slide.question])
  return <div className="quiz-content"><article className="quiz-card"><span className="quiz-label">QUESTION</span><p>{slide.question}</p><button className="answer-button" onClick={() => setShow((value) => !value)}>{show ? '정답 숨기기' : '정답 확인하기'}</button>{show && <div className="answer-panel"><span>ANSWER</span><strong>{slide.answer}</strong><p>{slide.explanation}</p></div>}</article><p className="quiz-hint">먼저 스스로 생각해 본 뒤 정답을 확인해 보세요.</p></div>
}

function Cover({ slide }) {
  return <div className="cover-content"><p>{slide.description}</p><div className="color-orbit"><i /><i /><i /><i /></div><span className="hint">화살표 키 또는 아래 버튼으로 넘겨 보세요</span></div>
}

function Meaning({ slide }) {
  return <div className="meaning-content"><div className="card-grid">{slide.cards.map(([title, body]) => <article className="info-card" key={title}><b>{title}</b><p>{body}</p></article>)}</div><p className="wide-note">{slide.note}</p></div>
}

function Groups({ slide }) {
  return <div className="group-content"><div className="group-pair"><article className="group-card left-card"><b>{slide.left[0]}</b><h2>{slide.left[1]}</h2><p>{slide.left[2]}</p></article><div className="bridge"><span>익숙함과 낯섦 사이</span></div><article className="group-card right-card"><b>{slide.right[0]}</b><h2>{slide.right[1]}</h2><p>{slide.right[2]}</p></article></div><p className="wide-note">{slide.bottom}</p></div>
}

function Conflict({ slide }) {
  return <div className="conflict-content">{slide.items.map(([title, body], index) => <article className="issue" key={title}><span>0{index + 1}</span><div><b>{title}</b><p>{body}</p></div></article>)}</div>
}

function Action({ slide }) {
  return <div className="action-content"><div className="step-list">{slide.steps.map(([number, title, body]) => <article key={number}><span>{number}</span><div><b>{title}</b><p>{body}</p></div></article>)}</div><blockquote>{slide.quote}</blockquote></div>
}

createRoot(document.getElementById('root')).render(<App />)
