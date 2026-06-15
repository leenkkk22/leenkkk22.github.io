export const site = {
  name: 'Developer',
  title: 'Backend · Full-stack Developer',
  description: 'Java/Spring 기반 백엔드와 React를 활용한 풀스택 개발자 포트폴리오',
  email: 'your.email@example.com',
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
  { category: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'MyBatis'] },
  { category: 'Frontend', items: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'] },
  { category: 'Database', items: ['MySQL', 'PostgreSQL', 'Redis'] },
  { category: 'DevOps & Tools', items: ['Git', 'GitHub Actions', 'Docker', 'Linux'] },
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
    title: '프로젝트 A',
    description: 'Spring Boot 기반 REST API와 React 프론트엔드를 연동한 웹 서비스입니다. JWT 인증, CRUD, 파일 업로드 기능을 구현했습니다.',
    techStack: ['Java', 'Spring Boot', 'React', 'MySQL'],
    githubUrl: 'https://github.com/leenkkk22',
    highlight: 'JWT 인증 · REST API',
  },
  {
    title: '프로젝트 B',
    description: '실시간 데이터 처리와 캐싱을 적용한 백엔드 서비스입니다. Redis를 활용한 세션/캐시 관리로 응답 속도를 개선했습니다.',
    techStack: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL'],
    githubUrl: 'https://github.com/leenkkk22',
    highlight: 'Redis 캐싱',
  },
  {
    title: '프로젝트 C',
    description: '팀 협업 프로젝트로 기획부터 배포까지 전 과정을 경험했습니다. Git Flow, 코드 리뷰, CI/CD 파이프라인을 적용했습니다.',
    techStack: ['React', 'TypeScript', 'Spring Boot', 'Docker'],
    githubUrl: 'https://github.com/leenkkk22',
    highlight: 'CI/CD · Docker',
  },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];
