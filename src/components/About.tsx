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
            <p className="text-lg text-gray-600">
              用藝術搭起聾人與音樂世界的橋樑
            </p>
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
      {/* <section className="py-20 bg-gray-50">
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
                  計畫發起人廖曉彤，為表演藝術工作者，同時擁有 CODA（Children of
                  Deaf Adults 聾人子女）身份，
                </p>
                <p>
                  從小在聽障家庭中長大的孩子，父親為聽障奧運選手廖港生，與父母皆以手語溝通。
                </p>
                <p>
                  身為聾人與聽人世界的橋樑，並不斷思考聾人和音樂藝術的關係，在無聲的世界裡，要怎麼讓聾人也能享受美好音樂的存在呢？
                </p>
                <p>
                  因此有了「聲音藏在」的計畫，邀請大家一起在無聲的世界尋找「聲響」。
                </p>
              </div>

              <div className="mt-8 space-y-2">
                <div className="flex items-center text-gray-600">
                  <span className="text-[#6B4E9B] mr-2">•</span>
                  <span>專業手語翻譯員</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-[#6B4E9B] mr-2">•</span>
                  <span>表演工作者</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-[#6B4E9B] mr-2">•</span>
                  <span>聾人音樂友善環境推廣者</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto mb-4">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  廖曉彤照片
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 關於計畫 */}
      {/* {關於計畫：聲音藏在
      計畫以「創造聾人音樂友善環境」為主旨，希望將聾人使用的語言「手語」更廣泛被以符合大眾娛樂文化之角度推廣，手語演繹不僅只是服務龍人，更是需要推廣的文化。「聲音藏在」計畫希望可以促進大眾對聾人文化的理解及與聾人族群的溝通，提升聾人身分認同。} */}

      {/* 成果展示 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              我們的成果
            </h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              用數字說話，看見我們的努力與成果
            </p>
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
