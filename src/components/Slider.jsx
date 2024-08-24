const BannerSlider = ({ banners }) => {
  return (
    <div
      data-testid="sliderList"
      className="flex flex-wrap justify-center gap-4 mt-4"
    >
      {banners.map((banner, index) => (
        <a
          key={index}
          href={banner.href}
          className="banner-item rounded overflow-hidden shadow-lg"
          style={{ height: "136px", width: "136px" }}
        >
          <img
            className="banner-img w-full h-full object-cover"
            src={banner.src}
            alt=""
          />
        </a>
      ))}
    </div>
  );
};

export default BannerSlider;
