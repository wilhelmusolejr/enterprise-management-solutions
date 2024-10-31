"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLink from "./NavLink";

export default function Navigator() {
  const [activeSection, setActiveSection] = useState("");
  const sections_id = ["about", "services", "why-us", "our-experts"];

  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.3, // 50% visibility
  };

  useEffect(() => {
    const sections = sections_id.map((id) => {
      return document.querySelector(`#${id}`); // Return the element
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (activeSection != entry.target.id) {
            setActiveSection(entry.target.id);
          }
        }
      });
    }, options);

    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

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
