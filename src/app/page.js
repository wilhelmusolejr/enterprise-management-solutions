import Image from "next/image";

import planning_img from "@/assets/images/planning.jpg";
import organizational_img from "@/assets/images/organizational.jpg";
import finance_img from "@/assets/images/finance.png";
import operational_img from "@/assets/images/operational.png";
import technology_img from "@/assets/images/technology.png";

import about_img from "@/assets/images/about.png";
import map_img from "@/assets/images/map.png";

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
} from "@fortawesome/free-solid-svg-icons";

import ServiceCard from "@/component/ServiceCard";

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
      ],
    },
  ];

  return (
    <>
      {/* NAVIGATOR */}
      <div className="fixed z-10 w-full py-8 bg-white shadow-md">
        {/* navigator - container */}
        <div className="container flex items-center justify-between px-5 mx-auto lg:px-0">
          {/* logo */}
          <div className="logo">
            <Image src="/emslogo.svg" alt="Logo" width={175} height={175} />
          </div>

          {/* nav-links */}
          <ul className="flex items-center hidden gap-8 capitalize text-light-black">
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
          <div className="hidden px-5 py-3 text-white uppercase bg-yellow-500 rounded-lg shadow-lg btn w-max">
            <p>Get in touch</p>
          </div>

          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      {/* HEADER */}
      <header className="flex items-center min-h-screen ">
        {/* header - container */}
        <div className="container flex flex-col px-5 mx-auto text-light-black lg:px-0">
          {/* left */}
          <div className="">
            <p className="text-sm text-yellow-500 capitalize ">
              Unlock your global workforce
            </p>
            <h1 className="mb-2 text-4xl font-bold text-black">
              Enterprise Management <br />
              Solutions
            </h1>
            <p>
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
          <div className="bg-red-500 rounded-md "></div>
        </div>
      </header>

      {/* SERVICES */}
      <div className=" bg-light-white py-28">
        <div className="container px-5 mx-auto lg:px-0">
          {/* Section Text */}
          <div className="flex flex-col items-center mb-24 text-center capitalize text-light-black">
            <p className="font-medium text-md">The services</p>
            <h2 className="mb-8 text-4xl font-semibold text-black">
              What <span className="text-yellow-500">we offer</span> to you
            </h2>
            <p className="max-w-3xl normal-case">
              We offer a comprehensive range of services designed to help your
              business thrive. From tailored strategic planning and market
              analysis to innovative solutions.
            </p>
          </div>

          {/* service card */}
          <div className="flex flex-wrap justify-center gap-5 mb-24 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full max-w-xs p-5 bg-white rounded-md min-w-72 text-light-black "
              >
                {/* image */}
                <div className="h-[200px] w-full overflow-hidden rounded-md relative">
                  <Image
                    src={service.image}
                    alt="Description of the image"
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>

                {/* text */}
                <div className="pt-5">
                  <h3 className="text-xl font-medium text-black">
                    {service.title}
                  </h3>
                  <p className="font-light ">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* banner */}
          <div className="flex flex-col items-center justify-center px-5 py-10 text-center rounded-xl service-banner">
            <h2 className="mb-5 text-4xl font-semibold text-yellow-500">
              Let's Drive Success Together
            </h2>

            <p className="text-light-white">
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
      <div className="min-h-screen py-10 bg-gray-900 about ">
        <div className="container flex flex-col gap-10 px-5 mx-auto lg:px-0">
          {/* left */}
          <div className="">
            {/* Section Text */}
            <div className="flex flex-col capitalize ">
              <p className="text-white text-md">Our Story</p>
              <h2 className="mb-8 text-4xl font-semibold text-yellow-500">
                Enterprises Management Solutions
              </h2>
              <p className="max-w-3xl font-thin normal-case text-light-white">
                At Enterprise Management Solutions, we provide tailored
                corporate management services to optimize operations and drive
                long-term success. Our experienced team partners with clients to
                overcome challenges, seize opportunities, and achieve strategic
                goals.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="">
            <div className="h-[250px] relative w-full overflow-hidden rounded-md ">
              <Image
                src={about_img}
                alt=""
                className="object-cover w-full h-full"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className=" py-28">
        <div className="container px-5 mx-auto lg:px-0">
          {/* Section Text */}
          <div className="flex flex-col items-center mb-24 text-center capitalize text-light-black">
            <p className="font-medium text-md">Why choose us</p>
            <h2 className="mb-8 text-4xl font-semibold text-black">
              Why <span className="text-yellow-500">we stand out</span>
            </h2>
            <p className="max-w-3xl normal-case">
              We are dedicated to delivering exceptional value through
              customized solutions, expert guidance, and a deep understanding of
              your business needs.
            </p>
          </div>

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
                <p className="font-light ">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className=" bg-light-white py-28">
        <div className="container px-5 mx-auto lg:px-0">
          {/* Section Text */}
          <div className="flex flex-col items-center mb-24 text-center capitalize text-light-black">
            <p className="font-medium text-md">Our Experts</p>
            <h2 className="mb-8 text-4xl font-semibold text-black">
              Meet <span className="text-yellow-500">the team</span>
            </h2>
            <p className="max-w-3xl normal-case">
              Our team is made up of skilled professionals with deep industry
              knowledge and a passion for delivering results.
            </p>
          </div>

          {/* service card */}
          <div className="flex flex-col gap-20 mb-24 ">
            {teams.map((team, index) => (
              <div className="" key={index}>
                {/* text */}
                <div className="mb-5 text-light-black">
                  <h3 className="mb-2 text-2xl font-medium text-black">
                    {team.title}
                  </h3>
                  <p className="font-light ">{team.description}</p>
                </div>

                <div className="flex flex-wrap gap-10">
                  {team.members.map((member, index) => (
                    <div
                      key={index}
                      className="w-full max-w-xs rounded-md min-w-72 text-light-black "
                    >
                      {/* image */}
                      <div className="h-[200px] w-full overflow-hidden rounded-md relative">
                        <Image
                          src={member.image}
                          alt="Description of the image"
                          className="object-cover w-full h-full"
                          fill
                        />
                      </div>

                      {/* text */}
                      <div className="pt-5">
                        <div className="">
                          <h3 className="text-xl font-medium text-black">
                            {member.name}
                          </h3>
                          <p className="font-light ">{member.position}</p>
                        </div>
                        <div className="">
                          <p className="font-light ">{member.email}</p>
                          <p className="font-light ">{member.contact}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="min-h-screen bg-gray-900 py-28 contact ">
        <div className="container px-5 mx-auto lg:px-0">
          {/* Section Text */}
          <div className="flex flex-col items-center mb-20 text-center text-white capitalize">
            <p className="font-medium text-md">The services</p>
            <h2 className="mb-8 text-4xl font-semibold ">
              We're <span className="text-yellow-500">Here to Help</span>
            </h2>
            <p className="max-w-3xl font-thin normal-case text-light-white">
              Reach out to us with any questions or concerns, and our team will
              be happy to assist you. Whether you need more information about
              our services or support with a specific need.
            </p>
          </div>

          <div className="flex flex-col gap-14">
            {/* LEFT */}
            {/* contact info */}
            <div className="text-white">
              {/* left */}
              <div className="flex flex-col gap-5 capitalize">
                {/* Contact Number - CHILD*/}
                <div className="flex items-center gap-5">
                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-yellow-500"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-2xl font-medium">Contact number</h3>
                    <p className="text-sm text-light-white">
                      (667) 309-5345 |{" "}
                      <span className="text-yellow-500">Available 24/7</span>
                    </p>
                  </div>
                </div>

                {/* Mail - CHILD*/}
                <div className="flex items-center gap-5 ">
                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-yellow-500"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-2xl font-medium">Our mail</h3>
                    <p className="text-sm text-light-white">
                      (667) 309-5345 |{" "}
                      <span className="text-yellow-500">Available 24/7</span>
                    </p>
                  </div>
                </div>

                {/* Office Hours   - CHILD*/}
                <div className="flex items-center gap-5 ">
                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-yellow-500"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-2xl font-medium">office hours</h3>
                    <p className="text-sm text-light-white">
                      8:00 AM - 5:00 PM | Monday - Friday
                    </p>
                  </div>
                </div>

                {/* Location   - CHILD*/}
                <div className="flex items-center gap-5 ">
                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      className="text-yellow-500"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-2xl font-medium">Location</h3>
                    <p className="text-sm text-light-white">
                      Room 3B, 3310 Eastern Avenue, Baltimore, MD, 21224
                    </p>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className=""></div>
            </div>

            {/* RIGHT */}
            {/* form */}
            <div className="">
              <form action="" className="p-5 bg-white rounded-md">
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
        <div className="container w-11/12 px-5 mx-auto border rounded-md lg:px-0 bg-light-white">
          <div className="flex flex-col gap-10 py-8">
            {/* Section Text */}
            <div className="flex flex-col capitalize text-light-black">
              <h2 className="mb-8 text-4xl font-semibold text-yellow-500">
                We're here for you
              </h2>
              <p className="max-w-3xl mb-8 normal-case ">
                Find us at our convenient location, where we’re ready to assist
                you with all your needs. Visit us for personalized support or to
                learn more about our services.
              </p>

              <div className="flex gap-5">
                <FontAwesomeIcon icon={faLocationPin} className="" />
                <p>Room 3B, 3310 Eastern Avenue, Baltimore, MD, 21224</p>
              </div>
            </div>

            <div className="">
              <Image
                src={map_img}
                alt="Description of the image"
                className="object-cover w-full h-full"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="container px-5 py-10 mx-auto text-white bg-black lg:px-0">
          {/* logo */}
          <div className="logo">
            <Image src="/emslogo.svg" alt="Logo" width={175} height={175} />
          </div>

          <ul className="pt-10 font-thin ">
            <li>
              <a href="#">Contact Support</a>
            </li>
            <li>
              <a href="#">File a complaint</a>
            </li>
          </ul>

          <p className="mt-10 font-thin">
            © 2024 Enterprise Management Solutions. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
