import Header from "./Header";
import Footer from "./Footer";
import { siteConfig } from "../config/siteConfig";
import { useState } from "react";
import {
  Mail,
  Youtube,
  Instagram,
  Facebook,
  MapPin,
  CheckCircle,
  // ExternalLink,
  Copy,
} from "lucide-react";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hiddensoundproject@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      console.log("複製失敗");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header navigation={siteConfig.navigation} />

      {/* 頁面標題 */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">聯絡我們</h1>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
          </div>
        </div>
      </section>

      {/* 聯絡資訊 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左側：聯絡方式 */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                與我們聯繫
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#6B4E9B] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      電子郵件
                    </h3>
                    <div className="flex items-center space-x-2">
                      <a
                        href="mailto:hiddensoundproject@gmail.com"
                        className="text-[#6B4E9B] hover:text-[#5a4287] transition-colors"
                      >
                        hiddensoundproject@gmail.com
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                        title="複製郵件地址"
                      >
                        <Copy className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                    {copiedEmail && (
                      <span className="text-sm text-green-600 flex items-center mt-1">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        已複製到剪貼簿
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#6B4E9B] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      地址
                    </h3>
                    <a
                      href="https://share.google/v9m6jTdZNsyLbVzrd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#6B4E9B] transition-colors"
                    >
                      台北市大安區仁愛路三段99號 (社會創新實驗中心)
                    </a>
                  </div>
                </div>
              </div>

              {/* 社交媒體 */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  追蹤我們
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.youtube.com/@hiddensound106"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Youtube className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/hiddensoundtw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.facebook.com/p/%E8%81%B2%E9%9F%B3%E8%97%8F%E5%9C%A8HiddenSound-61550576355070/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* 右側：聯絡方式 */}
            {/* <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                發送訊息
              </h3>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#6B4E9B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    線上聯絡表單
                  </h4>
                  <p className="text-gray-600 mb-6">
                    請使用我們的 Google 表單聯絡我們，我們會盡快回覆您的訊息
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSehZ7Wg_WVqAYtdadZEZF1mZLk0nNUo2poOA-subE86FFn5JA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#6B4E9B] text-white py-3 px-8 rounded-lg font-medium hover:bg-[#5a4287] transition-colors text-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>填寫聯絡表單</span>
                  </a>
                </div>

                <div className="flex items-center my-8">
                  <div className="flex-1 border-t border-gray-300"></div>
                  <span className="px-4 text-sm text-gray-500">或</span>
                  <div className="flex-1 border-t border-gray-300"></div>
                </div>

                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    直接寄信聯絡
                  </h4>
                  <a
                    href="mailto:hiddensoundproject@gmail.com"
                    className="inline-flex items-center space-x-2 border-2 border-[#6B4E9B] text-[#6B4E9B] py-2 px-6 rounded-lg font-medium hover:bg-[#6B4E9B] hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>hiddensoundproject@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>建議使用：</strong> Google
                  表單讓我們能更有效率地處理您的詢問，並確保不會遺漏任何重要資訊。
                </p>
              </div>
            </div> */}

            {/* 圖片區塊 */}
            <div className="rounded-lg">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/contect.jpg"
                  alt="團隊合照"
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 合作機會 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">合作機會</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 企業合作 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6B4E9B] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                企業公益合作
              </h3>
              <p className="text-gray-600 mb-6">
                攜手舉辦聾聽共融活動
                <br />
                實現企業責任，共創社會影響力
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-mono tracking-wide">
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 公益演唱會贊助支持
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 教育課程贊助支持
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 企業志工參與活動
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 客製化共融課程
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 媒體曝光與公關效益
                  </span>
                </li>
              </ul>
              <a
                href="https://forms.gle/TsyYBHJVh6sJpoTb9"
                className="inline-block bg-[#6B4E9B] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#5a4287] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                洽詢合作
              </a>
            </div>

            {/* 人才招募 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6B4E9B] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h2.5l6 8h2L7 11.5 15.5 9L16 4.5l1.5 1.5L20 4l-2-2L16.5 4l-1 4.5L8 10.5V18H4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                加入我們團隊
              </h3>
              <p className="text-gray-600 mb-6">
                尋找充滿熱忱的專業人才
                <br />
                一起推動多元共融的社會影響
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-mono tracking-wide">
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 視覺設計、影音剪輯
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 數位行銷
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 專欄寫作、內容企劃
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 專案管理、藝術行政
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 手語推廣、志工
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 長期專案合作夥伴
                  </span>
                </li>
              </ul>
              <a
                href="https://forms.gle/YM67PU3YmdRA3nT19"
                className="inline-block bg-[#6B4E9B] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#5a4287] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                成為夥伴
              </a>
            </div>

            {/* 講座／手語表演／課程／媒體洽談 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6B4E9B] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                講座/手語表演/課程/媒體洽談
              </h3>
              <p className="text-gray-600 mb-6">
                邀請共同成為聲音藏在
                <br />
                攜手創造表演藝術的可能性
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-mono tracking-wide">
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 手語表演合作
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 主題講座、活動
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 藝術教育課程
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 實驗性共融活動
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="inline-block w-40 text-left">
                    • 媒體專訪、合作報導
                  </span>
                </li>
              </ul>
              <a
                href="https://forms.gle/aHzpVGjMKbfcoTYdA"
                className="inline-block bg-[#6B4E9B] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#5a4287] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                我要邀約
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
