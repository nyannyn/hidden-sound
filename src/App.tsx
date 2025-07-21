import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage";
import Concert from "./components/Concert";
import Education from "./components/Education";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Concert1 from "./components/Concert1";
import Concert2 from "./components/Concert2";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/concert" element={<Concert />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* 新增兩個獨立頁面路由，分別對應 concert1 和 concert2 */}
          <Route path="/concert1" element={<Concert1 />} />
          <Route path="/concert2" element={<Concert2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
