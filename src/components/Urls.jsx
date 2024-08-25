const banners = [
  {
    href: "https://www.trendyol.com/defacto-x-b37",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Defacto_202301270049.jpg",
  },
  {
    href: "https://www.trendyol.com/koton-x-b38",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Koton_202301270326.png",
  },
  {
    href: "https://www.trendyol.com/philips-x-b577",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Philips_202301271558.jpg",
  },
  {
    href: "https://www.trendyol.com/stradivarius-x-b147",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/4/26/Stradivarius_202304260936.png",
  },
  {
    href: "https://www.trendyol.com/karaca-x-b325",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/2/13/Karaca_202302131917.jpg",
  },
  {
    href: "https://www.trendyol.com/magaza/penti-m-4442?sst=0",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/3/7/Penti_202303072238.jpg",
  },
  {
    href: "https://www.trendyol.com/pull-bear-x-b592",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg",
  },
  {
    href: "https://www.trendyol.com/pierre-cardin-x-b122",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Pierrecardin_202301271558.jpg",
  },
  {
    href: "https://www.trendyol.com/magaza/x-m-105292",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/7/17/MadmextLogo200200_202307172142.jpg",
  },
  {
    href: "https://www.trendyol.com/bershka-x-b486",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/4/26/Bershka_202304260943.png",
  },
  {
    href: "https://www.trendyol.com/trend-alacati-stili-x-b102767",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/28/TrendalacAtistili_202301280121.jpg",
  },
  {
    href: "https://www.trendyol.com/xiaomi-x-b101939",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/28/Xiaomi_202301280236.jpg",
  },
  {
    href: "https://www.trendyol.com/adidas-x-b33",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/26/Adidas_202301262144.png",
  },
  {
    href: "https://www.trendyol.com/mango-x-b41",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Mango_202301270525.png",
  },
  {
    href: "https://www.trendyol.com/magaza/x-m-63",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Mavi_202301270522.png",
  },
  {
    href: "https://www.trendyol.com/apple-x-b101470",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/26/Apple_202301262111.jpg",
  },
  {
    href: "https://www.trendyol.com/puma-x-b160",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Puma_202301271558.jpg",
  },
  {
    href: "https://www.trendyol.com/nike-x-b44",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Nike_202301271540.jpg",
  },
  {
    href: "https://www.trendyol.com/magaza/l-oreal-turkiye-m-107819",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/LOreal_202301270444.png",
  },
  {
    href: "https://www.trendyol.com/kiwi-x-b108839",
    src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Kiwi_202301270326.png",
  },
];

export default function Urls() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {banners.map((banner, index) => (
        <a
          key={index}
          href={banner.href}
          className="rounded-sm shadow-md"
          style={{ height: "100px", width: "100px" }}
        >
          <img className="" src={banner.src} alt="" />
        </a>
      ))}
    </div>
  );
}
