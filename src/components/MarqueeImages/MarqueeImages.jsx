import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  const categories = {
    "Right Images": [
      {
        imageUrl: "https://i.postimg.cc/VvF5w0Fg/IMG-0580.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/3wrS6c3N/0-20.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/sD67Gbpc/IMG-0579.jpg",
      },
      {
        imageUrl:
          "https://i.postimg.cc/hv4Qf0v6/767-C2648-C022-43-E9-9448-16-A5-A6-BD5-AF5.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/DwxdWyKf/0-2.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/3RX2yRB4/IMG-0575.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/G2Cy1RCc/IMG-0569.jpg",
      },
    ],
    "Left Images": [
      {
        imageUrl: "https://i.postimg.cc/7LT3kXJN/IMG-0613.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/SxH9D81Y/IMG-0572.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/5yJF7ZMk/0-11.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/HxdpfHV5/0-2-1.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/Gtz9MtKH/0-8.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/RhGfRD2v/IMG-0573.jpg",
      },
    ],
  };

  const rightImages = categories["Right Images"];
  const leftImages = categories["Left Images"];

  // Generate empty placeholders if no images present
  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  // Render images with lazy loading & descriptive alt text
  const renderImages = (imagesArray, direction) => {
    if (!imagesArray || imagesArray.length === 0) return generateEmptyImages();

    return imagesArray.map((imgObj, idx) => (
      <img
        key={`${direction}-${idx}`}
        className="marquee-img"
        src={imgObj.imageUrl}
        alt={`${direction === "right" ? "Right" : "Left"} Slide Image ${
          idx + 1
        }`}
        loading="lazy"
        draggable={false}
      />
    ));
  };

  return (
    <>
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="right"
        >
          {renderImages(rightImages, "right")}
        </Marquee>
      </div>

      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {renderImages(leftImages, "left")}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeImages;
