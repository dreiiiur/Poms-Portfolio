import "./App.css";
import React, { useState, useEffect } from "react";

import { FaFigma, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { MdDarkMode } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiAdobephotoshop } from "react-icons/si";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiXampp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { PiHandWavingThin } from "react-icons/pi";
import { MdOutlineRateReview } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { PiReadCvLogoBold } from "react-icons/pi";

import { FaUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaMailBulk } from "react-icons/fa";
import { TbSquareLetterPFilled } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { GoHomeFill } from "react-icons/go";
import { IoCall } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import { AiFillProject } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";

import { CiMail } from "react-icons/ci";


import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";
import { PiReadCvLogo } from "react-icons/pi";

import { Link } from "react-scroll";

import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div
        className="min-h-screen max-w-screen flex flex-col bg-transparent dark:bg-[#EEEEEE] max-w-screen mx-auto "
        id="home"
      >
        <header className="gap-4 sticky top-0 z-50 rounded-3xl ">
          <nav className="flex justify-between items-center gap-4 rounded-lg max-w-screen bg-transparent p-4">
            <div className="text-5xl text-gray-700 tracking-wide">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-green-500 text-gray-600 cursor-pointer transition duration-300 ease-in-out"
              >
                <TbSquareLetterPFilled />
              </Link>
            </div>

            {/* Toggle Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-green-800 hover:text-green-500 rounded-full hover:bg-green-100 transition duration-300 ease-in-out"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/3000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-8 lg:space-x-8 text-gray-600 gap-2 text-sm font-bold items-center shadow-lg bg-gradient-to-b from-[#eeeeee] to-gray-200 justify-center pr-4 backdrop-blur-md transition duration-500 py-3 px-6 rounded-xl mx-auto">
               <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                >
                  <GoHomeFill className="hover:text-green-500 cursor-pointer text-xl md:text-2xl"/>
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                >
                  <FaUserCircle className="hover:text-green-500 cursor-pointer text-xl md:text-2xl" />
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                >
                  <AiFillProject className="hover:text-green-500 cursor-pointer text-xl md:text-2xl" />
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                >
                  <MdRateReview className="hover:text-green-500 cursor-pointer text-xl md:text-2xl"/>
                </Link>
              </li>
              <li>
                <Link
                  to="contacts"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                >
                 <IoMail className="hover:text-green-500 cursor-pointer text-xl md:text-2xl"/>
                </Link>
              </li>
             
            </ul>
          </nav>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed font-regular inset-0 bg-gradient-to-b from-white to-green-50 flex flex-col items-center justify-center z-50 gap-8">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-800 hover:text-green-500 cursor-pointer "
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col gap-6 text-gray-800 items-center font-bold" >
              <li className="flex items-center gap-2 text-gray-800 hover:text-green-500 text-lg">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2 text-gray-800 hover:text-green-500 text-lg">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li className="flex items-center gap-2 text-gray-800 hover:text-green-500 text-lg">
                
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="flex items-center gap-2 text-gray-800 hover:text-green-500 text-lg">
                
                <Link
                  to="contacts"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                  onClick={toggleMenu}
                >
                  Contacts
                </Link>
              </li>
              <li>
                <a
                  href="./Poma-Andrei-John.V.CV2025.pdf"
                  className="bg-gradient-to-r from-green-400 to-green-500 text-white rounded-md px-6 py-2 flex items-center gap-2 hover:bg-green-600 hover:text-white cursor-pointer"
                  download
                  onClick={toggleMenu}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}

        <motion.div
          className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-12 rounded-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl mt-12 lg:mt-0">
            <p className="text-gray-600 text-lg mb-2">— Hello There!</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600 leading-tight mb-4">
              I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500 font-sans ">Andrei </span> 
              <PiHandWavingThin className="animate-bounce transition duration-500 ease-in-out inline-block" />, 
              <br />
              Freelance{" "}           
                Web Designer
              <br />
              based in Bulacan.
            </h1>
            <p className="text-gray-500 mt-4 text-base sm:text-lg s">
              I’m a Freelance Web Designer and Front-End Developer based in the Bulacan, Philippines. I have a passion for creating visually stunning and user-friendly websites and apps.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6">
              <button className="bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition hover:scale-105 duration-300 ease-in-out">
                 <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  View my Projects
                </Link>
              </button>
              <button className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white py-2 px-6 rounded-lg font-semibold hover:scale-105 transition duration-300 ease-in-out flex items-center gap-2">
                <a
                  href="./Poma-Andrei-John.V.CV2025.pdf"
                  target="_blank"
                  className="hover:text-white cursor-pointer transition-opacity duration-500 ease-in-out"
                  download>
                  Download CV
                </a>
                <PiReadCvLogoBold className="animate-bounce transition duration-500 ease-in-out text-xl" />
              </button>
            </div>

            {/* Socials */}
            <div className="flex gap-6 justify-center lg:justify-start mt-8 text-3xl text-gray-600 ">
              <a
                href="https://github.com/dreiiiur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-purple-500 hover:scale-105 transition duration-300 ease-in-out" />
              </a>
              <a
                href="https://www.linkedin.com/in/andreipoma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-500 hover:scale-105 transition duration-300 ease-in-out" />
              </a>
              <a
                href="https://www.figma.com/design/TWjRPaDvVcWr8126zL050R/Susihon-ta-Malaybalay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFigma className="hover:text-pink-400 hover:scale-105 transition duration-300 ease-in-out" />
              </a>
              <a
                href="mailto:andreipoma1220@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail className="hover:text-red-500 hover:scale-105 transition duration-300 ease-in-out  " />
              </a>
            </div>
          </div>

          {/* Profile Image Section with Animated Background */}
          <motion.div
            className="relative mt-12 lg:mt-0"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
          >
            {/* Animated Background Circle */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gray-600 circle"
              initial={{ scale: 0.9 }}
              animate={{ scale:1.1 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "reverse",
              }}
            />
            <img
              src="/gradpic123.png"
              alt="Profile"
              className="relative w-[400px] sm:w-[480px] lg:w-[460px] h-auto object-cover rounded-full filter drop-shadow-lg"
            />
          </motion.div>
        </motion.div>


        {/* About Section */}
        <motion.div
          id="about"
          className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 py-20 gap-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={stagger}
        >
          {/* Title */}
          <motion.div
            className="max-w-4xl flex flex-col items-center gap-6"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full" />

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              I am {" "}
              <strong className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">
                Andrei John V. Poma
              </strong>, a fresh graduate IT student from Bulacan and currently a freelance web designer based in San Rafael, Bulacan. I am passionate about creating
              engaging digital experiences through web development and thoughtful UI/UX design.
            </p>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            className="max-w-4xl w-full flex flex-col items-center gap-4"
            variants={fadeIn}
          >
            <h3 className="flex items-center justify-center gap-2 text-2xl font-semibold text-gray-600">
              <FaCode className="text-3xl" /> Technologies I Use
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full" />
            <motion.div
              className="flex flex-wrap justify-center items-center gap-6"
              variants={stagger}
            >
              {[
                FaHtml5,
                FaCss3Alt,
                IoLogoJavascript,
                FaReact,
                RiTailwindCssFill,
                FaBootstrap,
                FaPhp,
                SiMysql,
              ].map((Icon, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  className="hover:scale-110 transition-transform"
                >
                  <Icon className="text-4xl md:text-5xl text-gray-600" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            className="max-w-4xl w-full flex flex-col items-center gap-4 mt-6"
            variants={fadeIn}
          >
            <h3 className="flex items-center justify-center gap-2 text-2xl font-semibold text-gray-600">
              <VscTools className="text-3xl" /> Tools I Use 
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full" />
            <motion.div
              className="flex flex-wrap justify-center items-center gap-6"
              variants={stagger}
            >
              {[
                PiFigmaLogoDuotone,
                VscVscode,
                SiAdobephotoshop,
                FaGithub,
                SiXampp,
              ].map((Icon, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  className="hover:scale-110 transition-transform"
                >
                  <Icon className="text-4xl md:text-5xl text-gray-600" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <div
          className="flex flex-col  items-center justify-center w-full min-h-screen gap-4 px-8 py-16"
          id="projects"
        >
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-center bg-clip-text text-transparent bg-gray-600 mb-12">
            <b className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">Projects</b> that I've worked on and
            contributed to.
          </h2>
          <p className="text-xl sm:text-xl md:text-2xl text-gray-600 mb-12">
            Here are some personal projects, freelance projects, and school
            projects I've contributed to.
          </p>
          {/* Projects Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {/* Project Card Template */}
            {[
              {
                image: "./natureNinjas1.jpg",
                title: "Nature Ninjas",
                description: "Climate Awareness Website for Kids",
                tech: "Django, TailwindCSS",
                github: "https://github.com/ClydeMondero/nature-ninjas.git",
                textColor: "#AAB99A",
              },
              {
                image: "./susihontamalaybalayhero.png",
                title: "Susihon Ta Malaybalay",
                description: "Prototype of a Malaybalay Trail",
                tech: "Figma",
                link: "https://www.figma.com/proto/TWjRPaDvVcWr8126zL050R/Susihon-ta-Malaybalay?node-id=21-43&p=f&t=Do5kUWBLzHge4YXy-1&scaling=contain&content-scaling=fixed&page-id=0%3A1",
                textColor: "#B43F3F",
              },
              {
                image: "./Matcha-Madness.png",
                title: "Task-Matcha",
                description: "Task List",
                tech: "React.js, TailwindCSS",
                github: "https://github.com/dreiiiur/Task-Matcha",
                textColor: "#76885B",
              },
              {
                image: "./industry-system.jpg",
                title: "Industry System",
                description: "Industry System",
                tech: "PHP, mySQL, TailwindCSS",
                github: "https://github.com/dreiiiur/Industry-System",
                textColor: "blue-600",
              },
              {
                image: "./matcha-madness1.png",
                title: "Matcha Madness",
                description: "Matcha Products/Beverages Store Prototype",
                tech: "Figma",
                link: "https://www.figma.com/proto/djbaS2IE0zQJylhWnNCHN4/Matcha-Madness?page-id=0%3A1&node-id=16-2&p=f&viewport=364%2C80%2C0.45&t=ihICf0FVdEPV9a3k-1&scaling=scale-down&content-scaling=fixed",
                textColor: "#76885B",
              },
              {
                image: "./Aural-Nexus.png",
                title: "Aural Nexus UI Design",
                description: "Web-Based Game for Students",
                tech: "Figma",
                link: "https://www.figma.com/proto/J4ejpBHqCimF0xXvvfdZX3/Aural-Nexus--Copy-?page-id=0%3A1&node-id=2105-23&viewport=403%2C1577%2C0.12&t=zY0WhVWoutEKqik6-1&scaling=contain&content-scaling=fixed&starting-point-node-id=2105%3A23",
                textColor: "#76885B",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-full bg-white bg-opacity-30 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <div
                  className="w-full h-64 bg-center bg-cover"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="flex flex-col items-start text-left w-full p-6">
                  <h3
                    className={`text-2xl font-bold text-green-600 mb-2 ${project.textColor}`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-700">{project.description}</p>
                  <ul className="flex flex-col items-start gap-3 mt-6">
                    <li className="flex items-center gap-3">
                      <FaCode className="text-2xl text-gray-600" />
                      <span className="text-lg text-gray-600 hover:text-blue-500">
                        {project.tech}
                      </span>
                    </li>
                    {project.github && (
                      <li className="flex items-center gap-3">
                        <FaGithub className="text-2xl text-gray-600" />
                        <a
                          href={project.github}
                          className="text-lg text-gray-600 hover:text-violet-500"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github
                        </a>
                      </li>
                    )}
                    {project.link && (
                      <li className="flex items-center gap-3">
                        <FaFigma className="text-2xl text-gray-600" />
                        <a
                          href={project.link}
                          className="text-lg text-gray-600 hover:text-violet-500"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Project Link
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <section
          className="min-h-screen w-full flex items-center justify-center py-16"
          id="testimonials"
        >
          <div className="w-full max-w-6xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-center bg-clip-text text-transparent bg-gray-600 mb-12">
              What they say <b className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">About me?</b>
            </h2>
            <p className="text-xl sm:text-xl md:text-2xl text-gray-600 mb-12">
              Here are some testimonials from my clients and people I've worked
              with.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  image: "./karina.jpg",
                  name: "Marrianne Tameta",
                  position: "Full Stack Developer",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
                  rating: 4,
                },
                {
                  image: "./karina.jpg",
                  name: "Josh Laturnas",
                  position: "Backend Developer",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
                  rating: 5,
                },
                {
                  image: "./karina.jpg",
                  name: "Angelo Parungao",
                  position: "Fullstack Developer",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
                  rating: 5,
                },
                {
                  image: "./karina.jpg",
                  name: "Erlinda Bien",
                  position: "Client",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
                  rating: 5,
                },
                {
                  image: "./karina.jpg",
                  name: "Kris",
                  position: "Client",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
                  rating: 5,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105"
                >
                  <div className="flex items-center gap-4 border-b border-gray-300 pb-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="flex flex-col text-start">
                      <p className="text-xl font-semibold text-gray-600">
                        {item.name}
                      </p>
                      <p className="text-sm text-green-600">{item.position}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-center gap-2 mt-4">
                    <label className="text-sm text-gray-600">Rating:</label>
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <span
                        key={rating}
                        className={`text-yellow-500 text-center ${
                          rating <= item.rating ? "" : "text-gray-300"
                        }`}
                      >
                        <FaStar />
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div
          className="flex items-center justify-center w-full min-h-screen gap-6 p-4"
          id="contacts"
        >
          <div className="flex flex-col items-center text-center bg-transparent gap-12 w-full p-6 md:w-full md:px-12">
            <h2 className="flex-row text-2xl sm:text-3xl md:text-4xl font-regular bg-clip-text text-transparent bg-gray-800 text-center flex items-center justify-center gap-2">
              <b className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">Connect</b> with me.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl md:gap-8 lg:gap-12 hover:text-green-600">
              {[
                {
                  href: "https://github.com/dreiiiur",
                  icon: (
                    <FaGithub className="text-2xl md:text-3xl font-mono text-green-600 mr-2 hover:text-green-700" />
                  ),
                  text: "Dreiiiur",
                  textColor: "text-gray-600",
                },
                {
                  href: "https://www.linkedin.com/in/andreipoma/",
                  icon: (
                    <FaLinkedin className="text-2xl md:text-3xl font-mono text-green-600 mr-2 hover:text-green-700" />
                  ),
                  text: "Andrei Poma",
                  textColor: "text-gray-600",
                },
                {
                  href: "https://www.facebook.com/dreiur/",
                  icon: (
                    <FaFacebookMessenger className="text-2xl md:text-3xl font-mono text-green-600 mr-2 hover:text-green-700" />
                  ),
                  text: "Andrei Poma",
                  textColor: "text-[#45474B]",
                },
                {
                  href: "mailto:andreipoma1220@gmail.com",
                  icon: (
                    <SiGmail className="text-2xl md:text-3xl font-mono text-green-600 mr-2 hover:text-green-700" />
                  ),
                  text: "andreipoma1220@gmail.com",
                  textColor: "text-[#45474B]",
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`flex items-center ${link.textColor} font-regular hover:text-gray-600`}
                >
                  {link.icon}
                  <span className="hidden sm:inline text-gray-600">
                    {link.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="  px-6 py-12 rounded-b-lg shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between">
            {/* Branding Section */}
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-start text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                Andrei Poma
              </h1>
              <p className="text-gray-600 text-start sm:text-lg max-w-xl">
                A passionate web developer with a focus on designing and
                building responsive and scalable web applications.
              </p>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Navigation Links */}
              <div className="flex flex-col gap-4 text-start">
                <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                  Links
                </p>
                <Link
                  to="home"
                  className="text-gray-600 hover:text-green-700 cursor-pointer transition"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  className="text-gray-600 hover:text-green-700 cursor-pointer transition"
                >
                  About
                </Link>
                <Link
                  to="projects"
                  className="text-gray-600 hover:text-green-700 cursor-pointer transition"
                >
                  Projects
                </Link>
                <Link
                  to="contacts"
                  className="text-gray-600 hover:text-green-700 cursor-pointer transition"
                >
                  Contact
                </Link>
              </div>

              {/* Social Contacts */}
              <div className="flex flex-col gap-4 text-start">
                <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                  Contacts
                </p>
                <a
                  href="https://www.facebook.com/dreiur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-700 cursor-pointer transition flex items-center"
                >
                  <FaFacebookMessenger className="mr-2" />
                  Andrei Poma
                </a>
                <a
                  href="https://www.linkedin.com/in/andreipoma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-700 cursor-pointer transition flex items-center"
                >
                  <FaLinkedin className="mr-2" />
                  Andrei Poma
                </a>
                <a
                  href="https://github.com/dreiiiur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-700 cursor-pointer transition flex items-center"
                >
                  <FaGithub className="mr-2" />
                  dreiiiur
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
