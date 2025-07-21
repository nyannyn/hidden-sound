const Sponsor = () => {
  const organizations = [
    {
      id: "moc",
      name: "中華民國文化部",
      fullName: "Ministry of Culture",
      url: "https://www.moc.gov.tw/",
      logo: "/文化部_logo.png",
    },
    {
      id: "elac",
      name: "Elac - The life of sound",
      fullName: "ELAC - The Life of Sound",
      url: "https://elac.com/",
      logo: "/Elac_2.png",
    },
    {
      id: "deaf-association",
      name: "中華民國聾人協會",
      fullName: "中華民國聾人協會",
      url: "https://www.nad.org.tw/",
      logo: "/nad-taiwan-logo.png",
    },
    {
      id: "united-way",
      name: "聯合勸募 United Way",
      fullName: "聯合勸募 United Way",
      url: "https://www.unitedway.org.tw/",
      logo: "/聯合勸募.png",
    },
    {
      id: "taipei-culture",
      name: "台北市政府文化局",
      fullName: "台北市政府文化局",
      url: "https://english.culture.gov.taipei/",
      logo: "/台北市政府文化局logo-02.png",
    },
    {
      id: "hope-media",
      name: "公益傳播基金會",
      fullName: "Hope Media 公益傳播",
      url: "https://www.hopemedia.tw/",
      logo: "/公益傳播.png",
    },
    {
      id: "taiwan-fund",
      name: "台灣金融資產服務股份有限公司",
      fullName: "台灣金融資產服務股份有限公司",
      url: "https://www.tfasc.com.tw/",
      logo: "/台灣金服.jpg",
    },
    {
      id: "rotary",
      name: "Rotary",
      fullName: "Rotary International",
      url: "https://www.rotary.org/",
      logo: "/Rotary_International.jpg",
    },
  ];

  const handleClick = (url: string, name: string) => {
    if (url === "#") {
      alert(`${name} 的官方網站連結尚未提供`);
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          合作夥伴
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {organizations.map((org) => (
            <div key={org.id} className="flex justify-center">
              <button
                onClick={() => handleClick(org.url, org.name)}
                className={`
                  group relative
                  h-24 rounded-xl
                  transform transition-all duration-300 ease-in-out
                  hover:scale-110 hover:shadow-2xl hover:-translate-y-3
                  active:scale-95
                  focus:outline-none focus:ring-4 focus:ring-blue-300/50
                  border-2 border-white/20 hover:border-white/40
                  flex flex-col items-center justify-center
                `}
                aria-label={`前往 ${org.fullName}`}
                title={org.fullName}
              >
                {/* Logo圖片 */}
                <div className="relative z-10 h-24 mb-1 flex items-center justify-center">
                  <img
                    src={org.logo}
                    alt={`${org.name} logo`}
                    className="w-full h-full object-contain filter"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      if (target.nextElementSibling) {
                        (
                          target.nextElementSibling as HTMLElement
                        ).style.display = "block";
                      }
                    }}
                  />
                  <span
                    className="text-xs font-bold leading-none hidden"
                    style={{ display: "none" }}
                  >
                    {org.name.charAt(0)}
                  </span>
                </div>

                {/* 組織名稱 */}
                <div className="relative z-10 text-xs font-semibold text-center leading-none px-1">
                  {org.name}
                </div>

                {/* 懸停時的發光效果 */}
                <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
