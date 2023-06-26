"use client";
import Image from "next/image";
import styles from "./ImageShowcase.module.css";
import { useEffect, useState } from "react";
import PrimaryParagraph from "../server/text/PrimaryParagraph";
export default function ImageShowcase({
  imageData,
  containerClass,
  controlContainerClass,
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
      <div className={`${styles.controlContainer} ${controlContainerClass}`}>
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={previousImage}
        ></button>
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={nextImage}
        ></button>
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
                  height: "auto",
                  objectFit: "cover",
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
