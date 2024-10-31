import Image from "next/image";
import Link from "next/link";

import planning_img from "@/assets/images/planning.jpg";
import organizational_img from "@/assets/images/organizational.jpg";
import finance_img from "@/assets/images/finance.png";
import operational_img from "@/assets/images/operational.png";
import technology_img from "@/assets/images/technology.png";

import about_img from "@/assets/images/about.png";
import map_img from "@/assets/images/map.png";

import header_img from "@/assets/images/header.png";

import team1_img from "@/assets/images/team/image-1.png";
import team2_img from "@/assets/images/team/image-2.png";
import team3_img from "@/assets/images/team/image-3.png";
import team4_img from "@/assets/images/team/image-4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faBoltLightning,
  faKey,
  faRocket,
  faPhone,
  faClock,
  faLocationPin,
  faCheck,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import SectionText from "@/component/SectionText";
import ContactInfo from "@/component/ContactInfo";
import Navigator from "@/component/Navigator";

// button component
// navigator component
// service card component

export default function Home() {
  let services = [
    {
      image: planning_img,
      title: "Strategic Planning",
      description:
        "We work closely with businesses to create strategic plans that align with their vision and goals.",
    },
    {
      image: organizational_img,
      title: "Financial Management",
      description:
        "We work closely with businesses to create strategic plans that align with their vision and goals.",
    },
    {
      image: finance_img,
      title: "Operational Optimization",
      description:
        "We work closely with businesses to create strategic plans that align with their vision and goals.",
    },
    {
      image: operational_img,
      title: "Organizational Development",
      description:
        "We work closely with businesses to create strategic plans that align with their vision and goals.",
    },
    {
      image: technology_img,
      title: "Technology Integration",
      description:
        "We work closely with businesses to create strategic plans that align with their vision and goals.",
    },
  ];

  let whychooseus = [
    {
      emoji: faEnvelope,
      title: "Expertise ",
      description:
        "With years of experience in corporate management, our team brings a wealth of knowledge and expertise to every client engagement.",
    },
    {
      emoji: faBoltLightning,
      title: "Customized Solutions ",
      description:
        "With years of experience in corporate management, our team brings a wealth of knowledge and expertise to every client engagement.",
    },
    {
      emoji: faKey,
      title: "to Excellence ",
      description:
        "With years of experience in corporate management, our team brings a wealth of knowledge and expertise to every client engagement.",
    },
    {
      emoji: faRocket,
      title: "Collaborative Approach ",
      description:
        "With years of experience in corporate management, our team brings a wealth of knowledge and expertise to every client engagement.",
    },
  ];

  let teams = [
    {
      title: "Excutive Leadership",
      description:
        "Provides strategic direction and vision, guiding our organization towards achieving its goals. With a focus on innovation and growth, our leaders inspire and empower teams to deliver exceptional results and drive long-term success.",
      members: [
        {
          image: team1_img,
          name: "Vernon Holmes",
          position: "Chief Executive Officer",
          email: "ceo@enterprisemgmtinc.com",
          contact: "(667) 400-0602",
        },
        {
          image: team2_img,
          name: "Demetrius Brockington",
          position: "Chief Operations Officer",
          email: "coo@enterprisemgmtinc.com",
          contact: "(667) 400-5656",
        },
        {
          image: team3_img,
          name: "Vernon Holmes",
          position: "Chief Executive Officer",
          email: "ceo@enterprisemgmtinc.com",
          contact: "(667) 400-0602",
        },
        {
          image: team4_img,
          name: "Demetrius Brockington",
          position: "Chief Operations Officer",
          email: "coo@enterprisemgmtinc.com",
          contact: "(667) 400-5656",
        },
      ],
    },
    {
      title: "Division of Human Resources & Administration",
      description:
        "Focuses on building a supportive and efficient workplace. We manage talent acquisition, employee development, and organizational processes to ensure a productive and engaging environment for all team members.",
      members: [
        {
          image: about_img,
          name: "Vernon Holmes",
          position: "Chief Executive Officer",
          email: "ceo@enterprisemgmtinc.com",
          contact: "(667) 400-0602",
        },
        {
          image: about_img,
          name: "Demetrius Brockington",
          position: "Chief Operations Officer",
          email: "coo@enterprisemgmtinc.com",
          contact: "(667) 400-5656",
        },
        {
          image: about_img,
          name: "Demetrius Brockington",
          position: "Chief Operations Officer",
          email: "coo@enterprisemgmtinc.com",
          contact: "(667) 400-5656",
        },
        {
          image: about_img,
          name: "Demetrius Brockington",
          position: "Chief Operations Officer",
          email: "coo@enterprisemgmtinc.com",
          contact: "(667) 400-5656",
        },
      ],
    },
  ];

  let aboutus = [
    "Expert guidance tailored to your unique needs.",
    "Focused on achieving your goals from start to finish.",
    "Committed to client satisfaction every step of the way.",
    "Collaborative approach, listening to what matters most to you.",
  ];

  return (
    <>
      {/* NAVIGATOR */}
      <div className="fixed z-20 w-full py-8 bg-white shadow-md">
        {/* navigator - container */}
        <div className="container flex items-center justify-between px-5 mx-auto ">
          {/* logo */}
          <div className="logo">
            {/* <Image src="/emslogo.svg" alt="Logo" width={175} height={175} /> */}
            <Link href={"/"}>
              <Image
                style={{ width: "100px", height: "auto" }} // Set height to auto
                src="/emslogo_black.svg"
                alt="Logo"
                width={175}
                height={175}
              />
            </Link>
          </div>

          {/* nav-links */}
          <ul className="items-center hidden gap-8 capitalize lg:flex text-light-black">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Why us</a>
            </li>
            <li>
              <a href="#">our experts</a>
            </li>
            <li>
              <a href="#">careers</a>
            </li>
            <li>
              <a href="#">directory</a>
            </li>
          </ul>

          {/* nav-button */}
          <div className="hidden px-5 py-3 text-white uppercase bg-yellow-500 rounded-lg shadow-lg lg:flex btn w-max">
            <p>Get in touch</p>
          </div>

          <FontAwesomeIcon icon={faBars} className="lg:hidden " />
        </div>
      </div>

      {/* HEADER */}
      <header className="flex items-center header">
        {/* header - container */}
        <div className="container flex flex-col-reverse items-center justify-center gap-10 px-5 pt-48 pb-20 mx-auto lg:flex-row text-light-white ">
          {/* left */}
          <div className="w-full">
            <p className="text-sm text-yellow-500 capitalize ">
              Unlock your global workforce
            </p>
            <h1 className="mb-2 text-4xl font-bold leading-normal text-white xl:text-5xl xl:leading-normal ">
              Enterprise Management <br />
              Solutions
            </h1>
            <p className="font-light md:w-3/4 lg:text-lg">
              At Enterprise Management Solutions, we empower businesses to
              streamline operations, optimize performance, and achieve
              sustainable growth.{" "}
            </p>

            {/* nav-button */}
            <div className="px-5 py-3 mt-8 text-white uppercase bg-yellow-500 rounded-lg shadow-lg btn w-max">
              <p>Get started</p>
            </div>
          </div>

          {/* right */}
          <div className="relative flex items-center justify-center w-full h-full rounded-md">
            <div className="relative rounded-md image-parent gray">
              <Image
                src={header_img}
                alt="Description of the image"
                className="z-10 object-cover w-full h-full rounded-md"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>

            <div className="absolute w-full bg-gray-200 rounded-md xl:w-10/12 h-3/5">
              {/* float */}
              <div className="absolute z-10 flex-col hidden gap-3 text-black bottom-5 left-5 md:flex">
                <div className="flex items-center gap-2 p-2 capitalize bg-white rounded-md shadow w-fit">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green-600"
                  />
                  <p>Free quotation</p>
                </div>
                <div className="flex items-center gap-2 p-2 capitalize bg-white rounded-md shadow w-fit">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green-600"
                  />
                  <p>Great Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <div id="services" className=" bg-light-white py-28">
        <div className="container px-5 mx-auto ">
          {/* Section Text */}
          <SectionText
            miniHeadline={"The services"}
            headline={"What we offer to you"}
            highlight="we offer"
            description={`We offer a comprehensive range of services designed to help your
              business thrive. From tailored strategic planning and market
              analysis to innovative solutions.`}
          />

          {/* Service Card Container */}
          <div className="flex items-center justify-center w-full">
            <div className="grid grid-cols-1 gap-5 mb-24 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-md shadow-md max-w-80 text-light-black"
                >
                  {/* Image */}
                  <div className="h-[250px] w-full overflow-hidden rounded-md relative">
                    <Image
                      src={service.image}
                      alt="Description of the image"
                      className="object-cover w-full h-full"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>

                  {/* Text */}
                  <div className="pt-5">
                    <h3 className="text-xl font-medium text-black">
                      {service.title}
                    </h3>
                    <p className="font-light lg:text-lg ">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* banner */}
          <div className="flex flex-col items-center justify-center px-5 py-14 md:text-center rounded-xl service-banner">
            <h2 className="mb-5 text-2xl font-semibold text-yellow-500 md:text-4xl">
              Let's Drive Success Together
            </h2>

            <p className="max-w-2xl lg:text-lg md:w-3/4 font-extralight text-light-white">
              No matter your business size, Enterprise Management Solutions is
              here to help you overcome challenges and achieve your goals.
              Contact us today to see how we can drive your success.
            </p>
            {/* nav-button */}
            <div className="px-5 py-3 mt-8 text-white uppercase bg-yellow-500 rounded-lg shadow-lg btn w-max">
              <p>Get started</p>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div
        id="about"
        className="flex items-center justify-center min-h-screen py-20 bg-gray-900 about"
      >
        <div className="container flex flex-col gap-10 px-5 mx-auto text-white lg:flex-row ">
          {/* left */}
          <div className="w-full ">
            {/* Section Text */}
            <div className="flex flex-col capitalize ">
              <p className=" text-md">Our Story</p>
              <h2 className="max-w-lg mb-8 text-4xl font-semibold leading-normal text-yellow-500 ">
                Enterprises Management Solutions
              </h2>
              <p className="leading-relaxed normal-case lg:leading-relaxed lg:text-lg font-extralight text-light-white">
                At Enterprise Management Solutions, we provide tailored
                corporate management services to optimize operations and drive
                long-term success. Our experienced team partners with clients to
                overcome challenges, seize opportunities, and achieve strategic
                goals.
              </p>

              <div className="mt-5">
                {aboutus.map((about, index) => (
                  <div className="flex items-center gap-5 mb-3" key={index}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-600"
                    />
                    <p className="text-lg">{about}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="relative flex items-center justify-center w-full rounded-md lg:w-80 xl:w-full">
            {/* image */}
            <div className="relative w-full overflow-hidden rounded-md lg:w-80 xl:w-9/12 h-52 md:h-80">
              {/* Image */}
              <Image
                src={about_img}
                alt=""
                className="z-10 object-cover w-full h-full rounded-md "
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>

            <div className="absolute w-full mt-5 bg-yellow-500 rounded-md ms-5 lg:w-80 xl:w-9/12 h-52 md:h-80"></div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div id="why-us" className=" pt-28 whychooseus">
        <div className="container px-5 mx-auto ">
          {/* Section Text */}
          <SectionText
            miniHeadline={"Why choose us"}
            headline={"Why we stand out"}
            highlight="we stand out"
            description={`We are dedicated to delivering exceptional value through
              customized solutions, expert guidance, and a deep understanding of
              your business needs.`}
          />

          {/* card */}
          <div className="flex flex-wrap justify-center gap-5 mb-24 ">
            {whychooseus.map((reason, index) => (
              <div
                key={index}
                className="w-full max-w-xs p-5 border rounded-md bg-light-white min-w-72 text-light-black "
              >
                {/* text */}
                <FontAwesomeIcon
                  icon={reason.emoji}
                  className="text-yellow-500"
                />
                <h3 className="mt-5 mb-3 text-xl font-medium text-black capitalize">
                  {reason.title}
                </h3>
                <p className="font-light lg:leading-normal lg:text-lg ">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div id="our-experts" className=" bg-light-white py-28">
        <div className="container px-5 mx-auto ">
          {/* Section Text */}
          <SectionText
            miniHeadline={"Our Experts"}
            headline={"Meet the team"}
            highlight="the team"
            description={`Our team is made up of skilled professionals with deep industry
              knowledge and a passion for delivering results.`}
          />

          {/* card */}
          <div className="flex flex-col gap-20 ">
            {teams.map((team, index) => (
              <div className="" key={index}>
                {/* team introduction */}
                {/* text */}
                <div className="mb-10 text-light-black">
                  <h3 className="mb-2 text-2xl font-medium text-black">
                    {team.title}
                  </h3>
                  <p className="font-light lg:text-lg md:w-3/4">
                    {team.description}
                  </p>
                </div>

                <div className="flex justify-center w-full">
                  {/* 250px */}

                  <div className="grid w-11/12 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* Members */}
                    {team.members.map((member, index) => (
                      <div key={index} className="rounded-md text-light-black">
                        {/* Image */}
                        <div className="relative w-full overflow-hidden rounded-md h-80">
                          <Image
                            src={member.image}
                            alt="Description of the image"
                            className="object-cover w-full h-full"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          />
                        </div>

                        {/* Text */}
                        <div className="pt-5">
                          <div className="">
                            <h3 className="text-xl font-medium text-black">
                              {member.name}
                            </h3>
                            <p className="font-light">{member.position}</p>
                          </div>
                          <div className="">
                            <p className="font-light">{member.email}</p>
                            <p className="font-light">{member.contact}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="min-h-screen bg-gray-900 py-28 contact ">
        <div className="container px-5 mx-auto ">
          {/* Section Text */}
          <div className="flex flex-col mb-20 text-white capitalize md:text-center md:items-center">
            <p className="font-medium text-md">The services</p>
            <h2 className="mb-8 text-4xl font-semibold ">
              We're <span className="text-yellow-500">Here to Help</span>
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
                We're here for you
              </h2>
              <p className="max-w-3xl mb-8 normal-case lg:text-lg ">
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
                <a href="#">Contact Support</a>
              </li>
              <li>
                <a href="#">File a complaint</a>
              </li>
            </ul>
          </div>

          <p className="font-light text-center ">
            © 2024 Enterprise Management Solutions. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
