import Image from "next/image";
import Link from "next/link";

// Services - images
import planning_img from "@/assets/images/planning.jpg";
import organizational_img from "@/assets/images/organizational.jpg";
import finance_img from "@/assets/images/finance.png";
import operational_img from "@/assets/images/operational.png";
import technology_img from "@/assets/images/technology.png";

// Map - images
import about_img from "@/assets/images/about.png";
import map_img from "@/assets/images/map.png";

// Header - images
import header_img from "@/assets/images/header.png";

//  The Team - images
import team2_img from "@/assets/images/team/image-2.png";
import tushar_img from "@/assets/images/team/tushar.png";
import userprofile_img from "@/assets/images/team/user-profile.jpg";
import ceo_img from "@/assets/images/team/ceo.png";
import cfo_img from "@/assets/images/team/cfo.png";
import cto_img from "@/assets/images/team/cto.jpg";
import maricel_img from "@/assets/images/team/maricel.png";

// Font Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBoltLightning,
  faRocket,
  faPhone,
  faClock,
  faLocationPin,
  faCheck,
  faCircleCheck,
  faArrowRightLong,
  faAward,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

// Components
import SectionText from "@/component/SectionText";
import ContactInfo from "@/component/ContactInfo";
import Navigator from "@/component/Navigator";
import NavLink from "@/component/NavLink";
import Button from "@/component/Button";

export const metadata = {
  title: "Enterprise Management Solutions",
};

