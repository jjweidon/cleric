import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const HealthInfo: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="p-4 flex items-center">
        <Link href="/onboarding/photo" className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
        </Link>
        <div className="absolute right-4 text-gray-800 font-medium">건너뛰기</div>
      </header>

      <main className="flex-1 p-4 overflow-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-3">하울이 건강 정보를 입력해주세요!</h1>
          <p className="text-yellow-500 text-sm mb-6">더 정확한 맞춤형 답변이 가능합니다 :)</p>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">하울이는 알러지가 있나요?</label>
            <div className="bg-gray-100 rounded-lg p-3">
              <input 
                type="text" 
                placeholder="ex. 계란, 갑각류" 
                className="w-full bg-transparent outline-none" 
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">하울이가 싫어하는 식재료가 있나요?</label>
            <div className="bg-gray-100 rounded-lg p-3">
              <input 
                type="text" 
                placeholder="ex. 당근, 피망" 
                className="w-full bg-transparent outline-none" 
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">하울이가 좋아하는 식재료가 있나요?</label>
            <div className="bg-gray-100 rounded-lg p-3">
              <input 
                type="text" 
                placeholder="ex. 고구마, 소고기" 
                className="w-full bg-transparent outline-none" 
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">관리 해야 할 질환이 있나요?</label>
            <div className="bg-gray-100 rounded-lg p-3">
              <input 
                type="text" 
                placeholder="ex. 천식, 알레르기 비염, 아토피 등" 
                className="w-full bg-transparent outline-none" 
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">참고 해야 할 특이사항 말씀해주세요!</label>
            <div className="bg-gray-100 rounded-lg p-3">
              <input 
                type="text" 
                placeholder="ex. 실내를 자주 해요, 밖에 자주 꺼요" 
                className="w-full bg-transparent outline-none" 
              />
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-2 mb-8">
            <div className="w-5 h-5 border border-blue-500 rounded-full flex-shrink-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-sm">이용약관을 읽고 이해했으며, 동의합니다.</p>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500 mr-2">
              <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
              <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
            </svg>
            <span className="text-gray-500">건강검진 결과지를 올려주세요! (선택)</span>
          </div>
        </div>
      </main>

      <footer className="p-4">
        <Link href="/dashboard">
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium">
            제출하기
          </button>
        </Link>
        <p className="text-xs text-gray-400 text-center mt-1">
          © insightnexus
        </p>
      </footer>
    </div>
  );
};

export default HealthInfo; 