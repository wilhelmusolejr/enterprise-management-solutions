import React from "react";

export default function SectionText({
  miniHeadline = "",
  headline,
  highlight = "",
  description,
}) {
  let start = headline;
  let end = "";

  if (highlight) {
    const targetIndex = headline.indexOf(highlight);
    if (targetIndex !== -1) {
      start = headline.slice(0, targetIndex);
      end = headline.slice(targetIndex + highlight.length);
    }
  }

  return (
    <div className="flex flex-col mb-20 capitalize md:items-center md:text-center md:border text-light-black">
      <p className="font-medium text-md">{miniHeadline}</p>
      <h2 className="mb-5 text-4xl font-semibold text-black capitalize">
        {start}
        {highlight && <span className="text-yellow-500">{highlight}</span>}
        {end}
      </h2>
      <p className="max-w-3xl font-light normal-case lg:text-lg md:w-3/4">
        {description}
      </p>
    </div>
  );
}
