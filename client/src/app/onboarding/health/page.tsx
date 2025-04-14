'use client';

import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OnboardingHeader from "@/components/OnboardingHeader";
import Footer from "@/components/Footer";

const Health = () => {
  const [allergies, setAllergies] = useState<string[]>([]);
  const [dislikedFood, setDislikedFood] = useState<string>("");
  const [likedFood, setLikedFood] = useState<string>("");
  const [healthIssues, setHealthIssues] = useState<string>("");
  const [specialNotes, setSpecialNotes] = useState<string>("");
  const [termsAgreed, setTermsAgreed] = useState<boolean>(false);
  const [healthReportSrc, setHealthReportSrc] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const allergyOptions = ["우유", "계란", "땅콩", "견과류", "밀가루", "대두", "닭고기", "소고기", "해산물"];

  const toggleAllergy = (allergy: string) => {
    if (allergies.includes(allergy)) {
      setAllergies(allergies.filter(item => item !== allergy));
    } else {
      setAllergies([...allergies, allergy]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setHealthReportSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleNextPage = () => {
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-[100vh] bg-white">
      <OnboardingHeader currentStep={4} backLink="/onboarding/photo" />

      <main className="flex-1 flex flex-col items-center px-4 py-6 pb-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold mb-2">하율이의 건강 상태를 알려주세요</h1>
            <h3 className="text-sm text-gray-500">더 정확한 맞춤형 답변이 가능합니다</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-base font-semibold mb-3">하율이는 알러지가 있나요?</h2>
              <div className="flex flex-wrap gap-2">
                {allergyOptions.map(allergy => (
                  <button 
                    key={allergy}
                    className={`px-3 py-2 rounded-full border text-xs ${
                      allergies.includes(allergy) 
                        ? 'bg-blue-50 border-blue-500 text-blue-500' 
                        : 'bg-gray-50 text-gray-700 border-gray-200'
                    }`}
                    onClick={() => toggleAllergy(allergy)}
                  >
                    {allergy}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-3">하율이가 싫어하는 식재료가 있나요?</h2>
              <div className="relative border border-gray-300 rounded-lg p-3">
                <textarea 
                  placeholder="예: 사과, 당근, 브로콜리"
                  className="w-full bg-transparent outline-none text-sm resize-none h-20"
                  value={dislikedFood}
                  onChange={(e) => setDislikedFood(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-3">하율이가 좋아하는 식재료가 있나요?</h2>
              <div className="relative border border-gray-300 rounded-lg p-3">
                <textarea 
                  placeholder="예: 고구마, 바나나, 닭가슴살"
                  className="w-full bg-transparent outline-none text-sm resize-none h-20"
                  value={likedFood}
                  onChange={(e) => setLikedFood(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-3">관리해야 할 질환이 있나요?</h2>
              <div className="relative border border-gray-300 rounded-lg p-3">
                <textarea 
                  placeholder="예: 비만, 관절염, 피부염"
                  className="w-full bg-transparent outline-none text-sm resize-none h-20"
                  value={healthIssues}
                  onChange={(e) => setHealthIssues(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-3">참고해야 할 특이사항 말씀해주세요!</h2>
              <div className="relative border border-gray-300 rounded-lg p-3">
                <textarea 
                  placeholder="예: 물을 많이 마셔요, 활동량이 적어요"
                  className="w-full bg-transparent outline-none text-sm resize-none h-20"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-3">건강검진 결과지를 올려주세요! (선택)</h2>
              <div 
                className="w-full h-32 rounded-lg border-2 border-dashed border-gray-400 flex items-center justify-center bg-gray-50 cursor-pointer"
                onClick={triggerFileInput}
              >
                {healthReportSrc ? (
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <div className="bg-blue-50 text-blue-500 px-3 py-1 rounded-full text-xs">
                      파일이 업로드되었습니다
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400 text-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto mb-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    <span className="text-xs">클릭하여 파일 업로드</span>
                  </div>
                )}
              </div>
              <input 
                type="file" 
                ref={fileInputRef}
                className="hidden" 
                accept="image/*,application/pdf"
                onChange={handleFileChange}
              />
            </div>

            <div className="flex items-start mt-4">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1 mr-2"
                checked={termsAgreed}
                onChange={(e) => setTermsAgreed(e.target.checked)}
              />
              <label htmlFor="terms" className="text-xs text-gray-600">
                이용약관을 읽고 이해하였으며, 이에 동의합니다.
              </label>
            </div>
            
            <div className="mt-8">
              <button 
                className={`w-full py-3 rounded-lg font-medium text-base shadow-md ${
                  termsAgreed ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
                }`}
                onClick={handleNextPage}
                disabled={!termsAgreed}
              >
                제출하기
              </button>
              <p className="text-[10px] text-gray-400 text-center mt-2">
                입력한 정보는 오직 서비스 제공에만 활용합니다!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Health;