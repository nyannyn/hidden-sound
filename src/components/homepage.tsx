import { Mail, Phone, MapPin } from "lucide-react";

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
    description:
      "我是廖曉彤，是一個在聾人家庭長大的孩子。我是聽人，在成長的過程中用手語和父母溝通。身為聾人與聽人世界的橋樑，在我長大之後，發現手語是我生命中獨特的印記，它藏在我無聲的世界裡，成為了另一個獨特的聲音。我也是一名表演工作者，口語的表達具有節奏和韻律，也自然成為有旋律的音樂，每個聽到音樂的人都會跟著節拍一起歌唱。而手語更是一個獨特的藝術表達，難道聾人的世界就不能擁有一樣美好的音樂嗎？因此有了【聲音藏在－創造聾人音樂友善環境 】，希望搭起聾人與音樂世界的橋樑，讓音樂悄無聲息，讓無聲的世界充滿聲響。",
    skills: [
      "手語表達",
      "音樂創作",
      "聾人文化推廣",
      "表演藝術",
      "社會橋樑",
      "教育工作者",
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
      {/* 導航欄 */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="./logo_large.png"
                alt="聲音藏在"
                className="h-8 w-auto mr-3"
              />
              <div className="text-xl font-light text-gray-900">
                <span className="font-normal">{siteConfig.title}</span>
                <span className="text-sm italic text-gray-600 ml-2">
                  {siteConfig.subtitle}
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {siteConfig.navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="inline-block px-3 py-2 text-sm font-medium tracking-wider transition-all duration-200 ease-in-out text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄區塊 */}
      <section id="home" className="relative min-h-screen bg-white">
        <div className="absolute inset-0">
          <img
            src="./hero.JPG"
            alt="背景"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative flex items-center justify-center min-h-screen text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
              <span className="font-normal">聲音藏在</span>
              <br />
              <span className="text-2xl md:text-3xl font-light italic text-gray-200 mt-2 block">
                hidden sound
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
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

      {/* 關於部分 */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {siteConfig.about.title}
            </h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                alt="廖曉彤"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {siteConfig.about.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {siteConfig.about.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <span className="text-gray-800 font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concert 區塊 */}
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
      <section
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
      </section>

      {/* 頁尾 */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400">© 2025 {siteConfig.title}. 版權所有.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
