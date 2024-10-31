import React from "react";

export default function NavLink({ id, section, activeSection }) {
  return (
    <li>
      <a
        href={`#${id}`}
        className={`${
          activeSection === id ? "font-medium border-b-2 border-yellow-500" : ""
        } capitalize`}
      >
        {section}
      </a>
    </li>
  );
}
