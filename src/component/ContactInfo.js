import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactInfo({ emoji, title, description }) {
  return (
    <div className="flex items-center gap-5 md:gap-10">
      <div className="flex items-center justify-center">
        <FontAwesomeIcon icon={emoji} className="text-yellow-500" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-medium ">{title}</h3>
        <p className="text-sm text-light-white lg:text-lg">{description}</p>
      </div>
    </div>
  );
}
