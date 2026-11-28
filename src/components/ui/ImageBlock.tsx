import styles from "./ImageBlock.module.css";
import { useState } from "react";

interface Input {
  src: string;
  alt?: string;
  caption?: string;
  captionLocation?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  className?: string;
}

const fallbackSrc = "/missing.jpg";

export function ImageBlock({
  src,
  alt = "",
  caption = "",
  captionLocation = "bottom-left",
  aspectRatio = "16 / 9",
  objectFit = "cover",
  className = "",
}: Input) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  const textAlign = captionLocation.split(
    "-",
  )[1] as React.CSSProperties["textAlign"];

  return (
    <figure className={`${styles["image-block"]} ${className}`}>
      {caption && captionLocation.at(0) === "t" && (
        <figcaption className="label" style={{ textAlign }}>
          {caption}
        </figcaption>
      )}
      <div className={styles["image-wrapper"]} style={{ aspectRatio }}>
        <img
          src={imgSrc}
          alt={alt}
          style={{
            objectFit,
            opacity: isLoaded ? (imgSrc !== fallbackSrc ? 1 : 0.2) : 0,
          }}
          className="easing-base"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setImgSrc(fallbackSrc)}
        />
      </div>
      {caption && captionLocation.at(0) === "b" && (
        <figcaption className="label" style={{ textAlign }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
