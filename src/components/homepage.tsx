import Header from "./Header";
import Footer from "./Footer";
import Sponsor from "./Sponsor";
import { siteConfig } from "../config/siteConfig";
import { Link } from "react-router-dom";

const HomePage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header navigation={siteConfig.navigation} />

      {/* 英雄區塊（手機板隱藏） */}
      <section
        id="home"
        className="relative min-h-screen bg-white hidden sm:block"
      >
        <div className="absolute inset-0">
          <img
            src="/banner.JPG"
            alt="背景"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/50"></div> */}
        </div>

        <div className="relative flex items-center justify-center min-h-screen text-center text-white px-4">
          <div className="max-w-4xl mx-auto" style={{ marginTop: "180px" }}>
            <img
              src="/logo_text.png"
              alt="聲音藏在 hidden sound"
              className="w-[180px] sm:w-[200px] md:w-[250px] lg:w-[250px] h-auto mb-6 mx-auto"
            />
            <p className="text-base sm:text-lg md:text-xl font-light mb-8 leading-relaxed px-2">
              {siteConfig.heroSubtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-12 sm:gap-12 justify-center mb-16"
              style={{ marginTop: "60px" }}
            >
              <button
                onClick={() => scrollToSection("#about")}
                className="bg-black text-white px-6 py-3 sm:px-8 text-sm font-medium tracking-wider hover:bg-gray-900 transition-colors shadow-lg shadow-black/30 rounded-sm"
              >
                about
              </button>
              <button
                onClick={() => scrollToSection("#concert")}
                className="bg-black text-white px-6 py-3 sm:px-8 text-sm font-medium tracking-wider hover:bg-gray-900 transition-colors shadow-lg shadow-black/30 rounded-sm"
              >
                concert
              </button>
              <button
                onClick={() => scrollToSection("#education")}
                className="bg-black text-white px-6 py-3 sm:px-8 text-sm font-medium tracking-wider hover:bg-gray-900 transition-colors shadow-lg shadow-black/30 rounded-sm"
              >
                education
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 關於部分-聲音藏在介紹 */}
      <section
        id="about"
        className="py-16 sm:pb-16 bg-gray-50"
        style={{ paddingTop: "6rem" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-light mb-3">
              <span className="font-normal">聲音藏在</span>
              <p className="text-xl sm:text-2xl font-light text-gray-600 italic mb-6">
                hidden sound
              </p>
            </h3>

            <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-6"></div>
            <p className="lg:text-lg text-gray-700 leading-relaxed mb-6 text-sm">
              邀請您一起在無聲的世界尋找聲響。
            </p>
            <p className="lg:text-lg text-gray-700 whitespace-pre-line leading-relaxed text-sm">
              {siteConfig.about.description.join("\n")}
            </p>
          </div>
        </div>
      </section>

      {/* 最新消息 */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* 圖片區塊 */}
            <div className="lg:col-span-6 group lg:order-2">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/news.jpg"
                  alt="最新消息"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
              </div>
            </div>

            {/* 文字區塊 */}
            <div className="lg:col-span-6 space-y-4 lg:order-1 mt-6 lg:mt-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                最新消息
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                2025年9月7日星期日下午
                <br />
                花漾展演空間（台北市中正區仁愛路一段17號10樓）
                <br />
                最新索票資訊即將公布，敬請持續關注我們！
              </p>
              <button
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/p/%E8%81%B2%E9%9F%B3%E8%97%8F%E5%9C%A8HiddenSound-61550576355070/",
                    "_blank"
                  );
                }}
                className="bg-[#6B4E9B] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#5a4287] hover:shadow-lg text-sm sm:text-base"
              >
                follow on FB
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/hiddensound",
                    "_blank"
                  );
                }}
                className="bg-[#6B4E9B] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#5a4287] hover:shadow-lg text-sm sm:text-base"
                style={{ marginLeft: "10px" }}
              >
                follow on IG
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div
            className="relative w-full max-w-4xl mx-auto"
            style={{ paddingBottom: "min(56.25%, 50vw)" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/Y1IKY-KvAgk?si=pAqXvl9qzIOOgrpl"
              title="聾聽共融公益演唱會"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* 12張照片 gallery*/}
      {/* <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              活動花絮
            </h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[1, 2, 3, 4].map((row) =>
              [1, 2, 3].map((col) => (
                <div
                  key={`${row}-${col}`}
                  className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={`/12pic_${row} (${col}).jpg`}
                    alt={`活動照片 ${row}-${col}`}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section> */}

      {/* Concert 預覽區塊 */}
      <section
        id="concert"
        className="py-8 sm:py-8 bg-white"
        style={{ paddingBottom: "0px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="space-y-12 sm:space-y-16">
            {/* 聾聽共融公益演唱會 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* 圖片區塊 */}
              <div className="lg:col-span-7 group lg:order-2 hidden sm:block">
                <div className="relative w-[10rem] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/202409_concert_homepage.JPG"
                    alt="聾聽共融公益演唱會"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
                </div>
              </div>

              {/* 文字區塊 */}
              <div className="lg:col-span-5 space-y-4 lg:order-1 mt-6 lg:mt-0 sm: mt-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  聾聽共融公益演唱會
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed pb-6">
                  2023年9月23日｜世界手語日 <br />
                  熊仔・鄭宜農・郭耀仁・ 牛暄文・ 蕭匡宇・ 廖曉彤 ． 丘安
                </p>
                <Link
                  to="/concert2"
                  className="bg-[#6B4E9B] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#5a4287] hover:shadow-lg text-sm sm:text-base"
                >
                  learn more
                </Link>
              </div>
            </div>

            {/* 音樂無差別 愛在手心 */}
            <div className="relative">
              {/* 滿版淡紫色背景 */}
              <div className="absolute inset-0 -mx-[50vw] left-1/2 right-1/2 bg-[rgb(242,239,246)] z-0"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center py-8 sm:py-12">
                {/* 圖片區塊 */}
                <div className="lg:col-span-7 group lg:order-1">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="/202403_concert_homepage.jpg"
                      alt="音樂無差別 愛在手心"
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
                  </div>
                </div>

                {/* 文字區塊 */}
                <div className="lg:col-span-5 space-y-4 lg:order-2 mt-6 lg:mt-0">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    音樂無差別 愛在手心
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed pb-6">
                    2023年3月3日｜世界聽力日 <br />
                    芒果醬・PNC・郭耀仁・ 牛暄文・ 蕭匡宇・ 廖曉彤
                  </p>
                  <Link
                    to="/concert1"
                    className="bg-[#6B4E9B] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#5a4287] hover:shadow-lg text-sm sm:text-base"
                    style={{ margin: "1rem" }}
                  >
                    learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Educcation 預覽區塊 */}
      <section
        id="education"
        className="py-16 sm:py-20 bg-white"
        style={{ paddingBottom: "0px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="space-y-12 sm:space-y-16">
            {/* 聽覺之外的聲音探索課 */}
            <div className="grid grid-cols-4 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* 圖片區塊 */}
              <div className="lg:col-span-7 group lg:order-2">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/edu_homepage.jpg"
                    alt="藝術教育課程"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
                </div>
              </div>

              {/* 文字區塊 */}
              <div className="lg:col-span-5 space-y-4 lg:order-1 mt-6 lg:mt-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  藝術教育
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed pb-6">
                  聽覺之外的聲音探索課 - 國家兩廳院廳院學計畫
                </p>
                <Link
                  to="/education"
                  className="bg-[#6B4E9B] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#5a4287] hover:shadow-lg text-sm sm:text-base"
                >
                  learn more
                </Link>
              </div>
            </div>

            {/* 聾人音樂體驗與深度訪談 */}
            <div className="relative">
              {/* 滿版淡紫色背景 */}
              <div className="absolute inset-0 -mx-[50vw] left-1/2 right-1/2 bg-[rgb(242,239,246)] z-0"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center py-8 sm:py-12 ">
                {/* 圖片區塊 */}
                <div className="lg:col-span-7 group lg:order-1">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="/聾人音樂體驗與深度訪談_homepage.jpg"
                      alt="聾人音樂體驗與深度訪談"
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
                  </div>
                </div>

                {/* 文字區塊 */}
                <div className="lg:col-span-5 space-y-4 lg:order-2 mt-6 lg:mt-0">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    聾人音樂體驗與深度訪談
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed pb-6">
                    受訪聾人｜陳絹雲・廖港生・許美琪・陳康
                    <br />
                    EP1 聾人音樂體驗工作坊
                    <br />
                    EP2 獨一無二的歌聲 聾人也能唱歌
                    <br />
                    EP3 我們聽音樂 我們畫
                    <br />
                    EP4 音樂初體驗
                    <br />
                  </p>
                  <Link
                    to="/concert"
                    className="bg-[#6B4E9B] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#5a4287] hover:shadow-lg text-sm sm:text-base"
                  >
                    learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Sponsor />
      {/* 底部圖片區塊 */}
      <section className="relative w-full h-[40vh] sm:h-[50vh]">
        <img
          src="/buttom_pic2.jpg"
          alt="底部圖片"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <p
            className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl italic font-light text-center leading-relaxed"
            style={{ marginTop: "80px" }}
          >
            「 聾人如何在無聲的世界也能享受音樂？ 」
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
