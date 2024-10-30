import React from "react";

export default function SectionText({
  miniHeadline = "",
  headline,
  description,
}) {
  return (
    <div className="flex flex-col mb-20 capitalize md:items-center md:text-center md:border text-light-black">
      <p className="font-medium text-md">{miniHeadline}</p>
      <h2 className="mb-5 text-4xl font-semibold text-black">{headline}</h2>
      <p className="max-w-3xl normal-case md:w-3/4">{description}</p>
    </div>
  );
}
