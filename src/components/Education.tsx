import Header from "./Header";
import Footer from "./Footer";
import { siteConfig } from "../config/siteConfig";

const Education = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header navigation={siteConfig.navigation} />

      {/* 頁面標題 */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">藝術教育</h1>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              聽覺之外的聲音探索課 - 開啟聾聽共融的藝術教育之門
            </p>
          </div>
        </div>
      </section>

      {/* 嵌入文章 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className="relative"
              style={{ paddingBottom: "60%", minHeight: "400px" }}
            >
              <iframe
                src="https://npac-ntch.org/discover/voice/11564-%E8%81%BD%E8%A6%BA%E4%B9%8B%E5%A4%96%E7%9A%84%E8%81%B2%E9%9F%B3%E6%8E%A2%E7%B4%A2%E8%AA%B2"
                frameBorder="0"
                allowFullScreen
                sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin allow-storage-access-by-user-activation allow-popups-to-escape-sandbox"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                style={{ backgroundColor: "white" }}
                title="聽覺之外的聲音探索課"
              />
            </div>
            <div className="p-4 bg-gray-100 border-t">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6.636a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5v-1z" />
                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                  </svg>
                  <span className="text-sm text-gray-600">
                    國家兩廳院 | 聽覺之外的聲音探索課
                  </span>
                </div>
                <a
                  href="https://npac-ntch.org/discover/voice/11564-%E8%81%BD%E8%A6%BA%E4%B9%8B%E5%A4%96%E7%9A%84%E8%81%B2%E9%9F%B3%E6%8E%A2%E7%B4%A2%E8%AA%B2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-sm text-[#6B4E9B] hover:text-[#5a4287] transition-colors duration-200"
                >
                  <span>原文連結</span>
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6.636a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5v-1z" />
                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主要內容 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <div className="flex items-start mb-6">
              <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium mr-4 flex-shrink-0">
                2024
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                國家兩廳院廳院學計畫
              </h3>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
              <p className="text-lg mb-6">
                2024年，「國家兩廳院廳院學計畫」首度與台北啟聰學校合作藝術入校課程，由廖曉彤老師為高一學生設計6堂課及一場專屬音樂會。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  課程特色
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>6堂專為聾人學生設計的藝術探索課程</li>
                  <li>結合手語與音樂的創新教學方式</li>
                  <li>學生原創詩作改編為手語詩演出</li>
                  <li>專屬音樂會展現學習成果</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 課程內容詳述 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                課程目標
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#6B4E9B] mr-2">•</span>
                  培養聾人學生的藝術表達能力
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B4E9B] mr-2">•</span>
                  探索手語與音樂的結合可能性
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B4E9B] mr-2">•</span>
                  建立聾聽共融的學習環境
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B4E9B] mr-2">•</span>
                  提升學生的自信心與創造力
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                教學方式
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#6B4E9B] mr-2">•</span>
                  視覺化音樂教學法
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B4E9B] mr-2">•</span>
                  震動感知體驗
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B4E9B] mr-2">•</span>
                  手語詩創作與演出
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B4E9B] mr-2">•</span>
                  小組合作學習
                </li>
              </ul>
            </div>
          </div>

          {/* 成果展示 */}
          <div className="bg-[#6B4E9B] text-white p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold mb-6">學習成果</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6</div>
                <p className="text-sm">堂課程</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">20+</div>
                <p className="text-sm">參與學生</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1</div>
                <p className="text-sm">專屬音樂會</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 聯絡資訊 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            想了解更多藝術教育課程？
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            歡迎聯絡我們，一起探索聽覺之外的聲音世界
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hiddensoundproject@gmail.com"
              className="bg-[#6B4E9B] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#5a4287] hover:shadow-lg"
            >
              聯絡我們
            </a>
            <a
              href="https://www.youtube.com/@hiddensound106"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#6B4E9B] text-[#6B4E9B] px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#6B4E9B] hover:text-white"
            >
              觀看影片
            </a>
          </div>
        </div>
      </section>

      <Footer title={siteConfig.title} />
    </div>
  );
};

export default Education;
