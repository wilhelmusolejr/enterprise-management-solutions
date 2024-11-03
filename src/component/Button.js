import React from "react";

export default function Button({ children, className = "", target = "" }) {
  return (
    <a
      href={`#${target}`}
      className={`${className} px-5 py-3  text-white uppercase bg-yellow-500 rounded-lg shadow-lg btn w-max transition duration-300  hover:bg-yellow-600 hover:shadow-xl `}
    >
      {children}
    </a>
  );
}
