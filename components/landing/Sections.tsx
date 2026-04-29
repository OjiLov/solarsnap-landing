import {
  Camera, FileText, Leaf, Rocket, Shield, Users, Gem, Target,
  Clock, Handshake, Globe2, BarChart3, Upload, ScanLine,
  type LucideProps,
} from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
type Item2 = [string, LucideIcon];
type Item3 = [string, string, LucideIcon];

const problems: Item2[] = [
  ["고객은 설치 후 모습을 상상하기 어렵습니다.", ScanLine],
  ["견적과 설계에 시간이 오래 걸립니다.", Clock],
  ["영업사원별 설명 편차가 큽니다.", Users],
  ["상담 후 계약까지 이탈이 많습니다.", Target],
];

const steps: Item2[] = [
  ["건물 사진 업로드", Upload],
  ["AI 지붕 인식", ScanLine],
  ["패널 자동 배치", Leaf],
  ["발전량·절감액 계산", BarChart3],
  ["PDF 제안서 생성", FileText],
];

const values: Item3[] = [
  ["신뢰", "정확한 데이터와 투명한 정보 제공", Shield],
  ["속도", "빠른 분석과 즉각적인 결과 제공", Rocket],
  ["협력", "파트너와 함께 성장하는 생태계", Users],
  ["가치 창출", "고객의 성과와 지속가능성 향상", Gem],
];

const features: Item3[] = [
  ["AI 지붕 인식", "사진에서 설치 가능 영역 자동 분석", ScanLine],
  ["Before / After 시각화", "설치 전후 이미지를 직관적으로 비교", Camera],
  ["경제성 예측 분석", "발전량·절감액·회수기간 계산", BarChart3],
  ["리포트 생성", "고객 상담용 PDF 제안서 자동 생성", FileText],
  ["고객 관리", "상담 이력과 프로젝트를 관리", Users],
];

const missionItems: Item2[] = [
  ["전환율 2배 향상", BarChart3],
  ["상담 시간 50% 단축", Clock],
  ["계약 성사율 극대화", Handshake],
  ["지속가능 에너지 확산", Globe2],
];

export function ProblemSection() {
  return (
    <section className="container-x py-16">
      <h2 className="section-title text-center">태양광 영업, 아직도 말로만 설명하고 계신가요?</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-4">
        {problems.map(([t, Icon]) => (
          <div className="card p-8 text-center" key={t}>
            <Icon className="mx-auto h-10 w-10 text-solar-green" />
            <p className="mt-5 font-bold">{t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SolutionSection() {
  return (
    <section className="container-x py-16">
      <div className="card p-10">
        <h2 className="section-title text-center">SolarSnap은 상담 현장에서 바로 보여줍니다.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {steps.map(([t, Icon], i) => (
            <div className="text-center" key={t}>
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-solar-soft text-solar-green">
                <Icon className="h-9 w-9" />
              </div>
              <b className="mt-4 block">{i + 1}. {t}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisionSection() {
  return (
    <section id="vision" className="container-x py-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-10">
          <p className="font-black text-solar-green">우리의 비전 Vision</p>
          <h2 className="mt-3 text-4xl font-black">모든 지붕 위에,<br />태양의 가치를.</h2>
          <p className="section-sub">AI 기술로 태양광의 가치를 누구나 쉽게 이해하고 지속가능한 에너지 미래에 참여하도록 돕습니다.</p>
        </div>
        <div className="card p-10">
          <p className="font-black text-solar-green">우리의 목표 Mission</p>
          <h2 className="mt-3 text-4xl font-black">태양광 영업의 새로운<br />패러다임을 만듭니다.</h2>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {missionItems.map(([t, Icon]) => (
              <div className="rounded-2xl border p-5" key={t}>
                <Icon className="h-7 w-7 text-solar-green" />
                <b className="mt-3 block">{t}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ValuesSection() {
  return (
    <section className="container-x py-16">
      <h2 className="section-title text-center">SolarSnap의 핵심 가치</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-4">
        {values.map(([a, b, Icon]) => (
          <div className="card p-8 text-center" key={a}>
            <Icon className="mx-auto h-10 w-10 text-solar-green" />
            <h3 className="mt-4 text-xl font-black">{a}</h3>
            <p className="mt-2 text-gray-600">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeatureSection() {
  return (
    <section id="features" className="container-x py-16">
      <h2 className="section-title text-center">주요 기능</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-5">
        {features.map(([a, b, Icon]) => (
          <div className="card p-6" key={a}>
            <Icon className="h-9 w-9 text-solar-green" />
            <h3 className="mt-4 font-black">{a}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TargetSection() {
  return (
    <section id="targets" className="container-x py-16">
      <h2 className="section-title text-center">이런 분들에게 추천합니다</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-4">
        {["태양광 영업 대리점", "EPC / 시공사", "에너지 컨설팅 회사", "공장 지붕 영업 조직"].map((t) => (
          <div className="card p-8 text-center" key={t}>
            <Leaf className="mx-auto h-10 w-10 text-solar-green" />
            <b className="mt-4 block text-xl">{t}</b>
          </div>
        ))}
      </div>
    </section>
  );
}
