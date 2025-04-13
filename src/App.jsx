
import './App.css'
import React, { useState, useEffect } from 'react';

import { IoMdDownload } from "react-icons/io";
import { FaFigma, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { MdDarkMode } from "react-icons/md";

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

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import { FaUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaMailBulk } from "react-icons/fa";
import { TbSquareLetterPFilled } from "react-icons/tb";




import jsPDF from 'jspdf';

import { Link } from 'react-scroll';


import './App.css'
import { FaM } from 'react-icons/fa6';

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
      <div className="min-h-screen max-w-screen flex flex-col bg-transparent max-w-screen mx-auto" id="home">
        <header className="gap-4 sticky top-0 bg-transparent z-50 rounded-3xl backdrop-blur-lg bg-white/30">
          <nav className="flex justify-between items-center gap-4 rounded-lg max-w-screen bg-transparent p-4">
            <div className="text-5xl font-black text-green-800 tracking-wide">
              <Link to="home" smooth={true} duration={500} className="hover:text-green-700 cursor-pointer">
              <TbSquareLetterPFilled />
              </Link>
            </div>
            {/* Toggle Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-green-800 hover:text-green-500 cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-8 lg:space-x-8 text-gray-800 gap-2 text-sm font-bold items-center pr-4">
              <li>
                <Link to="about" smooth={true} duration={500} className="hover:text-green-800 cursor-pointer">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} className="hover:text-green-800 cursor-pointer">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link to="contacts" smooth={true} duration={500} className="hover:text-green-800 cursor-pointer">
                  CONTACTS
                </Link>
              </li>
              <li>
                <a
                  href="./Poma-Andrei-John.V.CV.pdf"
                  target="_blank"
                  className="hover:text-white cursor-pointer transition-opacity duration-500 ease-in-out"
                  download
                >
                  <button className="bg-green-800 text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-green-700 hover:text-white">
                    RESUME
                  </button>
                </a>
              </li>
              <li>
                <a href="" target="_blank" className="hover:text-green-800">
                  <button className="">
                    <MdDarkMode className="text-2xl" />
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </header>


        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed font-regular inset-0 bg-white flex flex-col  justify-center items-center z-50 gap-8">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-800 hover:text-green-500 cursor-pointer"
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
            <ul className="flex flex-col items-start gap-6 text-gray-800 justify-center p-4">
              <li className="flex items-center gap-2 text-gray-800 hover:text-green-500 text-lg">
                <FaUser className="text-gray-800 hover:text-green-500" />
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
              <li className="flex items-center gap-2 text-gray-800 text-lg">
                <GrProjects className="text-gray-800" />
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
                <FaMailBulk className="text-gray-800 hover:text-green-500" />
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
                  href="./Poma-Andrei-John.V.CV.pdf"
                  className="bg-green-800 text-white rounded-md px-6 py-1 flex items-center gap-2 hover:bg-green-600 hover:text-white cursor-pointer font-bold"
                  download
                  onClick={toggleMenu}
                >
                  Resume
                </a>
              </li>
              <li className="flex items-center gap-2 text-white text-xl font-bold">
                <a
                  href=""
                  className="items-center gap-2 hover:text-[#E1EACD] cursor-pointer"

                  onClick={toggleMenu}
                >
                  <MdDarkMode className="text-centeritems-center gap-2 text-2xl hover:text-[#E1EACD]" />
                </a>
              </li>
            </ul>
          </div>
        )}
<motion.div
  className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 py-12 bg-white overflow-hidden rounded-xl shadow-xl"
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {/* Profile Image */}
  <motion.div
    className="flex justify-center items-center w-full md:w-1/2 mb-10 md:mb-0"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <motion.img
      src="./gradpic1.jpg"
      alt="Profile"
      className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[550px] lg:h-[600px] rounded-[2rem] object-cover shadow-xl"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  </motion.div>

  {/* Content Section */}
  <motion.div
    className="flex flex-col items-center md:items-start text-center md:text-left text-gray-800 gap-6 w-full md:w-1/2"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {/* Introductory Text */}
    <motion.h1
      className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 1,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      <Typewriter
        words={["Kamusta? Ako si Andrei!", "Hello, I'm Andrei!"]}
        loop={Infinity}
        typeSpeed={100}
        deleteSpeed={60}
        delaySpeed={2000}
      />
    </motion.h1>

    {/* Title */}
    <motion.p
      className="text-gray-600 text-lg sm:text-xl md:text-2xl font-regular leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
    >
      Aspiring Front-End Developer & UI/UX Designer. I specialize in creating engaging and visually appealing user interfaces.
    </motion.p>

    {/* Social Links */}
    <motion.div
      className="flex flex-wrap justify-center md:justify-start gap-4 text-3xl"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.5,
        duration: 1,
        ease: [0.3, 0.7, 0.3, 1],
      }}
    >
      {[
        {
          href: "https://github.com/dreiiiur",
          icon: <FaGithub className="text-green-800 hover:text-[#C5BAFF]" />,
        },
        {
          href: "https://www.linkedin.com/in/andreipoma/",
          icon: <FaLinkedin className="text-green-800 hover:text-[#9ACBD0]" />,
        },
        {
          href: "https://www.figma.com/design/TWjRPaDvVcWr8126zL050R/Susihon-ta-Malaybalay?m=auto&t=gpOC35CdVSYqT0x4-1",
          icon: <FaFigma className="text-green-800 hover:text-[#F6C794]" />,
        },
        {
          href: "mailto:andreipoma1220@gmail.com",
          icon: <SiGmail className="text-green-800 hover:text-[#FF8383]" />,
        },
      ].map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </motion.div>

    {/* Buttons */}
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1.5 }}
    >
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="bg-gradient-to-bl from-green-600 to-green-800 text-white font-bold py-2 px-6 rounded-lg cursor-pointer text-center"
      >
        Projects
      </Link>
      <Link
        to="contacts"
        smooth={true}
        duration={500}
        className="bg-white text-green-800 border-2 border-green-800 hover:bg-gradient-to-bl hover:from-green-600 hover:to-green-800 hover:text-white font-bold py-2 px-6 rounded-lg cursor-pointer text-center"
      >
        Contact
      </Link>
    </motion.div>
  </motion.div>
