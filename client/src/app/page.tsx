'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [animateLogin, setAnimateLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      // 로그인 화면 애니메이션 시작
      setTimeout(() => setAnimateLogin(true), 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      {showIntro ? (
        // Intro 페이지
        <div className="flex flex-col items-center justify-center min-h-screen w-full fixed inset-0 bg-primary text-white animate-fade-out">
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight mb-2">Cleric</h1>
            <p className="text-xl font-light opacity-90">아이 건강 데이터 기반 AI 육아 비서, 클레릭</p>
          </div>
          <footer className="absolute bottom-6">
            <p className="text-white/70 text-sm">© insightnexus</p>
          </footer>
        </div>
      ) : (
        // Sign in 페이지
        <div 
          className={`flex flex-col items-center justify-between min-h-screen w-full bg-white p-6 ${
            animateLogin ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* 앱 로고 */}
          <div className="w-full mt-6">
            <h1 className="text-3xl font-bold text-center text-primary mb-1">Cleric</h1>
            <p className="text-sm text-gray-500 text-center mb-6">아이와 함께하는 똑똑한 육아 도우미</p>
          </div>
          
          {/* 캐러셀 컴포넌트 */}
          <div className="w-full flex-1 flex items-center justify-center mb-6">
            <Carousel />
          </div>
          
          {/* 로그인 버튼 */}
          <div className="w-full max-w-md space-y-4 mb-8 mx-auto">
            <button className="btn btn-kakao h-12">
              <Image src="/icons/kakao.svg" width={22} height={22} alt="카카오 아이콘" className="mr-2 fill-current" />
              <span>카카오톡으로 시작하기</span>
            </button>
            <button className="btn btn-google h-12">
              <Image src="/icons/google.svg" width={22} height={22} alt="구글 아이콘" className="mr-2" />
              <span>구글 계정으로 시작하기</span>
            </button>
            <button className="btn btn-naver h-12">
              <Image src="/icons/naver.svg" width={22} height={22} alt="네이버 아이콘" className="mr-2" />
              <span>네이버 계정으로 시작하기</span>
            </button>
            
            <p className="text-xs text-gray-400 text-center mt-4">
              로그인 시 <a href="#" className="text-primary underline">이용약관</a>과 <a href="#" className="text-primary underline">개인정보처리방침</a>에 동의하게 됩니다
            </p>
          </div>
          
          <footer className="w-full text-center text-xs text-gray-400 mb-4">
            <p>© insightnexus</p>
          </footer>
        </div>
      )}
    </div>
  );
}

// 캐러셀 컴포넌트
function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: "육아, 매일이 고민이죠?",
      content: "아이가 싫어하는 피망, 당근도 잘 먹게 하고 싶어요!",
      emoji: "🥕",
      imageAlt: "당근 이모지"
    },
    {
      title: "아직도 지인이나 육아 커뮤니티에 문의하면서 해결하고 있나요?",
      content: "커뮤니티의 완벽한 답변이 아니라, 우리 아이 상황에 딱 맞는 해결책을 빠르게 확인할 수 없을까요?",
      image: "/images/height_measure.png",
      imageAlt: "키 측정 이미지"
    },
    {
      title: "클레릭은 아이의 건강 데이터를 바탕으로 맞춤 해결책을 제시해요!",
      content: "하올이의 건강 상태를 고려한 이유식을 추천할게요! 탈수와 설사를 겪고 있다면 수분 보충과 함께 소화가 잘 되는 음식을 준비하는 게 중요해요.",
      list: ["당근과 고구마 퓨레", "부드럽고 소화가 잘 돼 설사량 완화하는 데 도움"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    } else {
      setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* 캐러셀 트랙 */}
      <div className="relative overflow-hidden rounded-2xl shadow-card h-[calc(100vh-450px)] min-h-[350px] max-h-[450px]">
        <div 
          className="flex w-full h-full"
          style={{ 
            transform: `translateX(-${activeSlide * 100}%)`,
            transition: 'transform 500ms ease-in-out' 
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full min-w-full flex-shrink-0 h-full absolute left-0 top-0" style={{ transform: `translateX(${index * 100}%)` }}>
              <div className="bg-white bg-opacity-95 h-full w-full flex flex-col p-6 relative">
                <div className="flex items-center mb-1">
                  <div className="w-2 h-2 rounded-full bg-primary-light mr-2"></div>
                  <h2 className="text-xl font-bold text-gray-800 line-clamp-1">{slide.title}</h2>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3 overflow-y-auto">{slide.content}</p>
                
                <div className="flex-1 flex items-center justify-center">
                  {slide.emoji && (
                    <div className="text-7xl animate-pulse flex items-center justify-center">{slide.emoji}</div>
                  )}
                  
                  {slide.image && (
                    <div className="flex justify-center items-center w-full">
                      <div className="flex items-center justify-center w-full max-w-[220px] h-[160px] mx-auto">
                        <Image 
                          src={slide.image} 
                          width={160} 
                          height={160} 
                          alt={slide.imageAlt || "일러스트레이션"} 
                          className="object-contain max-w-full max-h-full rounded-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = "/images/height_measure.png";
                          }}
                        />
                      </div>
                    </div>
                  )}
                  
                  {slide.list && (
                    <div className="w-full flex items-center justify-center">
                      <div className="w-full max-w-[280px] overflow-y-auto py-2">
                        <ul className="w-full bg-blue-50 p-4 rounded-xl">
                          {slide.list.map((item, i) => (
                            <li key={i} className="flex items-start mb-2 text-sm text-gray-700">
                              <span className="mr-2 text-primary flex-shrink-0">•</span>
                              <span className="break-words">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 슬라이드 표시기 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`transition-all duration-300 ${
                idx === activeSlide 
                  ? "bg-primary w-6 h-2 rounded-md"
                  : "bg-gray-300 w-2 h-2 rounded-full"
              }`}
              onClick={() => handleSlideChange(idx)}
              aria-label={`슬라이드 ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* 좌우 스와이프 버튼 */}
        <button 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-sm opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => handleSwipe('right')}
          aria-label="이전 슬라이드"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </button>
        
        <button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-sm opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => handleSwipe('left')}
          aria-label="다음 슬라이드"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
