'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [animateLogin, setAnimateLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      // 로그인 화면 애니메이션 시작
      setTimeout(() => setAnimateLogin(true), 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoginClick = () => {
    // 실제 로그인 API가 구현되면 여기서 호출
    // 현재는 바로 온보딩 페이지로 이동
    router.push('/onboarding');
  };

  return (
    <div className="flex flex-col min-h-[100vh] bg-white">
      {showIntro ? (
        // Intro 페이지
        <div className="flex flex-col items-center justify-center min-h-screen w-full fixed inset-0 bg-primary text-white animate-fade-out">
          <div className="text-center">
            <div className="relative w-[120px] h-[36px] sm:w-[200px] sm:h-[60px] mx-auto mb-2">
              <Image
                src="/logos/logo_txt_white.webp"
                alt="Cleric"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-xs sm:text-xl font-light opacity-90">아이 건강 데이터 기반 AI 육아 비서, 클레릭</p>
          </div>
          <footer className="absolute bottom-6">
            <p className="text-white/70 text-sm">© insightnexus</p>
          </footer>
        </div>
      ) : (
        // Sign in 페이지
        <div 
          className={`flex flex-col min-h-[100vh] w-full bg-white p-3 md:p-4 lg:p-6 ${
            animateLogin ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <main className="flex-1 flex flex-col items-center justify-between h-full">
            {/* 앱 로고 */}
            <div className="w-full mt-2 md:mt-4">
              <div className="relative w-[120px] h-[36px] mx-auto mb-0 md:mb-1">
                <Image
                  src="/logos/logo_txt.webp"
                  alt="Cleric"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-xs md:text-sm text-gray-500 text-center mb-2 md:mb-4">아이 건강 데이터 기반 AI 육아 비서</p>
            </div>
            
            {/* 캐러셀 컴포넌트 */}
            <div className="w-full flex-1 flex items-center justify-center my-1 md:my-2">
              <Carousel />
            </div>
            
            {/* 로그인 버튼 */}
            <div className="w-full max-w-md flex flex-col items-center space-y-2 md:space-y-3 mt-1 md:mt-2 mb-2 md:mb-4">
              <button 
                className="btn btn-kakao"
                onClick={handleLoginClick}
              >
                <Image src="/icons/kakao.svg" width={20} height={20} alt="카카오 아이콘" className="mr-2 fill-current" />
                <span>카카오로 시작하기</span>
              </button>
              <button 
                className="btn btn-google"
                onClick={handleLoginClick}
              >
                <Image src="/icons/google.svg" width={20} height={20} alt="구글 아이콘" className="mr-2" />
                <span>구글로 시작하기</span>
              </button>
              <button 
                className="btn btn-naver"
                onClick={handleLoginClick}
              >
                <Image src="/icons/naver.svg" width={20} height={20} alt="네이버 아이콘" className="mr-2" />
                <span>네이버로 시작하기</span>
              </button>
              
              <p className="text-[10px] md:text-xs text-gray-400 text-center mt-2">
                로그인 시 <a href="#" className="text-primary underline">이용약관</a>과 <a href="#" className="text-primary underline">개인정보처리방침</a>에 동의하게 됩니다
              </p>
            </div>
          </main>
          
          <Footer />
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
      type: "conversations",
      conversations: [
        {
          message: "아이가 싫어하는 피망, 당근도 잘 먹게 하고 싶어요!",
          emoji: "/icons/carrot_emoji.svg",
          emojiAlt: "당근 이모지",
          position: "left"
        },
        {
          message: "아이가 하루에 대변을 너무 많이 봐요. 괜찮을까요?",
          emoji: "/icons/poo_emoji.svg",
          emojiAlt: "대변 이모지",
          position: "right"
        },
        {
          message: "아이 수면 루틴은 어떻게 만들 수 있을까요?",
          emoji: "/icons/sleeping_emoji.svg",
          emojiAlt: "수면 이모지",
          position: "left"
        }
      ]
    },
    {
      title: "아직도 지인이나 육아 커뮤니티에 문의하면서 해결하고 있나요?",
      type: "illustration",
      image: "/images/family_illustration.webp",
      imageAlt: "가족 일러스트레이션",
      message: "커뮤니티의 일반적인 답변이 아니라, 우리 아이 상황에 딱 맞는 해결책을 빠르게 확인 할 수는 없을까?",
      thoughts: ["기호 식품", "발육 상태", "알러지", "검진 결과"]
    },
    {
      title: "클레릭은 아이의 건강 데이터를 바탕으로 맞춤 해결책을 제시해요!",
      type: "response",
      response: [
        "하율이의 건강 상태를 고려한 이유식을 추천할게요! 탈수와 설사를 겪고 있다면 수분 보충과 함께 소화가 잘 되는 음식을 준비하는 게 중요해요.",
        "하율이가 당근을 싫어한다고 하셨으니, 다른 재료와 섞어서 먹을 수 있는 방법을 알려드릴게요.",
        "하율이를 위한 이유식 레시피",
        "• 당근과 고구마 퓌레 - 부드럽고 소화가 잘 돼 설사를 완화하는 데 도움이 돼요. 고구마는 섬유질도 풍부해요 (..)"
      ],
      highlights: ["건강 상태", "탈수와 설사", "소화가 잘 되는", "당근을 싫어한다고", "이유식 레시피", "섬유질"]
    }
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveSlide((prev) => (prev + 1) % slides.length);
  //   }, 4000);
    
  //   return () => clearInterval(interval);
  // }, [slides.length]);

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

  const renderTitle = (title: string) => (
    <div className="flex items-center justify-center mb-2 md:mb-5 text-center">
      <span className="text-primary font-bold text-lg md:text-xl">|</span>
      <h2 className="text-base md:text-xl font-bold text-gray-800 px-1 md:px-2 text-center mx-1 md:mx-2 break-keep">{title}</h2>
      <span className="text-primary font-bold text-lg md:text-xl">|</span>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'conversations':
        return (
          <div className="flex flex-col w-full space-y-2 md:space-y-4">
            {slide.conversations.map((conv: any, i: number) => (
              <div 
                key={i} 
                className={`flex ${conv.position === 'left' ? 'justify-start' : 'justify-end'} items-center gap-1 md:gap-2 w-full`}
              >
                {conv.position === 'right' && (
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10">
                    <Image 
                      src={conv.emoji} 
                      width={32} 
                      height={32} 
                      alt={conv.emojiAlt}
                      className="object-contain w-full h-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        if (conv.emojiAlt === "당근 이모지") target.src = "/icons/carrot.png";
                        else if (conv.emojiAlt === "대변 이모지") target.src = "/icons/poo.png";
                        else if (conv.emojiAlt === "수면 이모지") target.src = "/icons/sleeping.png";
                      }}
                    />
                  </div>
                )}
                <div className={`bg-gray-200 p-2 md:p-3 rounded-lg max-w-[70%] relative`}>
                  <p className="text-xs md:text-sm">{conv.message}</p>
                </div>
                {conv.position === 'left' && (
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 z-10">
                    <Image 
                      src={conv.emoji} 
                      width={32} 
                      height={32} 
                      alt={conv.emojiAlt}
                      className="object-contain w-full h-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        if (conv.emojiAlt === "당근 이모지") target.src = "/icons/carrot.png";
                        else if (conv.emojiAlt === "대변 이모지") target.src = "/icons/poo.png";
                        else if (conv.emojiAlt === "수면 이모지") target.src = "/icons/sleeping.png";
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'illustration':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className="w-full mx-auto relative max-w-[100px] xs:max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]">
              <Image
                src={slide.image}
                width={80}
                height={48}
                alt={slide.imageAlt}
                className="object-contain mx-auto w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/images/height_measure.png";
                }}
              />
              
              {/* 말풍선 */}
              <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 bg-gray-200 p-1.5 md:p-2.5 rounded-lg w-[100px] xs:w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] relative">
                <p className="text-[9px] sm:text-[10px] md:text-xs">{slide.message}</p>
              </div>
              
              {/* 생각 풍선 */}
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-gray-100 p-1.5 md:p-2.5 rounded-3xl w-[70px] xs:w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] border border-gray-200">
                <div className="flex flex-wrap justify-center gap-0.5 md:gap-1.5">
                  {slide.thoughts.map((thought: string, i: number) => (
                    <span 
                      key={i} 
                      className="text-[8px] sm:text-[9px] md:text-[10px] inline-block"
                      style={{
                        fontSize: `${0.35 + (i+0.1) * 0.08}rem`,
                        transform: `rotate(${(i+0.5) * 5 - 10}deg)`,
                        opacity: 0.7 + (i+0.1) * 0.3,
                        position: 'relative',
                        left: `${(i % 2) * 6 - 3}px`,
                        top: `${(i % 3) * 3 - 3}px`,
                        margin: '1px'
                      }}
                    >
                      {thought}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'response':
        return (
          <div className="w-full flex-col justify-center px-1 md:px-2">
            <div className="bg-gray-200 p-1.5 md:p-3 rounded-lg w-full max-w-[80%] md:max-w-[85%] lg:max-w-[90%] relative">
              {slide.response.map((line: string, i: number) => {
                if (line.startsWith('•')) {
                  return (
                    <div key={i} className="flex items-start mt-0.5">
                      <span className="text-primary font-bold mr-0.5">•</span>
                      <p className="text-[9px] sm:text-[10px] md:text-xs">{highlightText(line.substring(1).trim(), slide.highlights)}</p>
                    </div>
                  );
                }
                
                if (line.includes('이유식 레시피')) {
                  return <p key={i} className="text-[9px] sm:text-[10px] md:text-xs font-bold text-primary mt-1.5 mb-0.5">{line}</p>;
                }
                
                return <p key={i} className="text-[9px] sm:text-[10px] md:text-xs mb-1.5">{highlightText(line, slide.highlights)}</p>;
              })}
            </div>
            <div className="mt-1.5 md:mt-2.5 text-right">
              <span className="text-primary font-bold text-sm md:text-lg">Cleric</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const highlightText = (text: string, highlights: string[]) => {
    let result = text;
    
    highlights.forEach(highlight => {
      const regex = new RegExp(`(${highlight})`, 'gi');
      result = result.replace(regex, '<span class="text-primary font-medium">$1</span>');
    });
    
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* 캐러셀 트랙 */}
      <div className="relative overflow-hidden rounded-2xl shadow-card h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] min-h-[200px] max-h-[500px]">
        <div 
          className="flex w-full h-full"
          style={{ 
            transform: `translateX(-${activeSlide * 100}%)`,
            transition: 'transform 500ms ease-in-out' 
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full min-w-full flex-shrink-0 h-full absolute left-0 top-0" style={{ transform: `translateX(${index * 100}%)` }}>
              <div className="bg-white bg-opacity-95 h-full w-full flex flex-col p-3 md:p-6 relative">
                {renderTitle(slide.title)}
                <div className="flex-1 flex items-center justify-center px-1 md:px-4 lg:px-6">
                  {renderSlideContent(slide)}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 슬라이드 표시기 */}
        <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`transition-all duration-300 ${
                idx === activeSlide 
                  ? "bg-primary w-4 h-1.5 md:w-6 md:h-2 rounded-md"
                  : "bg-gray-300 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
              }`}
              onClick={() => handleSlideChange(idx)}
              aria-label={`슬라이드 ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* 좌우 스와이프 버튼 */}
        <button 
          className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-white/80 rounded-full flex items-center justify-center shadow-sm opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => handleSwipe('right')}
          aria-label="이전 슬라이드"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-gray-600">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </button>
        
        <button 
          className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-white/80 rounded-full flex items-center justify-center shadow-sm opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => handleSwipe('left')}
          aria-label="다음 슬라이드"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-gray-600">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