export default function Home() {
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
      emoji: faAward,
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

  let teamss = [
    {
      title: "Excutive Leadership",
      description:
        "Provides strategic direction and vision, guiding our organization towards achieving its goals. With a focus on innovation and growth, our leaders inspire and empower teams to deliver exceptional results and drive long-term success.",
      members: [
        {
          image: ceo_img,
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
          image: cfo_img,
          name: "Desmond Powell",
          position: "Chief Financial Officer",
          email: "cfo@enterprisemgmtinc.com",
          contact: "(667) 354-5268",
        },
        {
          image: cto_img,
          name: "Deepak Kumar",
          position: "Chief Technology & Marketing Officer",
          email: "coo@enterprisemgmtinc.com",
          contact: "(667) 217-4487",
        },
      ],
    },
    {
      title: "Division of Human Resources & Administration",
      description:
        "Focuses on building a supportive and efficient workplace. We manage talent acquisition, employee development, and organizational processes to ensure a productive and engaging environment for all team members.",
      members: [
        {
          image: userprofile_img,
          name: "Vernon Holmes",
          position: "Chief Executive Officer",
          email: "ceo@enterprisemgmtinc.com",
          contact: "(667) 400-0602",
        },
        {
          image: maricel_img,
          name: "Maricel Samson",
          position: "Chief Operations Officer",
          email: "coo@enterprisemgmtinc.com",
          contact: "(667) 400-5656",
        },
        {
          image: userprofile_img,
          name: "Demetrius Brockington",
          position: "Chief Operations Officer",
          email: "coo@enterprisemgmtinc.com",
          contact: "(667) 400-5656",
        },
        {
          image: userprofile_img,
          name: "Demetrius Brockington",
          position: "Chief Operations Officer",
          email: "coo@enterprisemgmtinc.com",
          contact: "(667) 400-5656",
        },
        {
          image: userprofile_img,
          name: "Demetrius Brockington",
          position: "Chief Operations Officer",
          email: "coo@enterprisemgmtinc.com",
          contact: "(667) 400-5656",
        },
      ],
    },
    {
      title: "Division of Finance & Accounting",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum iure temporibus illo, eligendi enim ea laborum atque maiores recusandae.",
      members: [
        {
          image: userprofile_img,
          name: "Jamey Galor",
          position: "Account Receivables Department Manager",
          email: "receivables@enterprisemgmtinc.com",
          contact: "(667) 400-5871",
        },
        {
          image: tushar_img,
          name: "Tushar Patel",
          position: "Account Payables Department Manager",
          email: "accountspayablemanager@enterprisemgmtinc.com",
          contact: "(667) 400-5938",
        },
      ],
    },
  ];

  let teams = [
    {
      title: "Executive Leadership",
      description:
        "Provides strategic direction and vision, guiding our organization towards achieving its goals. With a focus on innovation and growth, our leaders inspire and empower teams to deliver exceptional results and drive long-term success.",
      members: [
        {
          image: userprofile_img,
          name: "Elliot Larson",
          position: "Head of Strategic Initiatives",
          email: "elliot.larson@wilhels.com",
          contact: "(987) 456-3124",
        },
        {
          image: userprofile_img,
          name: "Maya Simmons",
          position: "Director of Operations",
          email: "maya.simmons@wilhels.com",
          contact: "(987) 654-7231",
        },
        {
          image: userprofile_img,
          name: "Cole Atwood",
          position: "Head of Finance",
          email: "cole.atwood@wilhels.com",
          contact: "(987) 234-8176",
        },
        {
          image: userprofile_img,
          name: "Lily Bennett",
          position: "Chief Innovation Officer",
          email: "lily.bennett@wilhels.com",
          contact: "(987) 987-1298",
        },
      ],
    },
    {
      title: "Division of Human Resources & Administration",
      description:
        "Focuses on building a supportive and efficient workplace. We manage talent acquisition, employee development, and organizational processes to ensure a productive and engaging environment for all team members.",
      members: [
        {
          image: userprofile_img,
          name: "Jackson Hayes",
          position: "Human Resources Manager",
          email: "jackson.hayes@wilhels.com",
          contact: "(987) 523-1487",
        },
        {
          image: userprofile_img,
          name: "Grace Ward",
          position: "Talent Acquisition Specialist",
          email: "grace.ward@wilhels.com",
          contact: "(987) 365-4821",
        },
        {
          image: userprofile_img,
          name: "Aaron Reed",
          position: "Workplace Engagement Coordinator",
          email: "aaron.reed@wilhels.com",
          contact: "(987) 489-6372",
        },
        {
          image: userprofile_img,
          name: "Emma Parker",
          position: "Benefits and Payroll Administrator",
          email: "emma.parker@wilhels.com",
          contact: "(987) 257-9634",
        },
        {
          image: userprofile_img,
          name: "Liam Brooks",
          position: "Organizational Development Lead",
          email: "liam.brooks@wilhels.com",
          contact: "(987) 789-3645",
        },
      ],
    },
    {
      title: "Division of Finance & Accounting",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum iure temporibus illo, eligendi enim ea laborum atque maiores recusandae.",
      members: [
        {
          image: userprofile_img,
          name: "Nina Foster",
          position: "Receivables Department Manager",
          email: "nina.foster@wilhels.com",
          contact: "(987) 432-7654",
        },
        {
          image: userprofile_img,
          name: "Evan Scott",
          position: "Payables Department Supervisor",
          email: "evan.scott@wilhels.com",
          contact: "(987) 274-6938",
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

  let activeSection = " ";

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

          {/* nav-button */}
          <a
            href="#contact"
            className="items-center justify-center hidden gap-2 px-5 py-3 text-white uppercase transition duration-300 bg-yellow-500 border rounded-lg shadow-lg lg:flex btn w-max hover:bg-yellow-600 hover:shadow-xl"
          >
            <p>Get in touch</p>
          </a>

          <FontAwesomeIcon icon={faBars} className="lg:hidden " />
        </div>
      </div>

      {/* HEADER */}
      <header className="flex items-center header header-home">
        {/* header - container */}
        <div className="container flex flex-col-reverse items-center justify-center gap-10 px-5 pt-48 pb-20 mx-auto lg:flex-row text-light-white ">
          {/* left */}
          <div className="w-full">
            <p className="text-yellow-500 capitalize ">
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
            <Button className="block mt-8" target="services">
              Get started
            </Button>
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
                  className="px-5 pt-5 bg-white rounded-md shadow-md max-w-80 text-light-black"
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
                  <div className="text-center py-7 ">
                    <h3 className="pb-2 text-lg font-medium text-black md:whitespace-nowrap ">
                      {service.title}
                    </h3>
                    <p className="font-light pb-7 text-md">
                      {service.description}
                    </p>

                    {/* learn more btn */}
                    <Link
                      href={`/service/${service.url}`}
                      className="flex items-center justify-center gap-3 p-2 text-white transition duration-300 bg-yellow-500 border rounded-md hover:bg-yellow-600 hover:shadow-xl"
                    >
                      <p>Learn More</p>
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="w-5 "
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* banner */}
          <div className="flex flex-col items-center justify-center px-5 py-14 md:text-center rounded-xl service-banner">
            <h2 className="mb-5 text-2xl font-semibold text-yellow-500 md:text-4xl">
              {`Let's Drive Success Together`}
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
                className="flex flex-col items-center w-full max-w-xs px-5 text-center border rounded-md py-7 bg-light-white min-w-72 text-light-black "
              >
                <div className="flex items-center justify-center w-10 h-10 ">
                  {/* text */}
                  <FontAwesomeIcon
                    icon={reason.emoji}
                    className="text-yellow-500"
                  />
                </div>
                <h3 className="mt-5 mb-3 text-lg font-medium text-black capitalize">
                  {reason.title}
                </h3>
                <p className="font-light lg:leading-normal text-md ">
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
                          <div className="mt-1">
                            <p className="font-light break-words">
                              {member.email}
                            </p>
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
