import React from "react";
import { GalleryData } from "../data/main";

function Gallery() {
  return (
    <div className="py-24">
      <div>
        <h2 className="text-center font-medium text-2xl">Gallery</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {GalleryData.map((g) => {
          return (
            <div
              key={g.id}
              className="mx-auto mb-10 w-60 p-5 max-h-[20rem] shadow-md rounded-md"
            >
              <img src={g.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
