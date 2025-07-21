import Header from "./Header";
import Footer from "./Footer";
import { siteConfig } from "../config/siteConfig";

const Concert = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header navigation={siteConfig.navigation} />

      {/* 頁面標題 */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">演出資訊</h1>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              聾聽共融的音樂體驗，用「看得見的聲音」感受旋律的能量
            </p>
          </div>
        </div>
      </section>

      {/* Concert 1 區塊 */}
      <section id="concert1" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              聾聽共融公益演唱會
            </h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              2023年3月3日｜世界聽力日 × 音樂無差別 愛在手掌心
            </p>
          </div>

          <div className="mb-12">
            <blockquote className="text-2xl italic font-light text-center mb-16 max-w-3xl mx-auto">
              <p className="mb-4">
                「這是我第一次參加最棒的演唱會。我一直很想參加，但礙於聽不懂歌詞，始終沒有機會。」
              </p>
              <footer className="text-lg text-gray-600">
                —— 聾人觀眾 小猴
              </footer>
            </blockquote>
          </div>

          <div className="mb-12">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/3q3iO2ZbHIc?si=rK1Tw7UWDtbMCoSu"
                title="音樂無差別 愛在手心演唱會"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">
            <p className="mb-6">
              身為聾人子女（CODA），廖曉彤從小生活在手語與聲音的雙重語言世界中。她深刻理解，對聾人而言，「音樂」往往遙不可及。因此，她創立了《聲音藏在——創造聾人音樂友善環境》，希望讓音樂跨越聲音的界線，進入每一位聾人朋友的生命。
            </p>
            <p className="mb-6">
              於2023年3月3日世界聽力日當天，她首度舉辦了【音樂無差別．愛在手掌心】藝術共融公益演唱會，邀請聾人與聽人一同走進音樂現場，用「看得見的聲音」感受旋律的能量與情感。
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              跨界演出陣容
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  表演藝術家
                </h4>
                <ul className="space-y-4">
                  <li>
                    <span className="font-medium">芒果醬樂團</span>
                    <p className="text-gray-600">用青春搖滾點燃觀眾情緒</p>
                  </li>
                  <li>
                    <span className="font-medium">PNC 陳老師</span>
                    <p className="text-gray-600">以饒舌節奏說唱真實人生</p>
                  </li>
                  <li>
                    <span className="font-medium">演員 郭耀仁</span>
                    <p className="text-gray-600">
                      首次以歌手身份登場，唱出對母親的深情創作
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  手語表演者
                </h4>
                <ul className="space-y-4">
                  <li>
                    <span className="font-medium">蕭匡宇</span>
                    <p className="text-gray-600">
                      疫情期間備受矚目的手語翻譯員，聽人手語表演者
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">牛暄文</span>
                    <p className="text-gray-600">
                      公視手語新聞主播，本場聾人手語詮釋者
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">廖曉彤</span>
                    <p className="text-gray-600">
                      《聲音藏在》創辦人，聽人手語表演者
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                音樂與手語的翻譯過程
              </h3>
              <p className="text-gray-700">
                為協助牛暄文演出〈夏夜晚風〉，廖曉彤與蕭匡宇先行將歌詞轉譯為手語，並運用音樂震動與肢體引導牛暄文感受歌曲的青春氛圍。
                牛暄文一開始誤以為歌曲情感偏悲傷，經過多次排練後，終於完美詮釋出樂團活力四射的精神與歌詞中的生命力。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                郭耀仁的首次獻唱
              </h3>
              <p className="text-gray-700">
                演員 郭耀仁
                帶來原創歌曲〈給媽媽的台語歌〉與〈媽媽咪呀〉，訴說身為單親長子的他，如何照顧智能障礙的母親與弟妹。他將深沉的情感化為旋律，也希望透過手語，讓聾人朋友感受到這份無聲的愛。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                為什麼要做這場演唱會？
              </h3>
              <p className="text-gray-700">
                在許多國家，演唱會需依法提供手語或聽打服務。但在台灣，這樣的共融設計仍屬少見。
                廖曉彤曾向唱片公司提案，卻被以「不具市場效益」回絕。她決定自己籌畫，終於在「相信世代」、「聯合勸募」、以及德國音響品牌
                ELAC 的支持下獲得資源，讓這場屬於聾人的演唱會真正落地。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concert 2 區塊 */}
      <section id="concert2" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              音樂無差別 愛在手心
            </h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              2023年9月23日｜世界手語日 × 音樂無差別 愛在手心
            </p>
          </div>


        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Concert;
