import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolarSnap | AI 태양광 영업 시각화 SaaS",
  description: "사진 한 장으로 태양광 설치 이미지, 예상 발전량, 전기료 절감액, 투자 회수 기간을 즉시 보여주는 AI 기반 태양광 영업 SaaS.",
  keywords: ["태양광 영업 프로그램", "태양광 시뮬레이션", "AI 태양광 설계", "태양광 제안서 자동 생성"],
  openGraph: { title: "SolarSnap", description: "사진 한 장으로 태양광의 가치를 보여줍니다.", images: ["/images/og-solarsnap.png"] }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>;
}
