'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingHeader from "@/components/OnboardingHeader";

const Onboarding = () => {
  const [birthdate, setBirthdate] = useState("");
  const router = useRouter();

  const handleNextPage = () => {
    // 실제로는 여기서 데이터 유효성 검사 후 저장
    router.push('/onboarding/growth');
  };

  return (
    <div className="flex flex-col min-h-[100vh] bg-white">
      <OnboardingHeader currentStep={1} backLink="/" />

      <main className="flex-1 flex flex-col items-center px-4 py-6">
        <div className="w-full max-w-md flex flex-col items-center mb-16">
          <div className="text-center w-full mb-10">
            <h1 className="text-lg font-bold mb-6">하울이의 생일을 알려주세요!</h1>
            <div className="relative border-b-2 border-gray-300 py-2 w-full max-w-xs mx-auto">
              <input 
                type="text" 
                placeholder="YYYY.MM.DD" 
                className="w-full bg-transparent outline-none text-center text-base"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
              <button className="absolute right-0 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                </svg>
              </button>
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

      <footer className="py-3 w-full border-t border-gray-100 mt-4 bg-white">
        <p className="text-[10px] text-gray-400 text-center">
          © insightnexus
        </p>
      </footer>
    </div>
  );
};

export default Onboarding;