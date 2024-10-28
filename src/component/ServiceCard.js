import React from "react";
import Image from "next/image";

export default function ServiceCard({ image, title, description }) {
  return (
    <>
      {/* child */}
      <div className="w-full max-w-xs p-5 bg-white rounded-md min-w-72 text-light-black ">
        {/* image */}
        <div className="h-[300px] w-full overflow-hidden rounded-md relative">
          <Image
            src={image}
            alt="Description of the image"
            className="object-cover w-full h-full"
            layout="fill"
          />
        </div>

        {/* text */}
        <div className="pt-5">
          <h3 className="text-xl font-medium text-black">{title}</h3>
          <p className="font-light ">{description}</p>
        </div>
      </div>
    </>
  );
}
