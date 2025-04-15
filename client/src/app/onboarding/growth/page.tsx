'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingHeader from "@/components/OnboardingHeader";
import Footer from "@/components/Footer";

const Growth = () => {
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [showHeightPlaceholder, setShowHeightPlaceholder] = useState(true);
  const [showWeightPlaceholder, setShowWeightPlaceholder] = useState(true);
  const router = useRouter();

  const handleNextPage = () => {
    // 실제로는 여기서 데이터 유효성 검사 후 저장
    if (height && weight) {
      router.push('/onboarding/photo');
    }
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
                  type="text" 
                  placeholder={showHeightPlaceholder ? "ex) 110" : ""} 
                  className="w-full bg-transparent outline-none text-center text-base"
                  value={height || ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '') {
                      setHeight(null);
                      setShowHeightPlaceholder(true);
                    } else {
                      const num = Number(value);
                      if (!isNaN(num)) {
                        setHeight(num);
                        setShowHeightPlaceholder(false);
                      }
                    }
                  }}
                  onFocus={() => setShowHeightPlaceholder(false)}
                  onBlur={() => setShowHeightPlaceholder(!height)}
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2 text-sm">몸무게 (kg)</label>
              <div className="relative border-b-2 border-gray-300 py-2">
                <input 
                  type="text" 
                  placeholder={showWeightPlaceholder ? "ex) 20" : ""} 
                  className="w-full bg-transparent outline-none text-center text-base"
                  value={weight || ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '') {
                      setWeight(null);
                      setShowWeightPlaceholder(true);
                    } else {
                      const num = Number(value);
                      if (!isNaN(num)) {
                        setWeight(num);
                        setShowWeightPlaceholder(false);
                      }
                    }
                  }}
                  onFocus={() => setShowWeightPlaceholder(false)}
                  onBlur={() => setShowWeightPlaceholder(!weight)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-md mt-4">
          <button 
            className={`w-full py-3 rounded-lg font-medium text-base shadow-md ${
              height && weight ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
            }`}
            onClick={handleNextPage}
            disabled={!height || !weight}
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