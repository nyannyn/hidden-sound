import { Youtube, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-10">
        <footer className="py-2">
          {/* 主要內容區域 */}
          <div className="flex flex-col">
            <div className="w-full">
              {/* 間距 */}
              <div className="h-5" aria-hidden="true"></div>

              {/* 主要內容行 */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
                {/* 左側：標題和描述 */}
                <div className="lg:w-2/5">
                  <img
                    src="/logo_text.png"
                    alt="聲音藏在 hidden sound"
                    className="w-[150px] sm:w-[150px] md:w-[200px] lg:w-[200px] h-auto mb-4"
                  />

                  {/* 間距 */}
                  <div className="h-8" aria-hidden="true"></div>

                  <p className="text-white/90 leading-relaxed mb-4">
                    我們相信，透過藝術與共融的實踐，能促進社會對聾人文化的理解，增進彼此溝通與尊重，進而提升聾人的身分認同與自信。
                  </p>

                  <p className="text-white/70 italic text-sm">
                    聯絡我們: hiddensoundproject@gmail.com
                  </p>
                  <p className="text-white/70 italic text-sm">
                    地址: 台北市大安區仁愛路三段99號 (社會創新實驗中心)
                  </p>
                </div>

                {/* 中間空白 */}
                <div className="hidden lg:block lg:w-1/5"></div>

                {/* 右側：社交媒體 */}
                <div className="lg:w-2/5 flex justify-start lg:justify-end">
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/p/%E8%81%B2%E9%9F%B3%E8%97%8F%E5%9C%A8HiddenSound-61550576355070/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                      title="Facebook"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>

                    <a
                      href="https://www.instagram.com/hiddensoundtw/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                      title="Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>

                    <a
                      href="https://www.youtube.com/@hiddensound106"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                      title="YouTube"
                    >
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 底部導航 */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="w-full">
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  contact
                </Link>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  about
                </Link>
                <Link
                  to="/concert2"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  concert
                </Link>
                <Link
                  to="/education"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  education
                </Link>
                <a
                  href="https://www.youtube.com/@hiddensound106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  videos
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
