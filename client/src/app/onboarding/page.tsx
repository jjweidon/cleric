'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingHeader from "@/components/OnboardingHeader";
import Footer from "@/components/Footer";

const Onboarding = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const router = useRouter();

  const handleNextPage = () => {
    if (!name || !gender) return;
    // 실제로는 여기서 데이터 유효성 검사 후 저장
    router.push('/onboarding/birthdate');
  };

  return (
    <div className="flex flex-col min-h-[100vh] bg-white">
      <OnboardingHeader currentStep={1} backLink="/" />

      <main className="flex-1 flex flex-col items-center px-4 py-6">
        <div className="w-full max-w-md flex flex-col items-center mb-16">
          <div className="text-center w-full mb-10">
            <h1 className="text-lg font-bold mb-6">우리 아이의 이름을 알려주세요!</h1>
            <div className="relative border-b-2 border-gray-300 py-2 w-full max-w-xs mx-auto">
              <input 
                type="text" 
                placeholder="이름이나 태명, 애칭" 
                className="w-full bg-transparent outline-none text-center text-base"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                className={`px-6 py-2 rounded-full border-2 ${
                  gender === 'male' 
                    ? 'bg-blue-50 border-blue-500 text-blue-500' 
                    : 'bg-gray-50 text-gray-700 border-gray-200'
                }`}
                onClick={() => setGender('male')}
              >
                남자아이
              </button>
              <button
                className={`px-6 py-2 rounded-full border-2 ${
                  gender === 'female' 
                    ? 'bg-pink-50 border-pink-500 text-pink-500' 
                    : 'bg-gray-50 text-gray-700 border-gray-200'
                }`}
                onClick={() => setGender('female')}
              >
                여자아이
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-md mt-4">
          <button 
            className={`w-full py-3 rounded-lg font-medium text-base shadow-md ${
              name && gender ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
            }`}
            onClick={handleNextPage}
            disabled={!name || !gender}
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

export default Onboarding;