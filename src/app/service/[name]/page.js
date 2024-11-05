"use client";

import { useParams } from "next/navigation";

import React from "react";
import Image from "next/image";

// Map - image
import map_img from "@/assets/images/map.png";

// Services - images
import planning_img from "@/assets/images/planning.jpg";
import organizational_img from "@/assets/images/organizational.jpg";
import finance_img from "@/assets/images/finance.png";
import operational_img from "@/assets/images/operational.png";
import technology_img from "@/assets/images/technology.png";

// Font emoji
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faClock,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

// Components
import ContactInfo from "@/component/ContactInfo";
import Navigator from "@/component/Navigator";
import NavLink from "@/component/NavLink";
import Footer from "@/component/Footer";

export default function Page() {
  let activeSection = " ";

  const params = useParams();
  const serviceName = params.name;

  let services = [
    {
      image: planning_img,
      title: "Strategic Planning",
      description:
        "We work closely with businesses to create strategic plans that align with their vision and goals.",
      url: "strategic-planning",
    },
    {
      image: organizational_img,
      title: "Financial Management",
      description:
        "We work closely with businesses to create strategic plans that align with their vision and goals.",
      url: "financial-management",
    },
    {
      image: finance_img,
      title: "Operational Optimization",
      description:
        "We work closely with businesses to create strategic plans that align with their vision and goals.",
      url: "operational-optimization",
    },
    {
      image: operational_img,
      title: "Organizational Development",
      description:
        "We work closely with businesses to create strategic plans that align with their vision and goals.",
      url: "organizational-development",
    },
    {
      image: technology_img,
      title: "Technology Integration",
      description:
        "We work closely with businesses to create strategic plans that align with their vision and goals.",
      url: "technology-integration",
    },
  ];

  const data = services.find((service) => service.url === serviceName);

  return (
    <>
      {/* NAVIGATOR */}
      <Navigator />

      {/* HEADER */}
      <header className="flex items-center header header-service bg-light-white">
        {/* header - container */}
        <div className="container gap-10 px-5 py-48 mx-auto flex-co lg:flex-row text-light-black ">
          {/* left */}
          <div className="flex flex-col items-center justify-center w-full text-center">
            <p className="text-yellow-500 capitalize ">Service</p>
            <h1 className="mb-2 text-4xl font-bold text-black xl:text-5xl xl:leading-normal ">
              {data.title}
            </h1>
            <p className="font-light md:w-2/4 lg:text-lg">{data.description}</p>
          </div>
        </div>
      </header>

      {/* overview */}
      <div className="relative overview ">
        <div className="container px-5 mx-auto text-light-black">
          {/* image */}
          <div className="flex items-center justify-center rounded-md">
            <div className="relative w-full rounded-md lg:w-3/4 h-60 image-parent gray">
              <Image
                src={data.image}
                alt="Description of the image"
                className="z-10 object-cover w-full h-full rounded-md shadow-md"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* text */}
          <div className="flex flex-col gap-5 mx-auto font-light leading-8 md:text-lg mt-28 md:w-3/4 lg:w-2/4">
            <p className="">
              EMS offers responsive in depth remote technical support to address
              implementation strategies, application integration issues,
              customized application plug-ins, Prephix configuration and
              implementation questions. EMS personnel have an extensive
              knowledge of the most commonly used Command and Control (C2)
              applications currently
            </p>
            <p>
              EMS support is available Monday through Friday from 8:00 to 8:00
              PST. With advance notice, off hour Help-desk support can be
              provided to accommodate exercises and mission critical events.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              sapiente nesciunt distinctio impedit nam itaque dolores dolorem
              odio, iure nihil aspernatur. Vitae accusantium nam quam. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Repellat enim
              quisquam sequi atque rem velit harum aperiam ex voluptatum!
              Temporibus!
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" className="min-h-screen bg-gray-900 py-28 contact ">
        <div className="container px-5 mx-auto ">
          {/* Section Text */}
          <div className="flex flex-col mb-20 text-white capitalize md:text-center md:items-center">
            <p className="font-medium text-md">Got a Question?</p>
            <h2 className="mb-8 text-4xl font-semibold ">
              {`We're `} <span className="text-yellow-500">Here to Help</span>
            </h2>
            <p className="max-w-3xl normal-case lg:text-lg font-extralight text-light-white">
              Reach out to us with any questions or concerns, and our team will
              be happy to assist you. Whether you need more information about
              our services or support with a specific need.
            </p>
          </div>

          <div className="flex flex-col items-center lg:flex-row gap-14">
            {/* LEFT */}
            {/* contact info */}
            <div className="flex items-center justify-center w-full text-white">
              {/* left */}
              <div className="flex flex-col gap-5 capitalize md:gap-10">
                {/* Contact Number - CHILD*/}
                <ContactInfo
                  emoji={faPhone}
                  title={"Contact number"}
                  description={`(667) 309-5345 | Available 24/7`}
                />

                {/* Mail - CHILD*/}
                <ContactInfo
                  emoji={faEnvelope}
                  title={"Our mail"}
                  description={`support@enterprisemgmtinc.com`}
                />

                {/* Office Hours   - CHILD*/}
                <ContactInfo
                  emoji={faClock}
                  title={"office hours"}
                  description={`8:00 AM - 5:00 PM | Monday - Friday`}
                />

                {/* Location   - CHILD*/}
                <ContactInfo
                  emoji={faLocationPin}
                  title={"Location"}
                  description={`Room 3B, 3310 Eastern Avenue, Baltimore, MD, 21224`}
                />
              </div>
              {/* right */}
              <div className=""></div>
            </div>

            {/* RIGHT */}
            {/* form */}
            <div className="flex items-center justify-center w-full ">
              <form
                action=""
                className="w-full max-w-md p-5 bg-white rounded-md"
              >
                {/* full name */}
                <div className="flex flex-col gap-2 mb-5">
                  <label htmlFor="name" className="capitalize">
                    Full name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                {/* phone */}
                <div className="flex flex-col gap-2 mb-5">
                  <label htmlFor="phone" className="capitalize">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                {/* email */}
                <div className="flex flex-col gap-2 mb-5">
                  <label htmlFor="email" className="capitalize">
                    email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                {/* message */}
                <div className="flex flex-col gap-2 mb-5">
                  <label htmlFor="message" className="capitalize">
                    message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full p-2 border rounded-md"
                  ></textarea>
                </div>

                {/* nav-button */}
                <div className="w-full px-5 py-3 mt-8 text-center text-white uppercase bg-yellow-500 rounded-lg shadow-lg btn">
                  <p>Get started</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="py-28">
        <div className="container flex items-center justify-center w-11/12 max-w-5xl px-10 mx-auto border rounded-md bg-light-white">
          <div className="flex flex-col items-center max-w-5xl gap-10 py-8 lg:flex-row-reverse">
            {/* Section Text */}
            <div className="flex flex-col w-full capitalize text-light-black">
              <h2 className="mb-8 text-4xl font-semibold text-yellow-500">
                {`We're here for you`}
              </h2>
              <p className="max-w-3xl mb-8 font-light normal-case lg:text-lg ">
                Find us at our convenient location, where we’re ready to assist
                you with all your needs. Visit us for personalized support or to
                learn more about our services.
              </p>

              <div className="flex items-center gap-5 lg:text-lg">
                <FontAwesomeIcon icon={faLocationPin} className="" />
                <p>Room 3B, 3310 Eastern Avenue, Baltimore, MD, 21224</p>
              </div>
            </div>
            {/* image */}
            <div className="flex items-center justify-center ">
              <div className="relative h-60 w-60 md:h-96 md:w-96 ">
                <Image
                  src={map_img}
                  alt="Description of the image"
                  className="object-cover w-full h-full rounded-lg"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
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
    </>
  );
}
