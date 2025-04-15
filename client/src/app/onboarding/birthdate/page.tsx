'use client';

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import CustomDatePicker from "@/components/CustomDatePicker";
import OnboardingHeader from "@/components/OnboardingHeader";
import Footer from "@/components/Footer";

const BirthdatePage = () => {
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const datePickerRef = useRef<any>(null);
  const router = useRouter();
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const validateDate = (year: number, month: number, day: number): boolean => {
    const currentYear = new Date().getFullYear();
    const date = new Date(year, month - 1, day);
    
    if (
      year < 1900 || 
      year > currentYear || 
      month < 1 || 
      month > 12 || 
      day < 1 || 
      day > 31 || 
      date.getMonth() !== month - 1 || 
      date.getDate() !== day
    ) {
      setError("올바른 날짜를 입력해주세요.");
      return false;
    }
    
    setError("");
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // 숫자만 허용
    value = value.replace(/\D/g, '');
    
    // 년도 부분이 4자리를 넘으면 자르기
    if (value.length > 4) {
      value = value.slice(0, 4) + '.' + value.slice(4);
    }
    
    // 월 부분이 2자리를 넘으면 자르기
    if (value.length > 7) {
      value = value.slice(0, 7) + '.' + value.slice(7);
    }
    
    // 전체 길이 제한
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    
    setInputValue(value);
    setShowPlaceholder(value.length === 0);
    
    // 입력값이 완전한 날짜 형식일 때만 검증
    if (value.length === 10 && value.match(/^\d{4}\.\d{2}\.\d{2}$/)) {
      const [year, month, day] = value.split(".").map(Number);
      if (validateDate(year, month, day)) {
        const date = new Date(year, month - 1, day);
        setBirthdate(date);
      } else {
        setBirthdate(null);
      }
    } else {
      setError("");
      setBirthdate(null);
    }
  };

  const handleNextPage = () => {
    if (!birthdate) return;
    router.push('/onboarding/growth');
  };

  return (
    <div className="flex flex-col min-h-[100vh] bg-white">
      <OnboardingHeader currentStep={2} backLink="/onboarding" />

      <main className="flex-1 flex flex-col items-center px-4 py-6">
        <div className="w-full max-w-md flex flex-col items-center mb-16">
          <div className="text-center w-full mb-10">
            <h1 className="text-lg font-bold mb-6">우리 아이의 생일을 알려주세요!</h1>
            <div className="relative border-b-2 border-gray-300 py-2 w-full max-w-xs mx-auto">
              <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={showPlaceholder ? "YYYY.MM.DD" : ""}
                onFocus={() => setShowPlaceholder(false)}
                onBlur={() => setShowPlaceholder(inputValue.length === 0)}
                className="w-full bg-transparent outline-none text-center text-base"
              />
              <button 
                className="absolute right-0 top-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute z-10 mt-2 right-0">
                  <div className="relative">
                    <CustomDatePicker
                      ref={datePickerRef}
                      selected={birthdate}
                      onChange={(date) => {
                        setBirthdate(date);
                        if (date) {
                          const year = date.getFullYear();
                          const month = String(date.getMonth() + 1).padStart(2, '0');
                          const day = String(date.getDate()).padStart(2, '0');
                          setInputValue(`${year}.${month}.${day}`);
                          setError("");
                        }
                        setIsOpen(false);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            {error && (
              <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
          </div>
        </div>
        
        <div className="w-full max-w-md mt-4">
          <button 
            className={`w-full py-3 rounded-lg font-medium text-base shadow-md ${
              birthdate ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
            }`}
            onClick={handleNextPage}
            disabled={!birthdate}
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

export default BirthdatePage; 