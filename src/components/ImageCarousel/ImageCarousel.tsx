import clsx from "clsx";
import { useState } from "react";

const images = Array(7)
  .fill(0)
  .map((_, index) => `/alpha-${index + 1}.jpeg`);

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative max-w-lg max-h-[450px] rounded-2xl overflow-hidden glass-card">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="w-full flex-shrink-0 object-cover"
            draggable={false}
          />
        ))}
      </div>
      <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
        <button
          onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
          className={clsx("btn btn-circle btn-sm glass-surface border-0 shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto", {
            "opacity-0 pointer-events-none": current === 0,
          })}
        >
          ❮
        </button>
        <button
          onClick={() => setCurrent((prev) => Math.min(images.length - 1, prev + 1))}
          className={clsx("btn btn-circle btn-sm glass-surface border-0 shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto", {
            "opacity-0 pointer-events-none": current === images.length - 1,
          })}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
