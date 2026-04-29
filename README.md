# SolarSnap Landing Page

# 🚀 0. 전체 흐름 (먼저 이해)

```bash
1. Node.js 설치
2. ZIP 압축 해제
3. 패키지 설치 (npm install)
4. 환경변수 설정 (.env)
5. DB 세팅 (Prisma)
6. 개발 서버 실행 (npm run dev)
7. 실제 동작 확인
8. Vercel 배포
```

---

# 🟢 1. 사전 준비 (필수)

## ✔️ 1-1 Node.js 설치

👉 [https://nodejs.org](https://nodejs.org)

* **권장 버전: 18 이상**
* 설치 후 확인:

```bash
node -v
npm -v
```

---

## ✔️ 1-2 VS Code 설치 (추천)

👉 [https://code.visualstudio.com](https://code.visualstudio.com)

추천 확장:

* ES7 React Snippets
* Tailwind CSS IntelliSense
* Prisma

---

# 🟢 2. 프로젝트 압축 해제

다운로드한 파일:

```bash
solarsnap-landing-nextjs.zip
```

👉 압축 해제

```bash
solarsnap-landing-nextjs/
```

---

# 🟢 3. 프로젝트 실행 준비

## ✔️ 3-1 터미널 이동

```bash
cd solarsnap-landing-nextjs
```

---

## ✔️ 3-2 패키지 설치

```bash
npm install
```

👉 설치되는 주요 패키지:

* next
* react
* tailwind
* prisma
* zod
* react-hook-form

---

# 🟢 4. 환경변수 설정 (.env)

## ✔️ 4-1 파일 생성

프로젝트 루트에:

```bash
.env
```

## ✔️ 4-2 기본 값 입력

```env
DATABASE_URL="postgresql://user:password@localhost:5432/solarsnap"

NEXT_PUBLIC_APP_URL=http://localhost:3000

RESEND_API_KEY=your_api_key_here
ADMIN_EMAIL=your@email.com
```

👉 지금은 DB 없어도 실행 가능 (폼만 테스트 가능)

---

# 🟢 5. Prisma DB 설정 (선택 but 추천)

## ✔️ 5-1 Prisma 초기화

```bash
npx prisma generate
```

---

## ✔️ 5-2 DB 생성

### 방법 1 (추천: Supabase)

👉 [https://supabase.com](https://supabase.com)

1. 프로젝트 생성
2. DB URL 복사
3. `.env`에 넣기

---

## ✔️ 5-3 테이블 생성

```bash
npx prisma db push
```

---

# 🟢 6. 개발 서버 실행

```bash
npm run dev
```

👉 브라우저 접속:

```
http://localhost:3000
```

---

# 🟢 7. 정상 동작 확인 체크리스트

✔️ 랜딩페이지 화면 출력
✔️ Hero 화면 정상
✔️ CTA 버튼 클릭 이동
✔️ 데모 신청 폼 입력 가능
✔️ API 호출 정상 (/api/lead)

---

# 🟢 8. 주요 코드 구조 이해 (중요)

## 📁 핵심 폴더

```bash
app/
  page.tsx            👉 메인 랜딩페이지
  api/lead/route.ts   👉 데모 신청 API

components/
  landing/            👉 랜딩 섹션들

prisma/
  schema.prisma       👉 DB 구조
```

---

# 🟢 9. Vercel 배포 (실제 서비스)

## ✔️ 9-1 GitHub 업로드

```bash
git init
git add .
git commit -m "init"
git remote add origin https://github.com/your-repo
git push -u origin main
```

---

## ✔️ 9-2 Vercel 연결

👉 [https://vercel.com](https://vercel.com)

1. GitHub 연결
2. 프로젝트 선택
3. Deploy 클릭

---

## ✔️ 9-3 환경변수 입력

Vercel → Settings → Environment Variables

```env
DATABASE_URL=
RESEND_API_KEY=
ADMIN_EMAIL=
NEXT_PUBLIC_APP_URL=
```

---

# 🟢 10. 이메일 기능 연결 (선택)

👉 [https://resend.com](https://resend.com)

1. 회원가입
2. API Key 발급
3. `.env`에 추가

---

# 🟢 11. 실전 운영 체크리스트

✔️ 도메인 연결 (ex. solarsnap.ai)
✔️ Google Analytics 연결
✔️ OG 이미지 설정
✔️ SEO 메타데이터 적용
✔️ 모바일 최적화 확인

---

# 🔥 12. 문제 발생 시 해결

## ❗ npm install 실패

```bash
rm -rf node_modules
npm install
```

---

## ❗ 포트 충돌

```bash
npm run dev -- -p 3001
```

---

## ❗ Prisma 오류

```bash
npx prisma generate
npx prisma db push
```

---

# 🔥 핵심 요약

👉 실행만 하고 싶다면:

```bash
npm install
npm run dev
```

👉 DB까지 붙이면:

```bash
npx prisma db push
```

👉 배포까지:

```bash
git push → Vercel Deploy
```

---
