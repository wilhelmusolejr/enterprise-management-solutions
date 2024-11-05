"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function NavLink({
  id,
  section,
  activeSection,
  onClick = function () {},
}) {
  const [url, setUrl] = useState(`#${id}`);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run this code in the browser
      setUrl(window.location.pathname === "/" ? `#${id}` : `/#${id}`);
    }
  }, [id, url]);

  return (
    <li>
      <Link onClick={onClick} href={`${url}`} scroll={true}>
        {section}
      </Link>
    </li>
  );
}
