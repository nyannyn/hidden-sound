interface HeaderProps {
  navigation: Array<{
    name: string;
    href: string;
  }>;
}

const Header = ({ navigation }: HeaderProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (item: { name: string; href: string }) => {
    // 如果是頁面跳轉（不是錨點）
    if (item.href.startsWith("/")) {
      if (item.href === "/concert") {
        window.navigateToPage("concert");
      } else if (item.href === "/education") {
        window.navigateToPage("education");
      } else if (item.href === "/about") {
        window.navigateToPage("about");
      } else if (item.href === "/contact") {
        window.navigateToPage("contact");
      } else if (item.href === "/") {
        window.navigateToPage("home");
      }
    } else if (item.href.startsWith("/#")) {
      // 如果是首頁的錨點
      const currentPath = window.location.pathname;
      if (
        currentPath.includes("/concert") ||
        currentPath.includes("/education") ||
        currentPath.includes("/about") ||
        currentPath.includes("/contact")
      ) {
        // 如果在子頁面，先跳轉到首頁再滾動
        window.navigateToPage("home");
        setTimeout(() => {
          scrollToSection(item.href.substring(1));
        }, 100);
      } else {
        // 在首頁，直接滾動
        scrollToSection(item.href.substring(1));
      }
    } else {
      // 其他情況，直接滾動
      scrollToSection(item.href);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#56496cb8] backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={() => window.navigateToPage("home")}
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/logo_s.png"
                alt="聲音藏在"
                className="h-[2.25rem] w-auto my-3"
              />
            </button>
          </div>
          <div className="flex">
            <div className="flex items-baseline space-x-4 sm:space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="inline-block px-3 py-2 text-sm sm:text-base font-medium tracking-wider transition-all duration-200 ease-in-out text-white hover:text-gray-200 hover:bg-white/10 rounded"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
