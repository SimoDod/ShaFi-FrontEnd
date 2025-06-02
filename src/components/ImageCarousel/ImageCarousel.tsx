import clsx from "clsx";

const images = Array(7)
  .fill(0)
  .map((_, index) => `/alpha-${index + 1}.jpeg`);

const ImageCarousel = () => {
  return (
    <div className="carousel max-w-lg max-h-[450px] rounded-3xl">
      {images.map((image, index) => (
        <div id={"slide" + index} className="carousel-item relative w-full">
          <img src={image} className="w-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={"#slide" + (index - 1)}
              className={clsx("btn btn-circle", {
                "btn-disabled": index === 0,
              })}
            >
              ❮
            </a>
            <a
              href={"#slide" + (index + 1)}
              className={clsx("btn btn-circle", {
                "btn-disabled": images.length - 1 === index,
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
