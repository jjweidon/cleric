import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const PhotoUpload: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="p-4 flex items-center">
        <Link href="/onboarding/growth" className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
        </Link>
        <div className="absolute right-4 text-gray-800 font-medium">건너뛰기</div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center mb-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-3">하울이의 사진을 등록해주세요!</h1>
          <p className="text-gray-500 text-sm mb-8">사진을 등록하지 않아도 기본 이미지로 적용됩니다.</p>
          
          <div className="rounded-full bg-gray-100 w-48 h-48 mx-auto flex items-center justify-center mb-4 relative overflow-hidden">
            <Image 
              src="/images/baby_reading.jpg" 
              alt="아기 사진" 
              width={200} 
              height={200} 
              className="object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black/70 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-4">
        <Link href="/onboarding/health">
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium">
            다음 페이지
          </button>
        </Link>
        <p className="text-xs text-gray-400 text-center mt-1">
          © insightnexus
        </p>
      </footer>
    </div>
  );
};

export default PhotoUpload; 