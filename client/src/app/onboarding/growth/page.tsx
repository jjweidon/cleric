import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const GrowthOnboarding: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="p-4 flex items-center">
        <Link href="/onboarding" className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
        </Link>
        <div className="h-1 bg-blue-500 ml-4 flex-grow max-w-xs"></div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center mb-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6">하울이는 얼마나 자랐어요?</h1>
          
          <div className="flex items-center mb-6">
            <span className="text-gray-400 w-20 text-left">키</span>
            <div className="relative flex-1">
              <input 
                type="number" 
                className="w-full bg-transparent border-b-2 border-gray-300 py-2 outline-none" 
              />
              <span className="absolute right-0 top-2 text-gray-400">cm</span>
            </div>
          </div>
          
          <div className="flex items-center mb-8">
            <span className="text-gray-400 w-20 text-left">몸무게</span>
            <div className="relative flex-1">
              <input 
                type="number" 
                className="w-full bg-transparent border-b-2 border-gray-300 py-2 outline-none" 
              />
              <span className="absolute right-0 top-2 text-gray-400">kg</span>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Image 
              src="/images/height_measure.png" 
              alt="키 재기" 
              width={140} 
              height={140} 
              className="mt-4"
            />
          </div>
        </div>
      </main>

      <footer className="p-4">
        <Link href="/onboarding/photo">
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium">
            다음 페이지
          </button>
        </Link>
        <p className="text-xs text-gray-400 text-center mt-4">
          입력한 정보는 오직 서비스 제공에만 활용합니다!
        </p>
        <p className="text-xs text-gray-400 text-center mt-1">
          © insightnexus
        </p>
      </footer>
    </div>
  );
};

export default GrowthOnboarding; 