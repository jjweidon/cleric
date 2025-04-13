import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const ChatPage: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="p-4 bg-white flex items-center justify-between border-b">
        <Link href="/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
        </Link>
        <h1 className="text-lg font-bold">육아, 매일이 고민이죠?</h1>
        <div className="w-6"></div> {/* 빈 공간으로 헤더 중앙 정렬 */}
      </header>

      <main className="flex-1 p-4 overflow-auto bg-gray-50">
        <div className="space-y-4">
          {/* 첫 번째 메시지 */}
          <div className="bg-gray-200 rounded-lg p-3 max-w-xs ml-auto mr-4 relative chat-bubble-right">
            <p className="text-sm">아이가 싫어하는 피망, 당근도 잘 먹게 하고 싫어요!</p>
            <span className="absolute right-[-20px] bottom-0">🥕</span>
          </div>
          
          {/* 두 번째 메시지 */}
          <div className="bg-gray-200 rounded-lg p-3 max-w-xs ml-auto mr-4 relative chat-bubble-right">
            <p className="text-sm">아이 하루에 대변을 너무 많이 봐요. 괜찮을까요?</p>
            <span className="absolute right-[-20px] bottom-0">💩</span>
          </div>
          
          {/* 세 번째 메시지 */}
          <div className="bg-gray-200 rounded-lg p-3 max-w-xs ml-auto mr-4 relative chat-bubble-right">
            <p className="text-sm">아이 수면 루틴은 어떻게 만들 수 있을까요?</p>
            <span className="absolute right-[-20px] bottom-0">😴</span>
          </div>
          
          {/* 응답 메시지 */}
          <div className="bg-gray-200 rounded-lg p-4 max-w-xs relative chat-bubble-left">
            <p className="text-sm mb-3">커뮤니티의 일반적인 답변이 아니라, 우리 아이 상황에 딱 맞는 해결책을 빠르게 찾을 수 없을까?</p>
            
            <div className="bg-white rounded-md p-2 text-xs space-y-1">
              <p className="font-bold">기본 식품</p> 
              <p>발육 상태</p>
              <p>알러지</p>
              <p>감진 결과</p>
            </div>
          </div>
          
          {/* 설명 메시지 */}
          <div className="bg-gray-200 rounded-lg p-4 max-w-xs relative chat-bubble-left mt-6">
            <p className="text-sm mb-4">클레릭은 아이의 건강 데이터를 바탕으로 맞춤 해결책을 제시해요!</p>
            
            <ul className="text-xs space-y-2">
              <li className="flex gap-1 items-start">
                <span className="text-blue-500 font-bold">•</span>
                <p>당근과 고구마 퓨레 부드럽고 소화가 잘 되는 데 도움이 돼요. 고구마는 섬유소도 풍부해요 (..)</p>
              </li>
              <li className="flex gap-1 items-start">
                <span className="text-blue-500 font-bold">•</span>
                <p>하울이가 당근을 싫어한다고 하셨니, 다른 채소와 섞어서 먹을 수 있는 방법을 알려드릴게요.</p>
              </li>
              <li className="flex gap-1 items-start">
                <span className="text-blue-500 font-bold">•</span>
                <p>하울이를 위한 이유식 레시피 당근과 고구마 퓨레 부드럽고 소화가 잘 되도록 고민은 섬유소도 풍부해요 (..)</p>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="p-4 border-t">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <button className="absolute left-3 top-3 text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
              </svg>
            </button>
            <input 
              type="text" 
              placeholder="무엇이든 물어보세요" 
              className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-3"
            />
          </div>
          <button className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center space-x-4 mt-4">
          <button className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
              <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-600">카카오톡으로 시작하기</span>
          </button>
        </div>
        
        <div className="flex justify-center space-x-4 mt-2">
          <button className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
              <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
            </svg>
            <span className="text-sm text-gray-600">구글 계정으로 시작하기</span>
          </button>
        </div>
        
        <div className="flex justify-center space-x-4 mt-2">
          <button className="flex items-center space-x-1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z" fill="#03C75A"/>
              <path d="M11.5347 10.4944L8.95404 6.66699H6.66699V13.334H8.95404V9.50699L11.5347 13.334H13.8347V6.66699H11.5347V10.4944Z" fill="white"/>
            </svg>
            <span className="text-sm text-gray-600">네이버 계정으로 시작하기</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatPage; 