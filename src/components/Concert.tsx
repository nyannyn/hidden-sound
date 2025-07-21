import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";

const Concert = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header navigation={siteConfig.navigation} />
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            演出資訊分頁
          </h1>
          <div className="flex flex-col gap-6 items-center">
            <Link
              to="/concert1"
              className="px-8 py-4 bg-gray-800 text-white rounded-lg text-2xl font-semibold shadow hover:bg-gray-700 transition"
            >
              聾聽共融公益演唱會（2023/3/3）
            </Link>
            <Link
              to="/concert2"
              className="px-8 py-4 bg-gray-800 text-white rounded-lg text-2xl font-semibold shadow hover:bg-gray-700 transition"
            >
              音樂無差別 愛在手心（2023/9/23）
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Concert;
