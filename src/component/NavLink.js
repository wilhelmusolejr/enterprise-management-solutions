import React from "react";
import Link from "next/link";

export default function NavLink({ id, section, activeSection }) {
  return (
    <li>
      <Link href={`#${id}`} scroll={true}>
        {section}
      </Link>
    </li>
  );
}
