'use client';

import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OnboardingHeader from "@/components/OnboardingHeader";
import Footer from "@/components/Footer";

const Photo = () => {
  const [imageSrc, setImageSrc] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleNextPage = () => {
    // 실제로는 여기서 파일 업로드 처리
    router.push('/onboarding/health');
  };

  return (
    <div className="flex flex-col min-h-[100vh] bg-white">
      <OnboardingHeader currentStep={4} backLink="/onboarding/growth" />

      <main className="flex-1 flex flex-col items-center px-4 py-6">
        <div className="w-full max-w-md flex flex-col items-center mb-16">
          <div className="text-center w-full mb-10">
            <h1 className="text-lg font-bold mb-6">하율이의 사진을 등록해주세요</h1>
            
            <div>
              <div 
                className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center bg-gray-50 overflow-hidden cursor-pointer"
                onClick={triggerFileInput}
              >
                {imageSrc ? (
                  <Image src={imageSrc} alt="Preview" width={128} height={128} className="object-cover w-full h-full" />
                ) : (
                  <div className="text-gray-400 text-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto mb-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                    <span className="text-xs">사진 업로드</span>
                  </div>
                )}
              </div>
              <input 
                type="file" 
                ref={fileInputRef}
                className="hidden" 
                accept="image/*"
                onChange={handleFileChange}
              />
              <p className="text-xs text-gray-500 text-center">
                선택사항입니다
              </p>
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

export default Photo;