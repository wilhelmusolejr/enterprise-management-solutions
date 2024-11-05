import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function ServiceCard({ image, title, description, url }) {
  return (
    <>
      {/* child */}
      <div className="px-5 pt-5 bg-white rounded-md shadow-md max-w-80 text-light-black">
        {/* Image */}
        <div className="h-[250px] w-full overflow-hidden rounded-md relative">
          <Image
            src={image}
            alt="Description of the image"
            className="object-cover w-full h-full"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>

        {/* Text */}
        <div className="text-center py-7 ">
          <h3 className="pb-2 text-lg font-medium text-black md:whitespace-nowrap ">
            {title}
          </h3>
          <p className="font-light pb-7 text-md">{description}</p>

          {/* learn more btn */}
          <Link
            href={`/service/${url}`}
            className="flex items-center justify-center gap-3 p-2 text-white transition duration-300 bg-yellow-500 border rounded-md hover:bg-yellow-600 hover:shadow-xl"
          >
            <p>Learn More</p>
            <FontAwesomeIcon icon={faArrowRightLong} className="w-5 " />
          </Link>
        </div>
      </div>
    </>
  );
}
