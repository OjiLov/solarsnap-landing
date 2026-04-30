# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # 개발 서버 (http://localhost:3000)
npm run build      # 프로덕션 빌드
npm run lint       # ESLint

npx prisma generate   # Prisma 클라이언트 재생성 (schema.prisma 변경 후 필수)
npx prisma db push    # DB에 스키마 적용 (마이그레이션 없이)
npx prisma studio     # DB GUI
```

## Architecture

Next.js 15 App Router 기반 랜딩페이지 + 리드 수집 시스템. 테스트 없음.

### 데이터 흐름

`DemoRequestForm` (클라이언트) → `POST /api/lead` → `leadSchema` (Zod 검증) → `prisma.lead.create()` → `/success` 리디렉션

- `lib/lead-schema.ts` — Zod 스키마. 클라이언트(`DemoRequestForm`)와 서버(`api/lead/route.ts`) 양쪽에서 공유
- `lib/db.ts` — 개발환경에서 HMR로 인한 PrismaClient 중복 생성 방지용 싱글톤

### 페이지 구성

- `/` — `app/page.tsx`에서 `components/landing/` 섹션 컴포넌트들을 순서대로 조립
- `/demo` — `DemoRequestForm` 단독 페이지
- `/pricing` — `PricingSection` 단독 페이지
- `/contact`, `/success` — 단순 정적 페이지

### 스타일링

Tailwind 커스텀 컬러: `solar-green` (#138A36), `solar-deep` (#0B5D2A), `solar-soft` (#EAF7EF), `solar-yellow` (#F6C343). 섹션 배경색 구분에 주로 사용.

### 배포

`master` 브랜치 push → Vercel 자동 배포. 환경변수(`DATABASE_URL`, `RESEND_API_KEY`, `ADMIN_EMAIL`, `NEXT_PUBLIC_SITE_URL`)는 Vercel 대시보드에서 관리.

schema.prisma 변경 시 Vercel 빌드가 `prisma generate`를 자동 실행하므로 별도 처리 불필요. DB 스키마 변경은 `prisma db push`로 적용.
