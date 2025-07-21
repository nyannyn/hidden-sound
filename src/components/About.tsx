import Header from "./Header";
import Footer from "./Footer";
import { siteConfig } from "../config/siteConfig";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header navigation={siteConfig.navigation} />

      {/* 頁面標題 */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">關於我們</h1>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
          </div>
        </div>
      </section>

      {/* 使命願景 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">我們的使命</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            我們相信，透過藝術與共融的實踐，能促進社會對聾人文化的理解，增進彼此溝通與尊重，進而提升聾人的身分認同與自信。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6B4E9B] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                共融藝術
              </h3>
              <p className="text-gray-600">
                創造聾聽共融的藝術體驗，讓音樂無障礙
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#6B4E9B] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                教育推廣
              </h3>
              <p className="text-gray-600">
                透過專業課程，推廣聾人文化與手語藝術
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#6B4E9B] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h2.5l6 8h2L7 11.5 15.5 9L16 4.5l1.5 1.5L20 4l-2-2L16.5 4l-1 4.5L8 10.5V18H4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                社會影響
              </h3>
              <p className="text-gray-600">促進社會對聾人族群的理解與尊重</p>
            </div>
          </div>
        </div>
      </section>

      {/* 創辦人介紹 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              創辦人介紹
            </h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">廖曉彤</h3>
              <p className="text-lg text-[#6B4E9B] mb-6">
                聲音藏在創辦人｜聾人子女（CODA）
              </p>

              <div className="space-y-4 text-gray-700">
                <p>
                  聾人不是一種限制，而是一種獨特的身分認同，
                  <br />
                  它也賦予了我們重新詮釋聲音的可能。
                </p>
                <p>
                  演員，
                  <br />
                  同時為 CODA（Child of Deaf Adults 聾人子女）身分。
                </p>
                <p>
                  從小在聾人家庭中長大，與父母皆以手語溝通，
                  <br />
                  身為聾人與聽人世界的橋樑，
                </p>
                <p>
                  長大之後，發現手語是生命中獨特的印記，
                  <br />
                  就像無聲的樂器，能幫助自己發出聲音。
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto mb-4">
                <img
                  src="/廖曉彤.jpg"
                  alt="廖曉彤照片"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 合作夥伴：牛暄文｜手語表演者/手語諮詢顧問 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              合作夥伴介紹
            </h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">牛暄文</h3>
              <p className="text-lg text-[#6B4E9B] mb-6">
                手語表演者｜手語諮詢顧問
              </p>
              <div className="space-y-4 text-gray-700">
                <p>
                  「對語言有所認同，
                  <br />
                  讓我能夠接受自己的身分，
                  <br />
                  手語讓我成為一個完整的人。」
                </p>
                <p>公共電視臺手語新聞主播兼記者</p>
                <p>中華民國身障聯盟理事長</p>
                <p>行政院身心障礙權益推動小組委員</p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src="/手語表演者-牛暄文.JPG"
                  alt="牛暄文照片"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 合作夥伴：蕭匡宇｜手語表演者/手語諮詢顧問/手語翻譯 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              合作夥伴介紹
            </h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">蕭匡宇</h3>
              <p className="text-lg text-[#6B4E9B] mb-6">
                手語表演者｜手語諮詢顧問｜手語翻譯
              </p>
              <div className="space-y-4 text-gray-700">
                <p>
                  「透過手語，學會去探索
                  <br />
                  去給予、去接受、去行。
                  <br />
                  期許自己成為有聲與無聲間，
                  <br />
                  跨界欣賞的可能。」
                </p>
                <p>《聲音藏在》公益音樂會</p>
                <p>《無礙吾愛-祝你幸福障礙者平權歌舞劇》</p>
                <p>臺北啟聰學校《小小說書人》培植計畫</p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src="/手語表演者-蕭匡宇_2.JPG"
                  alt="蕭匡宇照片"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 關於計畫 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              關於計畫：聲音藏在
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              手語如同你、我在日常生活中使用的語言，不論是中文、英文、還是手語，語言不僅是作為溝通的媒介，更蘊含文化脈絡、生活態度及豐富的藝術美學。
              <br />
              手語演繹不僅是服務聾人，展現「聾人文化」的重要方式。本計畫以「打造聾人友善的音樂環境」為核心，致力於讓手語在大眾娛樂文化中被看見、被理解，進而推動文化平權，讓不同語言與感知方式都能共融於生活之中。
            </p>
          </div>
        </div>
      </section>

      {/* 成果展示 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              我們的成果
            </h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6B4E9B] mb-2">4+</div>
              <p className="text-gray-600">場公益演唱會</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6B4E9B] mb-2">500+</div>
              <p className="text-gray-600">位聾聽朋友參與</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6B4E9B] mb-2">20+</div>
              <p className="text-gray-600">位藝術家合作</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6B4E9B] mb-2">6</div>
              <p className="text-gray-600">堂教育課程</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
