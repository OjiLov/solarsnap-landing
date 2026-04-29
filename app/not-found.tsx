import Link from "next/link";
export default function NotFound(){return <main className="grid min-h-screen place-items-center bg-solar-soft p-6"><div className="card p-12 text-center"><h1 className="text-7xl font-black">404</h1><p className="mt-4 text-gray-600">페이지를 찾을 수 없습니다.</p><Link href="/" className="btn-primary mt-8 inline-block">홈으로 돌아가기</Link></div></main>}
