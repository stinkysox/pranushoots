import React from "react";
import "./TeasersSection.css";
import { FaYoutube } from "react-icons/fa";

const TeasersSection = () => {
  // Dummy embedded YouTube video URLs
  const videos = [
    "https://www.youtube.com/embed/zpCDbnokQkE",
    "https://www.youtube.com/embed/j-6bReuQiHE",
    "https://www.youtube.com/embed/zntfLlX2N4g",
    "https://www.youtube.com/embed/YJYoRadWb2A",
    "https://www.youtube.com/embed/bhpaCbhp3Rw",
    "https://www.youtube.com/embed/FCTiKDjFHDE",
    "https://www.youtube.com/embed/KW-17ed5JhI",
    "https://www.youtube.com/embed/AP3PlUZC9sQ",
    "https://www.youtube.com/embed/urLdHX8dUN4",
    "https://www.youtube.com/embed/YJ23ipijl7o",
    "https://www.youtube.com/embed/8qasbSlvMIE",
    "https://www.youtube.com/embed/Olt9vcEd4WM",
    "https://www.youtube.com/embed/bELiDyMihLs",
  ];

  return (
    <div className="teasers-section">
      <h2>Teasers</h2>

      {videos.length === 0 ? (
        <p>No videos to show</p>
      ) : (
        <div className="video-grid">
          {videos.map((src, index) => (
            <div className="video-container" key={index}>
              <iframe
                src={src}
                title={`Teaser ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}

      <div className="youtube-icon">
        <a
          href="https://www.youtube.com/@pranu_shootsPhotography/featured"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="glow-youtube" />
        </a>
      </div>
    </div>
  );
};

export default TeasersSection;
