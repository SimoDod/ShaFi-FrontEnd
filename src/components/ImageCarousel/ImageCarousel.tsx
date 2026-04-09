import clsx from "clsx";

const images = Array(7)
  .fill(0)
  .map((_, index) => `/alpha-${index + 1}.jpeg`);

const ImageCarousel = () => {
  return (
    <div className="carousel max-w-lg max-h-[450px] rounded-2xl overflow-hidden glass-card">
      {images.map((image, index) => (
        <div id={"slide" + index} key={index} className="carousel-item relative w-full">
          <img src={image} className="w-full object-cover" />
          <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={"#slide" + (index - 1)}
              className={clsx("btn btn-circle btn-sm glass-surface border-0 shadow-lg transition-all duration-300 hover:scale-110", {
                "btn-disabled opacity-0": index === 0,
              })}
            >
              ❮
            </a>
            <a
              href={"#slide" + (index + 1)}
              className={clsx("btn btn-circle btn-sm glass-surface border-0 shadow-lg transition-all duration-300 hover:scale-110", {
                "btn-disabled opacity-0": images.length - 1 === index,
              })}
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
