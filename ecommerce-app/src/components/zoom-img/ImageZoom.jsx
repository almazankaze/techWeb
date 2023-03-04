import { useState } from "react";

import "./zoom-img.css";

function ImageZoom({ zoomImg }) {
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");

  const backgroundImg = {
    backgroundImage: `url(${zoomImg})`,
    backgroundPosition: backgroundPosition,
  };

  const handleMouseOver = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <figure
      style={backgroundImg}
      role="img"
      aria-label="product"
      onMouseMove={handleMouseOver}
    >
      <img src={zoomImg} alt="product" />
    </figure>
  );
}

export default ImageZoom;
