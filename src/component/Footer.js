import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container flex flex-wrap items-center justify-center gap-10 px-5 mx-auto text-white lg:justify-between py-14 ">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {/* logo */}
          <div className="logo">
            <Image src="/emslogo.svg" alt="Logo" width={175} height={175} />
          </div>

          {/* links */}
          <ul className="flex flex-col gap-5 font-light md:flex-row md:gap-10">
            <li>
              <a href="https://intranet.enterprisemgmtinc.com">
                Contact Support
              </a>
            </li>
            <li>
              <a href="https://intranet.enterprisemgmtinc.com/file_complaint?support_type=human_resources_related_issue&amp;form_option=file_complaint">
                File a complaint
              </a>
            </li>
          </ul>
        </div>

        <a
          href="https://wilhelmus.vercel.app?ref=ems"
          className="font-light text-center "
        >
          Portfolio
        </a>
      </div>
    </footer>
  );
}
