import React from "react";
import { Image } from "../types/Image";
import GalleryGridItem from "./GalleryGridItem";

interface Props {
  images: Image[];
  error: any;
}

const GalleryGrid: React.FC<Props> = ({ images, error }) => {
  return (
    <div className="gallery-grid">
      {images ? (
        images.map((image: Image, i: number) => {
          return <GalleryGridItem key={i} image={image} />;
        })
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default GalleryGrid;
