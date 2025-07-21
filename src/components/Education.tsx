import Header from "./Header";
import Footer from "./Footer";
import { siteConfig } from "../config/siteConfig";
import BookmarkCard from "./News";

const Education = () => {
  // 新聞數據
  const newsItems = [
    {
      url: "https://npac-ntch.org/media-center/media-news/10623-%E5%9C%8B%E5%AE%B6%E5%85%A9%E5%BB%B3%E9%99%A2%E9%82%80%E8%AB%8B%E5%95%9F%E8%81%B0%E5%AD%B8%E7%94%9F%E6%84%9F%E5%8F%97%E9%9F%B3%E6%A8%82%20%202024%E5%BB%93%E9%99%A2%E5%AD%B8%E8%A8%88%E7%95%AB%E9%AB%94%E7%8F%BE%E5%85%B1%E8%9E%8D%E7%90%86%E5%BF%B5%20%E4%BA%BA%E4%BA%BA%E5%8A%87%E5%A0%B4%20%20%E4%BB%A5%E8%87%AA%E5%B7%B1%E7%9A%84%E6%96%B9%E5%BC%8F%E6%84%9F%E5%8F%97%E8%88%87%E5%88%86%E4%BA%AB%E9%9F%B3%E6%A8%82",
      title:
        "國家兩廳院邀請啟聰學生感受音樂 2024廳院學計畫體現共融理念 人人劇場以自己的方式感受與分享音樂",
      description:
        "國家兩廳院攜手啟聰學校，透過2024廳院學計畫，讓每個孩子都能以自己的方式感受與分享音樂，實踐藝術共融的理念。",
      domain: "npac-ntch.org",
      category: "新聞報導",
    },
    {
      url: "https://www.youtube.com/watch?v=0ZeK0D6vcjk",
      title: "兩廳院「廳院學計畫」和北聰合作 推藝術入校 | 20240603公視手語新聞",
      description:
        "公視手語新聞報導，兩廳院攜手台北市立啟聰學校，推動藝術教育進入校園，讓聽障學生也能無障礙參與藝術體驗。",
      domain: "youtube.com",
      category: "影音新聞",
    },
    {
      url: "https://udn.com/news/story/7240/8126465",
      title: "工研院攜手兩廳院 以科技助力聽障生無礙感受音樂魅力 | 聯合新聞網",
      description:
        "工研院與國家兩廳院合作，運用科技輔具，協助聽障學生跨越障礙，親身感受音樂的美好與魅力。",
      domain: "udn.com",
      category: "新聞報導",
    },
    {
      url: "https://npac-ntch.org/discover/voice/11564-%E8%81%BD%E8%A6%BA%E4%B9%8B%E5%A4%96%E7%9A%84%E8%81%B2%E9%9F%B3%E6%8E%A2%E7%B4%A2%E8%AA%B2",
      title: "聽覺之外的聲音探索課 | 國家兩廳院",
      description:
        "國家兩廳院「聽覺之外的聲音探索課」，帶領學生用不同感官體驗聲音，開啟多元藝術教育的可能。",
      domain: "npac-ntch.org",
      category: "藝術教育",
    },
    {
      url: "https://npac-ntch.org/discover/voice/11588-%E7%84%A1%E8%AB%96%E7%94%9F%E4%BE%86%E5%A6%82%E4%BD%95%20%E4%BA%BA%E4%BA%BA%E7%9A%86%E6%9C%89%E4%BA%AB%E5%8F%97%E8%97%9D%E8%A1%93%E7%9A%84%E6%AC%8A%E5%88%A9",
      title:
        "【觀劇指南】菲利普．肯恩《人間樂園》—— 前往地獄之旅? | 國家兩廳院",
      description:
        "國家兩廳院專文，探討「人人皆有享受藝術的權利」，推動無障礙劇場與共融藝術的實踐。",
      domain: "npac-ntch.org",
      category: "專欄文章",
    },
    {
      url: "https://www.mirrorvoice.com.tw/podcasts/192/4400",
      title:
        "EP15｜聾人也可以享受音樂？原來可以這樣「聽」！ ft.王萱儀、廖曉彤 - 鏡好聽Mirror Voice",
      description:
        "Podcast節目邀請聽障者與手語藝術家，分享如何用不同方式感受音樂，打破對「聽」的想像。",
      domain: "mirrorvoice.com.tw",
      category: "Podcast",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Header navigation={siteConfig.navigation} />

      {/* 頁面標題 */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">藝術教育</h1>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf1sHv5HWk1lPQu3_gtDWpZ3KvDnszLnX2-rANds5iYUukBUg/viewform"
              target="_blank"
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
      {/* 相關新聞連結區塊 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              相關新聞報導
            </h2>
            <div className="w-16 h-1 bg-[#6B4E9B] mx-auto mb-4"></div>
          </div>

          <div className="space-y-0">
            {newsItems.map((item, index) => (
              <BookmarkCard
                key={index}
                url={item.url}
                title={item.title}
                description={item.description}
                domain={item.domain}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
