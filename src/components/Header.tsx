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

  return (
    <nav className="fixed top-0 w-full bg-[#56496cb8] backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/hidden-sound/logo_large.png"
              alt="聲音藏在"
              className="h-[9.25rem] w-auto"
            />
          </div>
          <div className="flex">
            <div className="flex items-baseline space-x-4 sm:space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
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
