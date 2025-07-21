import { Link } from "react-router-dom";
import { useState } from "react";

// HeaderProps 是一個 interface，這個 props 是在父層元件（例如 About.tsx、homepage.tsx 等）引入 Header 時傳進來的。
// 例如：<Header navigation={siteConfig.navigation} />
// 其中 navigation 來自 siteConfig 設定，型別就符合 HeaderProps 的要求。
interface HeaderProps {
  navigation: Array<{
    name: string;
    href: string;
  }>;
}

// 手機版漢堡選單元件
function HamburgerMenu({ navigation }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [concertOpen, setConcertOpen] = useState(false);

  // 點擊連結後自動關閉選單
  const handleLinkClick = () => {
    setOpen(false);
    setConcertOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">開啟主選單</span>
        {/* 漢堡 icon */}
        <svg
          className={`h-6 w-6 transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {open ? (
            // 關閉 icon (X)
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // 漢堡 icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {/* 下拉選單 */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute right-0 mt-2 w-52 origin-top-right rounded-md shadow-lg bg-[#56496c] ring-1 ring-black ring-opacity-5 z-50"
        >
          <div className="py-1 flex flex-col">
            {navigation.map((item) =>
              item.name === "Concert" ? (
                <div key={item.name} className="relative">
                  <button
                    className="w-full text-left px-4 py-2 text-base font-medium text-white hover:bg-white/10 rounded transition-all flex items-center justify-between"
                    onClick={() => setConcertOpen((prev) => !prev)}
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform ${
                        concertOpen ? "rotate-90" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  {concertOpen && (
                    <div className="ml-2 mt-1 bg-[#6B4E9B] rounded shadow-lg">
                      <Link
                        to="/concert1"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-base font-medium text-white hover:bg-white/10 rounded transition-all"
                      >
                        【聾聽共融演唱會】2023年3月3日
                      </Link>
                      <Link
                        to="/concert2"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-base font-medium text-white hover:bg-white/10 rounded transition-all"
                      >
                        【聾聽共融演唱會】2023年9月23日
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-base font-medium text-white hover:bg-white/10 rounded transition-all"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const Header = ({ navigation }: HeaderProps) => {
  const [concertDropdownOpen, setConcertDropdownOpen] = useState(false);

  // 處理滑鼠移入/移出
  const handleMouseEnter = () => setConcertDropdownOpen(true);
  const handleMouseLeave = () => setConcertDropdownOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-[#56496cb8] backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo 區塊 */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/logo_s.png"
                alt="聲音藏在"
                className="h-[2.25rem] w-auto my-3"
              />
            </Link>
          </div>
          {/* 桌面版選單 */}
          <div className="hidden sm:flex">
            <div className="flex items-baseline space-x-4 sm:space-x-8">
              {navigation.map((item) =>
                item.name === "Concert" ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="inline-block px-3 py-2 text-sm sm:text-base font-medium tracking-wider transition-all duration-200 ease-in-out text-white hover:text-gray-200 hover:bg-white/10 rounded flex items-center"
                      type="button"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform ${
                          concertDropdownOpen ? "rotate-90" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                    {concertDropdownOpen && (
                      <div
                        className="absolute left-0 mt-0 w-64 rounded-md shadow-lg bg-[#6B4E9B] ring-1 ring-black ring-opacity-5 z-50"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link
                          to="/concert1"
                          className="block px-4 py-2 text-base font-medium text-white hover:bg-white/10 rounded transition-all"
                        >
                          【聾聽共融演唱會】2023年3月3日
                        </Link>
                        <Link
                          to="/concert2"
                          className="block px-4 py-2 text-base font-medium text-white hover:bg-white/10 rounded transition-all"
                        >
                          【聾聽共融演唱會】2023年9月23日
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="inline-block px-3 py-2 text-sm sm:text-base font-medium tracking-wider transition-all duration-200 ease-in-out text-white hover:text-gray-200 hover:bg-white/10 rounded"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
          {/* 手機版漢堡選單按鈕 */}
          <div className="sm:hidden flex items-center">
            <HamburgerMenu navigation={navigation} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
