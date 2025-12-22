import { useEffect, useState } from "react";
import "../../styles/projects.css";

const ProjectGallery = ({ project, isOpen, onClose }) => {
  const { images = [], videos = [] } = project.media || {};

  const mediaItems = [
    ...videos.map(src => ({ type: "video", src })),
    ...images.map(src => ({ type: "image", src }))
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  const activeMedia = mediaItems[activeIndex];

  return (
    <div className="gallery-overlay" onClick={onClose}>
      <div
        className="gallery-modal"
        onClick={e => e.stopPropagation()}
      >
        <button className="gallery-close" onClick={onClose}>
          ✕
        </button>

        <div className="gallery-main">
          {activeMedia.type === "image" ? (
            <img
              src={activeMedia.src}
              alt="Project preview"
            />
          ) : (
            <video
              src={activeMedia.src}
              controls
              autoPlay
            />
          )}
        </div>

        <div className="gallery-thumbnails">
          {mediaItems.map((item, index) => (
            <button
              key={`${item.type}-${index}`}
              className={`thumbnail ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item.type === "image" ? (
                <img src={item.src} alt="thumbnail" />
              ) : (
                <span className="video-thumb">▶</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
