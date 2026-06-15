# Developer Portfolio

Astro + Tailwind CSS 기반 개발자 포트폴리오 사이트입니다. GitHub Pages에 자동 배포됩니다.

**Live:** [https://leenkkk22.github.io](https://leenkkk22.github.io)

## Tech Stack

- [Astro](https://astro.build/) — Static Site Generator
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- GitHub Actions — CI/CD 배포

## 로컬 개발

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:4321` 접속

## 빌드

```bash
npm run build
npm run preview
```

## 콘텐츠 수정

포트폴리오 내용은 `src/data/portfolio.ts` 한 파일에서 관리합니다.

| 항목 | 수정 위치 |
|------|-----------|
| 이름, 연락처, SNS | `site` 객체 |
| 자기소개 | `about.paragraphs` |
| 기술 스택 | `skills` 배열 |
| 프로젝트 | `projects` 배열 |

## GitHub Pages 배포

1. 이 저장소를 `username.github.io` 이름으로 GitHub에 push
2. **Settings → Pages → Build and deployment → Source:** `GitHub Actions` 선택
3. `main` 브랜치 push 시 `.github/workflows/deploy.yml`이 자동 빌드·배포

## 프로젝트 구조

```
src/
├── components/   # Hero, About, Skills, Projects, Contact
├── data/         # portfolio.ts (콘텐츠 데이터)
├── layouts/      # BaseLayout
├── pages/        # index.astro
└── styles/       # global.css
public/           # favicon 등 정적 파일
```
