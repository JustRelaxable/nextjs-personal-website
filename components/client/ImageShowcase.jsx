"use client";
import Image from "next/image";
import styles from "./ImageShowcase.module.css";
import { useEffect, useState } from "react";
import PrimaryParagraph from "../server/text/PrimaryParagraph";
export default function ImageShowcase({
  imageData,
  containerClass,
  controlContainerClass,
  customAspectRatio,
}) {
  const [imageIndex, setImageIndex] = useState(0);

  function nextImage() {
    if (imageData.length <= imageIndex + 1) setImageIndex(0);
    else setImageIndex(imageIndex + 1);
  }

  function previousImage() {
    if (imageIndex - 1 < 0) setImageIndex(imageData.length - 1);
    else setImageIndex(imageIndex - 1);
  }

  return (
    <div className={`${styles.container} ${containerClass}`}>
      <div
        className={`${styles.controlContainer} ${controlContainerClass}`}
        style={customAspectRatio}
      >
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={previousImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            className={styles.icon}
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </button>
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={nextImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            className={styles.icon}
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </button>
        <div
          className={styles.imageContainer}
          style={{ translate: `${-imageIndex * 100}%` }}
        >
          {imageData.map((o, i) => {
            return (
              <Image
                key={o.path.src}
                src={o.path}
                alt={o.caption}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  left: `${i * 100}%`,
                }}
                placeholder="blur"
              ></Image>
            );
          })}
        </div>
      </div>
      <div className={styles.imageCaption}>
        <PrimaryParagraph>{imageData[imageIndex].caption}</PrimaryParagraph>
      </div>
    </div>
  );
}
