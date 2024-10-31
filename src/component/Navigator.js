import React from "react";

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLink from "./NavLink";

export default function Navigator() {
  const sections_id = ["about", "services", "why-us", "our-experts"];

  return (
    <>
      <div className="fixed z-20 w-full py-8 bg-white shadow-md">
        {/* navigator - container */}
        <div className="container flex items-center justify-between px-5 mx-auto ">
          {/* logo */}
          <div className="logo">
            {/* <Image src="/emslogo.svg" alt="Logo" width={175} height={175} /> */}
            <Link href={"/"}>
              <Image
                style={{ width: "auto", height: "auto" }} // Set height to auto
                src="/emslogo_black.svg"
                alt="Logo"
                width={175}
                height={175}
              />
            </Link>
          </div>

          {/* nav-links */}
          <ul className="items-center hidden gap-8 capitalize lg:flex text-light-black">
            <NavLink
              id={"services"}
              section={"services"}
              activeSection={activeSection}
            />
            <NavLink
              id={"about"}
              section={"about"}
              activeSection={activeSection}
            />
            <NavLink
              id={"why-us"}
              section={"Why us"}
              activeSection={activeSection}
            />
            <NavLink
              id={"our-experts"}
              section={"our experts"}
              activeSection={activeSection}
            />

            <NavLink
              id={"careers"}
              section={"careers"}
              activeSection={activeSection}
            />
            <NavLink
              id={"directory"}
              section={"directory"}
              activeSection={activeSection}
            />
          </ul>

          {/* nav-button */}
          <div className="hidden px-5 py-3 text-white uppercase bg-yellow-500 rounded-lg shadow-lg lg:flex btn w-max">
            <p>Get in touch</p>
          </div>

          <FontAwesomeIcon icon={faBars} className="lg:hidden " />
        </div>
      </div>
    </>
  );
}
