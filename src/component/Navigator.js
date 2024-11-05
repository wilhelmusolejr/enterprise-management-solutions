"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

// Font Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faTimes,
  faPhone,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

// component
import NavLink from "./NavLink";

export default function Navigator() {
  const sections_id = ["about", "services", "why-us", "our-experts"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let activeSection = " ";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* NAVIGATOR */}
      <div className="fixed z-20 w-full pb-8 bg-white shadow-md short-notice">
        {/* small banner */}
        <div className="hidden w-full text-center text-white bg-black border-b-2 sm:block">
          <div className="flex flex-row justify-end gap-5 px-10 py-3 mx-auto ">
            {/* item */}
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-yellow-500" />
              <p className="text-sm">(667) 309-5345</p>
            </div>
            <p className="text-light-black">|</p>
            {/* item */}
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" />
              <p className="text-sm">support@enterprisemgmtinc.com</p>
            </div>
          </div>
        </div>

        {/* navigator - container */}
        <div className="container flex items-center justify-between px-5 mx-auto mt-8 ">
          {/* logo */}
          <div className="logo">
            {/* <Image src="/emslogo.svg" alt="Logo" width={175} height={175} /> */}
            <Link href={"/"}>
              <Image
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

          {/* nav-links for mobile */}
          {isMobileMenuOpen && (
            <ul className="absolute flex flex-col items-center justify-center gap-8 text-lg capitalize bg-white nav-mobile text-light-black lg:hidden">
              <NavLink
                id={"services"}
                section={"services"}
                activeSection={activeSection}
                onClick={toggleMobileMenu}
              />
              <NavLink
                id={"about"}
                section={"about"}
                activeSection={activeSection}
                onClick={toggleMobileMenu}
              />
              <NavLink
                id={"why-us"}
                section={"Why us"}
                activeSection={activeSection}
                onClick={toggleMobileMenu}
              />
              <NavLink
                id={"our-experts"}
                section={"our experts"}
                activeSection={activeSection}
                onClick={toggleMobileMenu}
              />
              <NavLink
                id={"careers"}
                section={"careers"}
                activeSection={activeSection}
                onClick={toggleMobileMenu}
              />
              <NavLink
                id={"directory"}
                section={"directory"}
                activeSection={activeSection}
                onClick={toggleMobileMenu}
              />
            </ul>
          )}

          {/* nav-button */}
          <a
            href="#contact"
            className="items-center justify-center hidden gap-2 px-5 py-3 text-white uppercase transition duration-300 bg-yellow-500 border rounded-lg shadow-lg lg:flex btn w-max hover:bg-yellow-600 hover:shadow-xl"
          >
            <p>Get in touch</p>
          </a>

          {/* nav-button for mobile */}
          <div className="z-20 lg:hidden">
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              onClick={toggleMobileMenu}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
