export const site = {
  name: '이인호',
  title: 'Backend · Full-stack Developer',
  description: 'Java/Spring 기반 백엔드와 React를 활용한 풀스택 개발자 포트폴리오',
  email: 'inho156@naver.com',
  github: 'https://github.com/leenkkk22',
  linkedin: '',
  resumeUrl: '',
};

export const about = {
  paragraphs: [
    '사용자 경험과 코드 품질을 모두 고려하는 개발자입니다. RESTful API 설계, 데이터베이스 모델링, 프론트엔드 연동까지 end-to-end로 프로젝트를 수행해 왔습니다.',
    '새로운 기술을 빠르게 학습하고, 팀과의 협업을 통해 더 나은 결과물을 만드는 것을 즐깁니다.',
  ],
};

export const skills = [
  { category: 'Backend', items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'MyBatis'] },
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'HTML/CSS', 'Tailwind CSS'] },
  { category: 'Database', items: ['Oracle', 'MySQL', 'Redis'] },
  { category: 'DevOps & Tools', items: ['Git', 'GitHub Actions', 'Docker'] },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlight?: string;
}

export const projects: Project[] = [
  {
    title: 'K-Bay Action',
    description:
      '실시간 웹 비크리(2등가) 경매 플랫폼입니다. Redisson 분산 락으로 동시 입찰을 처리하고, Redis Pub/Sub과 WebSocket(STOMP)으로 실시간 현재가를 반영합니다. Spring Security 세션 인증, Iamport 본인인증, Toss 결제, 관리자 승계/유찰 처리까지 end-to-end로 구현한 KH 세미프로젝트입니다.',
    techStack: [
      'Java', 'Spring MVC', 'Spring Security', 'MyBatis',
      'Oracle', 'Redis', 'Redisson', 'WebSocket', 'STOMP', 'JSP',
    ],
    highlight: '비크리 경매 · Redis · WebSocket',
  },
  {
    title: 'KH증권 모의 투자 플랫폼',
    description:
      '실시간 모의 주식 투자 서비스로 토스증권 클론 프로젝트입니다. 한국투자증권(KIS) Open API·WebSocket으로 실시간 시세를 수집하고, Oracle·Redis 3단계 캐시로 API 호출을 최소화했습니다. JWT·카카오 OAuth 인증, 시장가/지정가 모의 매매, 수익률 랭킹, Naver 뉴스 연동, AI 종목 리포트·투자성향 분석을 포함한 KH 파이널 프로젝트입니다.',
    techStack: [
      'Java', 'Spring Boot', 'Spring Security', 'MyBatis',
      'Oracle', 'Redis', 'JWT', 'OAuth2', 'WebSocket', 'Next.js',
    ],
    highlight: 'KIS 실시간 시세 · 모의투자 · JWT/OAuth',
  },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];
