# 게임 디자이너 포트폴리오 사이트

4년차 게임 디자이너의 포트폴리오를 담은 개인 웹사이트입니다.

## 🎮 프로젝트 소개

이 웹사이트는 게임 디자이너로서의 경력, 기술 스택, 개인 프로젝트 및 진행중인 프로젝트들을 소개하는 포트폴리오 사이트입니다.

### 주요 기능

- **홈페이지**: 게임 디자이너로서의 전문 분야와 핵심 역량 소개
- **소개 페이지**: 경력, 기술 스택, 연락처 정보
- **개인 프로젝트**: 완료된 개인 프로젝트 포트폴리오
- **진행중인 프로젝트**: 현재 진행중인 프로젝트와 진행 상황
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원
- **다크 테마**: 어두운 배경에 보라색/청록색 계열의 신비로운 디자인

## 🛠️ 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: CSS Modules
- **애니메이션**: Framer Motion
- **배포**: Vercel (권장)

## 📦 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 사이트를 확인하세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 📂 프로젝트 구조

```
pk개인블로그/
├── app/
│   ├── layout.tsx              # 전역 레이아웃
│   ├── globals.css             # 전역 스타일
│   ├── page.tsx                # 홈 페이지
│   ├── page.css
│   ├── about/
│   │   ├── page.tsx            # 소개 페이지
│   │   └── about.css
│   └── projects/
│       ├── personal/
│       │   ├── page.tsx        # 개인 프로젝트 페이지
│       │   └── personal.css
│       └── current/
│           ├── page.tsx        # 진행중인 프로젝트 페이지
│           └── current.css
├── components/
│   ├── Navigation.tsx          # 네비게이션 컴포넌트
│   └── Navigation.css
├── public/                     # 정적 파일 (이미지 등)
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎨 커스터마이징 가이드

### 색상 테마 변경

`app/globals.css` 파일에서 CSS 변수를 수정하세요:

```css
:root {
  --background-dark: #0a0a0f;      /* 배경색 */
  --background-card: #13131f;      /* 카드 배경색 */
  --accent-purple: #a855f7;        /* 메인 강조색 (보라) */
  --accent-blue: #3b82f6;          /* 보조 강조색 (파랑) */
  --accent-cyan: #06b6d4;          /* 보조 강조색 (청록) */
  --text-primary: #f3f4f6;         /* 메인 텍스트 색 */
  --text-secondary: #9ca3af;       /* 보조 텍스트 색 */
}
```

### 내용 수정

각 페이지의 내용을 수정하려면:

1. **홈 페이지**: `app/page.tsx`
2. **소개 페이지**: `app/about/page.tsx`
3. **개인 프로젝트**: `app/projects/personal/page.tsx`
4. **진행중인 프로젝트**: `app/projects/current/page.tsx`

### 프로필 이미지 추가

1. 이미지를 `public/` 폴더에 추가
2. `app/about/page.tsx`의 프로필 섹션 수정:

```tsx
<div className="intro-image">
  <img src="/profile.jpg" alt="프로필" />
</div>
```

## 📝 TODO

- [ ] 프로필 이미지 추가
- [ ] 연락처 정보 업데이트
- [ ] 실제 프로젝트 내용으로 교체
- [ ] 프로젝트 상세 페이지 추가
- [ ] 다크/라이트 모드 토글 추가
- [ ] 블로그 섹션 추가 (선택사항)
- [ ] SEO 최적화 (메타 태그, Open Graph)
- [ ] Google Analytics 연동

## 🚀 배포

### Vercel 배포 (권장)

1. GitHub에 레포지토리 푸시
2. [Vercel](https://vercel.com)에 접속
3. "New Project" 클릭
4. GitHub 레포지토리 선택
5. 자동 배포 완료!

### 다른 플랫폼

- **Netlify**: `npm run build` 후 `.next` 폴더 배포
- **자체 서버**: `npm run build && npm start`로 Node.js 서버 실행

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 📧 연락처

- **이메일**: your.email@example.com
- **LinkedIn**: [프로필 링크]
- **GitHub**: [GitHub 프로필]

---

**Made with ❤️ by a Game Designer**

