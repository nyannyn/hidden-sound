import { Mail, Phone, MapPin } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

// 網站配置
const siteConfig = {
  title: "聲音藏在",
  subtitle: "hidden sound",
  heroTitle: "聲音藏在 hidden sound",
  heroSubtitle: '想邀請您與一起在無聲的世界尋找"聲響"。',

  navigation: [
    { name: "ABOUT", href: "#about" },
    { name: "Concert", href: "#concert" },
    { name: "Education", href: "#education" },
  ],

  about: {
    title: "關於廖曉彤",
    description: [
      "我是廖曉彤，是一個在聾人家庭長大的孩子。我是聽人，在成長的過程中用手語和父母溝通。",
      "身為聾人與聽人世界的橋樑，在我長大之後，發現手語是我生命中獨特的印記，它藏在我無聲的世界裡，成為了另一個獨特的聲音。",
      "我也是一名表演工作者，口語的表達具有節奏和韻律，也自然成為有旋律的音樂，每個聽到音樂的人都會跟著節拍一起歌唱。",
      "而手語更是一個獨特的藝術表達，難道聾人的世界就不能擁有一樣美好的音樂嗎？因此有了【聲音藏在－創造聾人音樂友善環境 】，希望搭起聾人與音樂世界的橋樑，讓音樂悄無聲息，讓無聲的世界充滿聲響。",
    ],
  },

  contact: {
    title: "聯絡我們",
    phone: "02-1234-5678",
    email: "contact@hidden-sound.com",
    address: "台北市信義區信義路五段7號",
  },
};

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

      {/* 英雄區塊 */}
      <section id="home" className="relative min-h-screen bg-white">
        <div className="absolute inset-0">
          <img
            src="/hidden-sound/hero.JPG"
            alt="背景"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative flex items-center justify-center min-h-screen text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src="/logo_text.png"
              alt="聲音藏在 hidden sound"
              className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto mb-4 mx-auto"
            />
            <p className="text-lg md:text-xl font-light mb-8 leading-relaxed">
              {siteConfig.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={() => scrollToSection("#about")}
                className="bg-white text-gray-900 px-8 py-3 text-sm font-medium tracking-wider hover:bg-gray-100 transition-colors"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("#concert")}
                className="bg-white text-gray-900 px-8 py-3 text-sm font-medium tracking-wider hover:bg-gray-100 transition-colors"
              >
                Concert
              </button>
              <button
                onClick={() => scrollToSection("#education")}
                className="bg-white text-gray-900 px-8 py-3 text-sm font-medium tracking-wider hover:bg-gray-100 transition-colors"
              >
                Education
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 關於部分-聲音藏在介紹 */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {siteConfig.about.title}
            </h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-light mb-3">
                <span className="font-normal">聲音藏在</span>
              </h3>
              <p className="text-2xl font-light text-gray-600 italic mb-6">
                hidden sound
              </p>
              <div className="w-16 h-0.5 bg-gray-800 mx-auto lg:mx-0 mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                想邀請您一起在無聲的世界尋找"聲響"。
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                {siteConfig.about.description.join("\n")}
              </p>
            </div>
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
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
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
      <section id="concert" className="py-20 bg-white">
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
        </div>
      </section>

      {/* Education 區塊 */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">藝術教育</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">聽覺之外的聲音探索課</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-start mb-6">
              <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium mr-4 flex-shrink-0">
                2024
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                國家兩廳院廳院學計畫
              </h3>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                2024年，「國家兩廳院廳院學計畫」首度與台北啟聰學校合作藝術入校課程，由廖曉彤老師為高一學生設計6堂課及一場專屬音樂會。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
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
        </div>
      </section>

      {/* 聯絡資訊 */}
      {/* <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {siteConfig.contact.title}
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-gray-200">
              準備好一起探索無聲世界的聲響了嗎？
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <Phone className="mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">電話</h3>
              <p className="text-gray-200">{siteConfig.contact.phone}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <Mail className="mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">電子郵件</h3>
              <p className="text-gray-200">{siteConfig.contact.email}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <MapPin className="mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">地址</h3>
              <p className="text-gray-200">{siteConfig.contact.address}</p>
            </div>
          </div>
        </div>
      </section> */}

      <Footer title={siteConfig.title} />
    </div>
  );
};

export default HomePage;
