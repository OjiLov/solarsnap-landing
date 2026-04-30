# SolarSnap Landing Page

AI 기반 태양광 설치 시뮬레이션 SaaS의 랜딩 페이지 + 리드 수집 시스템

**라이브 URL:** https://solarsnap-landing.vercel.app
**GitHub:** https://github.com/OjiLov/solarsnap-landing

---

## 기술 스택

| 항목 | 기술 |
|------|------|
| 프레임워크 | Next.js 15 (App Router) |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS v4 |
| 폼 | React Hook Form + Zod |
| 데이터베이스 | PostgreSQL + Prisma ORM |
| 이메일 | Resend |
| 애니메이션 | Framer Motion |
| 배포 | Vercel |

---

## 프로젝트 구조

```
app/
├── page.tsx                # 메인 랜딩페이지
├── demo/page.tsx           # 데모 신청 페이지
├── pricing/page.tsx        # 요금제 페이지
├── contact/page.tsx        # 문의 페이지
├── success/page.tsx        # 신청 완료 페이지
└── api/lead/route.ts       # 리드 수집 API (POST)

components/
├── landing/
│   ├── Header.tsx          # 스티키 네비게이션
│   ├── HeroSection.tsx     # 히어로 (핵심 지표 4개)
│   ├── Sections.tsx        # 문제/솔루션/비전/가치/기능/타겟 섹션
│   ├── PricingSection.tsx  # 4단계 요금제 (Free/Basic/Pro/Enterprise)
│   ├── FinalCTA.tsx        # 하단 CTA
│   └── Footer.tsx          # 푸터
├── forms/
│   └── DemoRequestForm.tsx # 데모 신청 폼
└── common/
    └── Logo.tsx            # 브랜드 로고

prisma/
└── schema.prisma           # Lead 모델 (DB 스키마)
```

---

## 주요 기능

- **히어로 섹션** — 연간 발전량, 전기요금 절감, 투자회수기간, CO₂ 감축 지표 시각화
- **솔루션 워크플로우** — AI 지붕 인식 → Before/After 시각화 → 경제성 분석 → PDF 리포트
- **데모 신청 폼** — Zod 유효성 검사 + DB 저장 + 리드 상태 관리
- **요금제 페이지** — 4단계 플랜 비교
- **리드 관리** — `NEW → CONTACTED → QUALIFIED → CLOSED/LOST` 상태 추적

---

## 로컬 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경변수 설정

`.env` 파일 생성:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/solarsnap"
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=your@email.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> DB 없이도 UI 확인은 가능 (폼 제출 시 오류 발생)

### 3. DB 마이그레이션

```bash
npx prisma generate
npx prisma db push
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속

---

## 배포

GitHub `master` 브랜치에 push하면 Vercel에서 자동 배포됩니다.

```bash
git push origin master
```

### Vercel 환경변수 설정

https://vercel.com/ojilovs-projects/solarsnap-landing → Settings → Environment Variables

```
DATABASE_URL
RESEND_API_KEY
ADMIN_EMAIL
NEXT_PUBLIC_SITE_URL
```

---

## DB 스키마 (Lead)

```prisma
model Lead {
  id        String     @id @default(cuid())
  name      String
  company   String
  phone     String
  email     String
  type      LeadType
  message   String?
  consent   Boolean    @default(false)
  source    String     @default("landing")
  status    LeadStatus @default(NEW)
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
}
```

**LeadType:** `SALES_AGENT` | `EPC_COMPANY` | `FACTORY_OWNER` | `INVESTOR` | `PARTNER` | `OTHER`

**LeadStatus:** `NEW` | `CONTACTED` | `QUALIFIED` | `CLOSED` | `LOST`

---

## 문제 해결

```bash
# 패키지 재설치
rm -rf node_modules && npm install

# Prisma 재생성
npx prisma generate

# 다른 포트로 실행
npm run dev -- -p 3001
```
