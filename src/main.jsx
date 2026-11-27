
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
        '평화의 정착',
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
        '상호 존중과 교류 확대',
        '지속적인 교류와 협력을 통해 신뢰를 쌓아 교류의 폭을 넓히고, 남북한의 경제적 격차를 줄여 나가며 남북 모두가 함께 발전할 수 있어야 한다.',
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
    takeaway: '핵심: 상호 존중과 교류 확대, 법과 제도적 기반 마련, 국제적 협력을 통해 통일을 준비하기',
  },
  {
    type: 'content',
    eyebrow: '04 · DAILY LIFE IN NORTH KOREA',
    title: ['북한 주민의', '삶'],
    lead: '북한 주민의 생활은 국가의 배급 제도와 경제 상황, 시장 활동 등 여러 요인의 영향을 받습니다.',
    cards: [
      [
        '배급 제도와 장마당',
        '사회주의 체제에서는 원칙적으로 국가가 식량과 물품을 배급합니다. 1990년대 중반 이후 경제 위기를 겪으면서 장마당과 같은 시장에서 의식주를 스스로 해결하는 모습도 나타났습니다. 2009년 탈북한 사리원방직공장 노동자는 일터에서 돈이나 식량 배급을 거의 받지 못해 항상 배가 고팠다고 증언했습니다.',
        '생활과 경제',
      ],
      [
        '식량과 의료 환경',
        '제공된 자료에 따르면 WFP는 2017년 1월 북한의 1인당 하루 배급량을 400g으로 발표했습니다. 이는 자료에 제시된 하루 권장량 600g보다 적은 양입니다. 2013년 탈북한 탁아소 보육교사는 식량 부족으로 풀뿌리 등을 먹었다고 증언했고, 2005년 탈북한 내과 의사는 약과 의료 도구가 부족했다고 증언했습니다.',
        '2017년 자료·탈북민 증언',
      ],
      [
        '문화·노동·정보 환경',
        '공연이나 영화를 관람할 수 있지만, 제공된 자료는 예술이 수령과 당에 대한 감사와 충성을 강조하는 체제 유지 수단으로 활용된다고 설명합니다. 자료에는 남성의 군 복무가 최소 10년이며 하루 12~16시간 노동한다고 제시되어 있습니다. 인터넷의 자유도 심각하게 제한되어 있다고 소개되어 있습니다.',
        '출처: PSCORE 등 제공 자료',
      ],
    ],
    takeaway: '자료 속 증언과 통계는 각각의 시점과 개인의 경험을 보여 줍니다. 모든 주민의 현재 생활로 일반화하지 않도록 주의합시다.',
  },
  {
    type: 'content',
    eyebrow: '05 · SOCIAL LIFE',
    title: ['북한의', '사회생활'],
    lead: '북한의 사회생활은 집단주의와 조직생활을 중심으로 설명되며, 경제 구조의 변화와 함께 다양한 모습도 나타납니다.',
    cards: [
      [
        '사회주의 대가정',
        '북한 사회는 수령과 당, 대중으로 구성된 사회주의 대가정이라는 관점을 내세우며, 집단주의에 따라 수령과 당에 복종하는 생활을 강조합니다.',
        '집단주의',
      ],
      [
        '조직생활 참여',
        '어린 시절부터 조선소년단과 같은 조직에 가입해 조직생활에 참여합니다. 조선소년단은 어린이들이 단체 활동과 조직 규율을 익히는 조직으로 소개됩니다.',
        '조직생활',
      ],
      [
        '변화와 공존',
        '경제 구조가 변화하면서 개인이 시장 활동 등을 통해 생활을 꾸리는 모습이 나타났고, 이에 따라 개인주의와 집단주의가 공존하는 모습도 나타납니다.',
        '사회 변화',
      ],
    ],
    takeaway: '북한 사회를 이해할 때 제도가 강조하는 모습과 주민들의 실제 생활 변화를 함께 살펴보아야 합니다.',
  },
  {
    type: 'content',
    eyebrow: '06 · KOREAN CHILDREN’S UNION',
    title: ['조선소년단이란?'],
    lead: '조선소년단은 북한의 어린이 단체로, 제공된 한국민족문화대백과사전 자료를 바탕으로 정리했습니다.',
    cards: [
      [
        '대상과 입단',
        '만 7세부터 13세까지의 소년·소녀를 대상으로 합니다. 입단식은 대체로 김일성·김정일 부자의 생일이나 소년단 창립 기념일에 행해진다고 소개되어 있습니다.',
        '만 7~13세',
      ],
      [
        '조직의 목표',
        '제공된 자료는 소년단의 목표를 수령과 당의 명령·지시에 복종하는 혁명투사를 양성하고 공산주의 사상을 교육하는 것으로 설명합니다.',
        '교육 목표',
      ],
      [
        '활동과 조직생활',
        '집단행동과 조직생활을 강화하고, 소년단원 중 우수한 학생을 선발해 혁명성과 집단주의적 조직생활을 강조한다고 설명합니다.',
        '집단 활동',
      ],
    ],
    takeaway: '출처: 한국민족문화대백과사전',
  },
  {
    type: 'content',
    eyebrow: '07 · SEPARATED FAMILIES',
    title: ['남과 북으로 이별한', '이산가족'],
    lead: '이산가족 문제는 분단으로 헤어진 가족이 다시 만날 기회를 마련하는 인도적 과제입니다.',
    cards: [
      [
        '헤어진 가족의 아픔',
        '남과 북으로 헤어진 혈육을 다시 만나는 일은 사람으로서 누려야 할 기본적인 가치입니다. 제공된 자료는 이산가족 생존자 가운데 70세 이상 고령자의 비율이 78%를 넘는다고 설명합니다.',
        '가족과 인권',
      ],
      [
        '1985년 첫 고향방문단 교환',
        '정부는 남북 간 만남을 제의하고 적십자회담 등 여러 협의를 이어 왔습니다. 그 결과 1985년 9월 남북 이산가족 고향방문단 교환이 처음으로 이루어졌고, 남북 65가족이 만났습니다.',
        '1985년 9월',
      ],
      [
        '상봉의 의미',
        '제공된 정책브리핑 자료에는 남북 총 4,321가족, 21,734명이 헤어진 가족과 상봉한 것으로 제시되어 있습니다. 이산가족 문제 해결을 위해서는 시간이 많지 않다는 점도 강조합니다.',
        '출처: 대한민국 정책브리핑',
      ],
    ],
    takeaway: '이산가족이 가족을 다시 만날 수 있도록 지속적인 관심과 노력이 필요합니다.',
  },
  {
    type: 'content',
    eyebrow: '08 · PROS & CONS',
    title: ['통일 찬성과', '반대 근거'],
    lead: '통일에는 기대되는 점과 해결해야 할 과제가 함께 있습니다. 양쪽의 근거를 균형 있게 살펴봅시다.',
    cards: [
      [
        '통일 찬성 근거',
        '국가 규모가 커지고 인구 감소 문제에 대응하는 데 도움이 될 수 있습니다. 북한의 지하자원을 활용할 가능성이 있으며, 국방 비용 부담이 줄고 국가 안정성이 높아질 것이라는 기대도 있습니다.',
        '찬성',
      ],
      [
        '통일 반대 근거',
        '남북한의 경제 수준 격차가 크고 문화 차이로 갈등이 생길 수 있습니다. 통일에 막대한 비용이 들며, 사회 변화에 적응하기 어려울 수 있다는 우려도 있습니다.',
        '반대',
      ],
      [
        '청년과 사회의 부담',
        '통일 비용과 경제적 부담이 청년들의 삶의 질에 영향을 줄 수 있다는 우려가 있습니다. 북한 주민의 정착과 적응을 돕는 과정도 중요한 과제입니다.',
        '고려할 과제',
      ],
      [
        '국민의 의견',
        '제공된 자료에는 통일을 원하는 시민이 약 60~70% 정도라는 내용이 제시되어 있습니다. 통일에 대한 국민의 생각과 조사 시점을 함께 살펴보는 것이 중요합니다.',
        '출처: 미라클해봄샘 자료',
      ],
    ],
    takeaway: '찬성과 반대의 근거를 모두 살펴보고, 통일의 이익과 부담을 함께 생각해야 합니다.',
  },
  {
    type: 'content',
    eyebrow: '09 · WORDS & CULTURE',
    title: ['남북한의', '말 차이'],
    lead: '같은 뜻을 가진 말도 남과 북에서 다르게 표현되기도 합니다.',
    cards: [
      [
        '음식 이름',
        '베이컨은 짠세겹살, 찌개는 지지개, 양파는 둥굴파라고 표현하는 예가 있습니다.',
        '짠세겹살 · 지지개 · 둥굴파',
      ],
      [
        '음식과 생활 표현',
        '도시락은 곽밥, 국밥은 온밥이라고 부르는 예가 있습니다.',
        '곽밥 · 온밥',
      ],
      [
        '말의 차이를 이해하기',
        '서로 다른 표현을 알아 두면 남북한 주민이 대화할 때 생길 수 있는 오해를 줄이고 서로의 생활문화를 이해하는 데 도움이 됩니다.',
        '서로 이해하기',
      ],
    ],
    takeaway: '다음 퀴즈에서 북한식 표현을 직접 맞혀 보자라는 말입니다 예.',
  },
  {
    type: 'content',
    eyebrow: '10 · OUR ATTITUDE',
    title: ['통일을 위해 필요한', '우리의 자세'],
    lead: '통일을 준비하는 데 가장 중요한 자세는 서로의 다름을 인정하고, 우리 스스로 관심과 노력을 이어 가는 것입니다.',
    cards: [
      [
        '서로의 다름 인정하기',
        '통일을 위해 가장 중요하고 필요한 자세는 서로의 차이를 인정하는 것입니다. 서로 다른 생각과 생활방식을 이해하고 존중해야 합니다.',
        '존중',
      ],
      [
        '관심과 준비',
        '우리 개개인이 통일에 관심을 가지고 준비와 노력을 이어 가는 것도 중요합니다. 북한의 교육 제도는 무상교육을 내세우지만, 제공된 자료는 도시와 지방 사이의 교육 격차가 크다고 설명합니다.',
        '관심과 노력',
      ],
      [
        '법과 제도 준비',
        '통일법제 데이터베이스에서는 북한 법률을 연구하며 통합된 법과 제도를 준비하고 있습니다. 서로 합의할 수 있는 법과 제도적 기반을 마련하는 과정이 필요합니다.',
        '통일법제 데이터베이스',
      ],
    ],
    takeaway: '서로의 다름을 인정하고, 관심과 준비를 통해 평화로운 미래를 만들어 갑시다.',
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
    type: 'quiz',
    eyebrow: 'CHECK YOUR THINKING · 04',
    title: ['북한말', '퀴즈'],
    question: '북한에서 도시락, 국밥, 양파를 각각 무엇이라고 부를까요?',
    answer: '곽밥 · 온밥 · 둥굴파',
    explanation: '도시락은 곽밥, 국밥은 온밥, 양파는 둥굴파라고 표현하는 예가 있습니다.',
  },
  {
    type: 'summary',
    eyebrow: 'TODAY’S SUMMARY',
    title: ['배운 내용', '정리하기'],
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
          이전으로
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
          넘기기
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
          src="https://youtube.com/shorts/jP9bIExONO4?si=FluIJT8MgSoblYiB"
          title="유튜브 쇼츠"
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
        예. 알아서 잘 풀어주시길 껄껄  
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
