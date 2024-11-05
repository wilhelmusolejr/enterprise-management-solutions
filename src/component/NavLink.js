import React from "react";
import Link from "next/link";

export default function NavLink({
  id,
  section,
  activeSection,
  onClick = function () {},
}) {
  return (
    <li>
      <Link href={`#${id}`} scroll={true}>
        {section}
      </Link>
    </li>
  );
}
