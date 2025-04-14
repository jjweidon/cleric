'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingHeader from "@/components/OnboardingHeader";
import Footer from "@/components/Footer";

const Growth = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const router = useRouter();

  const handleNextPage = () => {
    // 실제로는 여기서 데이터 유효성 검사 후 저장
    router.push('/onboarding/photo');
  };

  return (
    <div className="flex flex-col min-h-[100vh] bg-white">
      <OnboardingHeader currentStep={2} backLink="/onboarding" />

      <main className="flex-1 flex flex-col items-center px-4 py-6">
        <div className="w-full max-w-md flex flex-col items-center mb-16">
          <div className="text-center w-full mb-10">
            <h1 className="text-lg font-bold mb-6">하율이의 키와 몸무게를 알려주세요</h1>
            
            <div className="mb-8">
              <label className="block text-left text-gray-700 mb-2 text-sm">키 (cm)</label>
              <div className="relative border-b-2 border-gray-300 py-2">
                <input 
                  type="number" 
                  placeholder="키를 입력해주세요" 
                  className="w-full bg-transparent outline-none text-sm"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2 text-sm">몸무게 (kg)</label>
              <div className="relative border-b-2 border-gray-300 py-2">
                <input 
                  type="number" 
                  placeholder="몸무게를 입력해주세요" 
                  className="w-full bg-transparent outline-none text-sm"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-md mt-4">
          <button 
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium text-base shadow-md"
            onClick={handleNextPage}
          >
            다음 페이지
          </button>
          <p className="text-[10px] text-gray-400 text-center mt-2">
            입력한 정보는 오직 서비스 제공에만 활용합니다!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Growth;