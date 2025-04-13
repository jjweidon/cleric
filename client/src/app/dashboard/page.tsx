import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const Dashboard: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="p-4 bg-white flex items-center justify-between shadow-sm">
        <div className="flex items-center">
          <h1 className="text-2xl text-blue-500 font-bold">Cleric</h1>
          <p className="ml-2 text-sm text-gray-500">하울이의 AI 육아 비서, 클레릭</p>
        </div>
        <button className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </header>

      <main className="flex-1 p-4">
        <Link href="/chat">
          <div className="bg-gray-100 rounded-xl p-4 mb-6">
            <div className="flex">
              <div className="flex-1">
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {["아이 행동", "아이 건강", "아이 식단", "그 외 질문"].map((item, index) => (
                    <button 
                      key={index}
                      className={`rounded-full text-xs py-1 px-2 ${index === 0 ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-200 text-gray-600'}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="bg-white rounded-xl p-3 mb-3">
                  <p className="text-sm mb-1">육아 질문이라면, 무엇이든 물어보세요 😊</p>
                </div>
                <p className="text-xs text-gray-500">하울이의 건강, 성장 데이터 기반으로 맞게 답변 제공해드릴게요.</p>
              </div>
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-pink-100 rounded-lg p-3 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-pink-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <p className="text-xs text-center leading-tight">성장 및수 영양체 측정 아이 건강 상태에 적합한 필수 영양제 추천해드릴게요</p>
          </div>

          <div className="bg-green-100 rounded-lg p-3 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
              </svg>
            </div>
            <p className="text-xs text-center leading-tight">당근 이유식 레시피 아이 알러지 고려해서 맞춤형 이유식 레시피 엄마와 저녁에 포핀 이유식 만들어요</p>
          </div>

          <div className="bg-purple-100 rounded-lg p-3 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center mb-1">
              <span className="text-purple-600">💩</span>
            </div>
            <p className="text-xs text-center leading-tight">소변 변색 문제로 요즘 변이 노란데 심각한 건 아니죠? 매번 약국 가기 귀찮아요</p>
          </div>
        </div>
      </main>

      <footer className="p-4 border-t">
        <p className="text-xs text-gray-400 text-center">
          © insightnexus
        </p>
      </footer>
    </div>
  );
};

export default Dashboard; 