</motion.div>


        {/* About Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-transparent rounded-xl gap-6 p-4"
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} // Trigger animation on repeated scrolls, 50% visibility
          variants={stagger}
        >
          {/* Left Section - Profile Picture */}
          <motion.div
            className="flex justify-center items-center md:w-1/2"
            variants={fadeIn}
          >
            <img
              src="./pis.jpg"
              alt="Profile"
              className="w-75 h-70 md:w-screen md:h-1/2 object-cover shadow rounded-xl"
            />
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            className="flex flex-col text-left text-[#727D73] gap-6 max-w-3xl md:w-1/2"
            variants={fadeIn}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-green-800">
              About Me?
            </p>
            <p className="leading-relaxed text-gray-600 text-lg md:text-xl lg:text-2xl">
              I'm currently a 4th year student, taking Bachelor of Science in Information Technology at{" "}
              <b>Bulacan State University Bustos Campus</b>. I have a strong passion for web development
              and I'm eager to learn new technologies and grow as a developer.
            </p>

            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 font-mono flex items-center gap-2">
                <FaCode className="text-3xl md:text-4xl lg:text-4xl" /> Technologies
              </p>
              <motion.div
                className="flex flex-wrap items-center gap-4 mt-4"
                variants={stagger}
              >
                <motion.div variants={fadeIn}><FaHtml5 className="text-4xl text-blue-400" /></motion.div>
                <motion.div variants={fadeIn}><FaCss3Alt className="text-4xl text-[#264de4]" /></motion.div>
                <motion.div variants={fadeIn}><IoLogoJavascript className="text-4xl text-[#F0DB4F]" /></motion.div>
                <motion.div variants={fadeIn}><FaReact className="text-4xl text-[#61DBFB]" /></motion.div>
                <motion.div variants={fadeIn}><RiTailwindCssFill className="text-4xl text-[#a5f3fc]" /></motion.div>
                <motion.div variants={fadeIn}><FaBootstrap className="text-4xl text-[#563d7c]" /></motion.div>
                <motion.div variants={fadeIn}><FaPhp className="text-4xl text-[#AEB2D5]" /></motion.div>
                <motion.div variants={fadeIn}><SiMysql className="text-4xl text-blue-500" /></motion.div>
              </motion.div>
            </div>

            <div>
              <p className="text-2xl md:text-3xl font-bold text-green-800 flex items-center gap-2">
                <VscTools className="text-3xl md:text-4xl" /> Tools
              </p>
              <motion.div
                className="flex flex-wrap items-center gap-4 mt-4"
                variants={stagger}
              >
                <motion.div variants={fadeIn}><PiFigmaLogoDuotone className="text-4xl text-[#0acf83]" /></motion.div>
                <motion.div variants={fadeIn}><VscVscode className="text-4xl text-[#0078d7]" /></motion.div>
                <motion.div variants={fadeIn}><SiAdobephotoshop className="text-4xl text-[#4FCCFE]" /></motion.div>
                <motion.div variants={fadeIn}><FaGithub className="text-4xl text-[#6e5494]" /></motion.div>
                <motion.div variants={fadeIn}><SiXampp className="text-4xl text-orange-500" /></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div
          className="flex flex-col items-center justify-center w-full min-h-screen bg-transparent gap-8 px-6 py-12"
          id="projects"
        >
          {/* Section Title */}
          <p
            className="text-3xl md:text-4xl font-extrabold text-green-800 text-center mb-8"
          >
            PROJECTS
          </p>

          {/* Projects Container */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            {/* Project Card 1 */}
            <div
              className="flex flex-col items-center w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg "
            >
              <div
                className="w-full h-64 bg-center bg-cover"
                style={{ backgroundImage: `url("./natureNinjas1.jpg")` }}
              ></div>
              <div className="flex flex-col items-start text-left w-full p-6">
                <p className="text-2xl font-bold text-[#AAB99A]">Nature Ninjas</p>
                <p className="text-lg text-[#727D73]">Climate Awareness Website for Kids</p>
                <ul className="flex flex-col items-start gap-2 mt-4">
                  <li className="flex items-start gap-2">
                    <FaCode className="text-2xl text-gray-600" />
                    <span className="text-lg text-gray-600 hover:text-blue-500">
                      Django, TailwindCSS
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaGithub className="text-2xl text-gray-600" />
                    <a
                      href="https://github.com/ClydeMondero/nature-ninjas.git"
                      className="text-lg text-gray-600 hover:text-violet-500"
                      target="_blank">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Project Card 2 */}
            <div
              className="flex flex-col items-center w-full bg-gray-100  rounded-lg overflow-hidden shadow-lg"
            >
              <div
                className="w-full h-64 bg-center bg-cover"
                style={{ backgroundImage: `url("./susihontamalaybalayhero.png")` }}
              ></div>
              <div className="flex flex-col items-start text-left w-full p-6">
                <p className="text-2xl font-bold text-[#B43F3F]">Susihon Ta Malaybalay</p>
                <p className="text-lg text-[#727D73]">Prototype of a Malaybalay Trail</p>
                <ul className="flex flex-col items-start gap-2 mt-4">
                  <li className="flex items-start gap-2">
                    <FaFigma className="text-2xl text-gray-600" />
                    <span className="text-lg text-gray-600 hover:text-blue-500">
                      Figma
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaFigma className="text-2xl text-gray-600" />
                    <a
                      href="https://www.figma.com/proto/TWjRPaDvVcWr8126zL050R/Susihon-ta-Malaybalay?node-id=21-43&p=f&t=Do5kUWBLzHge4YXy-1&scaling=contain&content-scaling=fixed&page-id=0%3A1"
                      className="text-lg text-gray-600 hover:text-violet-500"
                      target="_blank">
                      Project Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Project Card 3 */}
            <div
              className="flex flex-col items-center w-full bg-gray-100  rounded-lg overflow-hidden shadow-lg"
            >
              <div
                className="w-full h-64 bg-center bg-cover"
                style={{ backgroundImage: `url("./Matcha-Madness.png")` }}
              ></div>
              <div className="flex flex-col items-start text-left w-full p-6">
                <p className="text-2xl font-bold text-[#76885B]">Task-Matcha</p>
                <p className="text-lg text-[#727D73]">Task List</p>
                <ul className="flex flex-col items-start gap-2 mt-4">
                  <li className="flex items-start gap-2">
                    <FaCode className="text-2xl text-gray-600" />
                    <span className="text-lg text-gray-600 hover:text-[#76885B]">
                      React.js, TailwindCSS
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaGithub className="text-2xl text-gray-600" />
                    <a
                      href="https://github.com/dreiiiur/Task-Matcha"
                      className="text-lg text-gray-600 hover:text-violet-500"
                      target="_blank">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Project Card 4 */}
            <div
              className="flex flex-col items-center w-full bg-gray-100  rounded-lg overflow-hidden shadow-lg"
            >
              <div
                className="w-full h-64 bg-center bg-cover"
                style={{ backgroundImage: `url("./industry-system.jpg")` }}
              ></div>
              <div className="flex flex-col items-start text-left w-full p-6">
                <p className="text-2xl font-bold text-blue-600">Industry System</p>
                <p className="text-lg text-[#727D73]">Industry System</p>
                <ul className="flex flex-col items-start gap-2 mt-4">
                  <li className="flex items-start gap-2">
                    <FaCode className="text-2xl text-gray-600" />
                    <span className="text-lg text-gray-600 hover:text-blue-500">
                      PHP, mySQL, TailwindCSS
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaGithub className="text-2xl text-gray-600" />
                    <a
                      href="https://github.com/dreiiiur/Industry-System"
                      className="text-lg text-gray-600 hover:text-violet-500"
                    target="_blank">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            
            {/* Project Card 5 */}
            <div
              className="flex flex-col items-center w-full bg-gray-100  rounded-lg overflow-hidden shadow-lg"
            >
              <div
                className="w-full h-64 bg-center bg-cover"
                style={{ backgroundImage: `url("./matcha-madness1.png")` }}
              ></div>
              <div className="flex flex-col items-start text-left w-full p-6">
                <p className="text-2xl font-bold text-[#76885B]">Matcha Madness</p>
                <p className="text-lg text-[#727D73]">Matcha Products/Beverages Store Prototype</p>
                <ul className="flex flex-col items-start gap-2 mt-4">
                  <li className="flex items-start gap-2">
                    <FaFigma className="text-2xl text-gray-600" />
                    <span className="text-lg text-gray-600 hover:text-blue-500">
                      Figma
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaFigma className="text-2xl text-gray-600" />
                    <a
                      href="https://www.figma.com/proto/djbaS2IE0zQJylhWnNCHN4/Matcha-Madness?page-id=0%3A1&node-id=16-2&p=f&viewport=364%2C80%2C0.45&t=ihICf0FVdEPV9a3k-1&scaling=scale-down&content-scaling=fixed"
                      className="text-lg text-gray-600 hover:text-violet-500"
                    target="_blank">
                      Project Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Section */}
        <div className="flex items-center justify-center w-full min-h-screen bg-transparent rounded-xl gap-6 p-4" id="contacts">
          <div className="flex flex-col items-center text-center bg-transparent gap-12 w-full p-6 md:w-full md:px-12">
            <p className="text-3xl font-bold text-green-800 text-center flex items-center justify-center gap-2">📧 Get in Touch with me.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl md:gap-8 lg:gap-12 hover:text-green-600">
              {[
                {
                  href: "https://github.com/dreiiiur",
                  icon: <FaGithub className="text-2xl md:text-3xl font-mono text-green-800 mr-2 hover:text-green-700" />,
                  text: "Dreiiiur",
                  textColor: "text-gray-600"
                },
                {
                  href: "https://www.linkedin.com/in/andreipoma/",
                  icon: <FaLinkedin className="text-2xl md:text-3xl font-mono text-green-800 mr-2 hover:text-green-700" />,
                  text: "Andrei Poma",
                  textColor: "text-gray-600"
                },
                {
                  href: "https://www.facebook.com/dreiur/",
                  icon: <FaFacebookMessenger className="text-2xl md:text-3xl font-mono text-green-800 mr-2 hover:text-green-700" />,
                  text: "Andrei Poma",
                  textColor: "text-[#45474B]"
                },
                {
                  href: "mailto:andreipoma1220@gmail.com",
                  icon: <SiGmail className="text-2xl md:text-3xl font-mono text-green-800 mr-2 hover:text-green-700" />,
                  text: "andreipoma1220@gmail.com",
                  textColor: "text-[#45474B]"
                },
              ].map((link, index) => (
                <a key={index} href={link.href} className={`flex items-center ${link.textColor} font-semibold hover:text-gray-600`}>
                  {link.icon}
                  <span className="hidden sm:inline">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="w-full bg-transparent p-6 rounded-t-xl md:flex md:flex-row md:justify-between md:items-center md:gap-6">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
            <p className="text-green-800 font-bold text-2xl">Andrei Poma</p>
            <p className="text-gray-600 font-medium">© 2025 Pomsicles. All rights reserved.</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right md:w-1/2">
            <p className="text-[#45474B] font-medium">Contact Us:</p>
            <a
              href="mailto:andreipoma1220@gmail.com"
              className="text-green-800 font-semibold flex items-center hover:underline"
            >
              <SiGmail className="text-2xl text-green-800 mr-2" />
              andreipoma1220@gmail.com
            </a>
          </div>
          {/* Chat Bot */}
          {/* <div className="flex flex-col items-center md:items-end text-center md:text-right md:w-1/2">
            <p className="text-[#45474B] font-medium">Talk to us:</p>
            <div className="bg-white rounded-lg p-4 w-96">
              <p className="text-sm font-medium">Chat Bot</p>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Type something..."
                onChange={(e) => {
                  const inputText = e.target.value;
                  const responses = [
                    "I see what you did there!",
                    "That's a great question!",
                    "I'm not sure I understand.",
                    "I'll be right back, I need to go charge my battery.",
                  ];
                  const randomResponse = responses[Math.floor(Math.random() * responses.length)];

                  fetch("https://api.gemini.ai/v1/generate", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "User-Agent": "Pomsicles Website",
                      "Authorization": "Bearer 9f7faa7c-dc2c-4e1d-9a6e-6f9a3ddc4d4c",
                    },
                    body: JSON.stringify({ input: inputText }),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      const aiResponse = data.response || "No response from AI.";
                      alert(`${randomResponse} ${aiResponse}`);
                    })
                    .catch((error) => {
                      console.error("Error:", error);
                      alert("There was an error processing your request.");
                    });
                }}
              />
            </div>
          </div> */}
        </footer>

      </div>
    </>
  )


}

export default App


