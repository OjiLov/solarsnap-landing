import Link from "next/link";
import { Bolt, CircleDollarSign, Clock3, Leaf, type LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
type Stat = [string, string, LucideIcon];

const stats: Stat[] = [
  ["예상 발전량", "120,000 kWh/년", Bolt],
  ["전기료 절감액", "32,400,000원/년", CircleDollarSign],
  ["투자 회수 기간", "4.2년", Clock3],
  ["CO₂ 저감 효과", "54.6 ton/년", Leaf],
];

export function HeroSection() {
  return (
    <section id="hero" className="container-x py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="font-bold text-solar-green">AI로 만드는 태양광 영업의 새로운 표준</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight md:text-6xl">
            사진 한 장으로<br />태양광의 가치를<br />보여줍니다.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            AI가 건물 지붕을 분석하고, 설치 이미지와 경제성 리포트를 즉시 생성하는 태양광 영업용 SaaS 플랫폼입니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/demo" className="btn-primary">무료 데모 신청</Link>
            <Link href="/contact" className="btn-secondary">서비스 소개서 받기</Link>
          </div>
        </div>
        <div className="card overflow-hidden">
          <div className="relative h-[360px] bg-[linear-gradient(90deg,rgba(0,0,0,.25)_0_50%,rgba(19,138,54,.08)_50%_100%),url('/images/hero-rooftop.jpg')] bg-cover bg-center">
            <div className="absolute left-6 top-6 rounded-lg bg-gray-900 px-3 py-1 text-sm font-bold text-white">Before</div>
            <div className="absolute right-6 top-6 rounded-lg bg-solar-green px-3 py-1 text-sm font-bold text-white">After</div>
            <div className="absolute left-1/2 top-0 h-full w-px bg-white">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-2 shadow">↔</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-solar-green p-4 text-white md:grid-cols-4">
            {stats.map(([label, value, Icon]) => (
              <div key={label} className="rounded-xl bg-white/10 p-3">
                <Icon className="mb-2 h-6 w-6" />
                <p className="text-xs opacity-90">{label}</p>
                <p className="font-black">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
