import { useState, useEffect } from "react";
import HomePage from "./components/homepage";
import Concert from "./components/Concert";
import Education from "./components/Education";
import About from "./components/About";
import Contact from "./components/Contact";

// 聲明全域導航函數類型
declare global {
  interface Window {
    navigateToPage: (page: string) => void;
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // 監聽 URL 變化來切換頁面
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/hidden-sound/concert" || path === "/concert") {
        setCurrentPage("concert");
      } else if (path === "/hidden-sound/education" || path === "/education") {
        setCurrentPage("education");
      } else if (path === "/hidden-sound/about" || path === "/about") {
        setCurrentPage("about");
      } else if (path === "/hidden-sound/contact" || path === "/contact") {
        setCurrentPage("contact");
      } else {
        setCurrentPage("home");
      }
    };

    // 初始化頁面
    handlePopState();

    // 監聽瀏覽器前進/後退按鈕
    window.addEventListener("popstate", handlePopState);

    // 全域頁面切換函數
    window.navigateToPage = (page: string) => {
      setCurrentPage(page);
      if (page === "concert") {
        window.history.pushState({}, "", "/hidden-sound/concert");
      } else if (page === "education") {
        window.history.pushState({}, "", "/hidden-sound/education");
      } else if (page === "about") {
        window.history.pushState({}, "", "/hidden-sound/about");
      } else if (page === "contact") {
        window.history.pushState({}, "", "/hidden-sound/contact");
      } else {
        window.history.pushState({}, "", "/hidden-sound/");
      }
    };

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="app">
      {currentPage === "home" && <HomePage />}
      {currentPage === "concert" && <Concert />}
      {currentPage === "education" && <Education />}
      {currentPage === "about" && <About />}
      {currentPage === "contact" && <Contact />}
    </div>
  );
}

export default App;
