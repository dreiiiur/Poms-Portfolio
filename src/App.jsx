import "./App.css";
import React, { useState, useEffect } from "react";

import { IoMdDownload } from "react-icons/io";
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

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import { FaUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaMailBulk } from "react-icons/fa";
import { TbSquareLetterPFilled } from "react-icons/tb";

import jsPDF from "jspdf";

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
        className="min-h-screen max-w-screen flex flex-col bg-transparent max-w-screen mx-auto "
        id="home"
      >
        <header className="gap-4 sticky top-0 z-50 rounded-3xl">
          <nav className="flex justify-between items-center gap-4 rounded-lg max-w-screen bg-transparent p-4">
            <div className="text-5xl text-gray-700 tracking-wide">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-green-400 text-green-500 cursor-pointer"
              >
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-8 lg:space-x-8 text-gray-700 gap-2 text-sm font-bold items-center pr-4 bg-white backdrop-blur-md transition duration-500" >
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-800 cursor-pointer"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-800 cursor-pointer"
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  to="contacts"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-800 cursor-pointer"
                >
                  CONTACTS
                </Link>
              </li>
              <li>
                <a
                  href="./Poma-Andrei-John.V.CV2025.pdf"
                  target="_blank"
                  className="hover:text-white cursor-pointer transition-opacity duration-500 ease-in-out"
                  download
                >
                  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:scale-105 hover:text-white">
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
          <div className="fixed font-regular inset-0 bg-gradient-to-b from-white to-green-100 flex flex-col items-center justify-center z-50 gap-8">
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
            <ul className="flex flex-col gap-6 text-gray-800">
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
              <li className="flex items-center gap-2 text-gray-800 hover:text-green-500 text-lg">
                <GrProjects className="text-gray-800 hover:text-green-500" />
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
                  href="./Poma-Andrei-John.V.CV2025.pdf"
                  className="bg-green-800 text-white rounded-md px-6 py-2 flex items-center gap-2 hover:bg-green-600 hover:text-white cursor-pointer"
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
                  <MdDarkMode className="text-center justify-center gap-2 text-2xl text-green-800 hover:text-[#E1EACD]" />
                </a>
              </li>
            </ul>
          </div>
        )}
        <motion.div
          className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Profile Image */}
          <motion.div
            className="relative flex justify-center items-center mb-10 group"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              src="/123123.jpg"
              alt="Profile"
              className="w-70 h-70 sm:w-72 sm:h-72 md:w-74 md:h-74 lg:w-[420px] lg:h-[420px] rounded-[2rem] object-cover shadow-xl drop-shadow-md"
            />
            {/* Optional Overlay Vector on Hover */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full rounded-[2rem] bg-[#00000060] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              whileHover={{ opacity: 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  d="M50 0L60 20L70 0L80 20L90 0L100 20L0 20L10 0L20 20L30 0L40 20L50 0"
                />
                <path
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  d="M50 0L65 25L70 0L80 25L90 0L100 25L0 25L10 0L20 25L30 0L40 25L50 0"
                />
              </svg>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-gray-700 text-xl sm:text-2xl md:text-2xl max-w-5xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Hi! My name is Andrei, and I'm a{" "}
            <b className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
              Front-End Developer & UI/UX Designer
            </b>
            . I specialize in creating engaging and visually appealing user
            interfaces.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-3xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a
              href="https://github.com/dreiiiur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-green-600 hover:text-[#C5BAFF] transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/andreipoma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-green-600 hover:text-[#9ACBD0] transition" />
            </a>
            <a
              href="https://www.figma.com/design/TWjRPaDvVcWr8126zL050R/Susihon-ta-Malaybalay?m=auto&t=gpOC35CdVSYqT0x4-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFigma className="text-green-600 hover:text-[#F6C794] transition" />
            </a>
            <a
              href="mailto:andreipoma1220@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail className="text-green-600 hover:text-[#FF8383] transition" />
            </a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition"
            >
              Projects
            </Link>
            <Link
              to="contacts"
              smooth={true}
              duration={500}
              className="border-2 border-green-700 text-green-700 font-semibold py-2 px-6 rounded-lg hover:bg-green-700 hover:text-white transition"
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div
          id="about"
          className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 py-20 gap-12 text-center bg-gradient-to-b from-white to-green-50"
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
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-16 h-1 bg-green-500 rounded-full" />

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              I'm a{" "}
              <strong className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">
                Freelance Front-End Developer and UI/UX Designer
              </strong>{" "}
              based from San Rafael, Bulacan. I'm passionate about creating
              engaging digital experiences through modern web development and
              thoughtful UI/UX design.
            </p>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            className="max-w-4xl w-full flex flex-col items-center gap-4"
            variants={fadeIn}
          >
            <h3 className="flex items-center justify-center gap-2 text-2xl font-semibold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              <FaCode className="text-3xl" /> Technologies I Use
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
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
                  <Icon className="text-4xl md:text-5xl text-green-600" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            className="max-w-4xl w-full flex flex-col items-center gap-4 mt-6"
            variants={fadeIn}
          >
            <h3 className="flex items-center justify-center gap-2 text-2xl font-semibold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              <VscTools className="text-3xl" /> Tools I Work With
            </h3>
            <div className="w-12 h-1 bg-green-300 rounded-full" />
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
                  <Icon className="text-4xl md:text-5xl text-green-600" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <div
          className="flex flex-col  bg-gradient-to-b from-green-50 to-white items-center justify-center w-full min-h-screen gap-4 px-8 py-16"
          id="projects"
        >
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-center bg-clip-text text-transparent bg-gray-800 mb-12">
            <b className="text-green-600">Projects</b> that I've worked on and
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
                className="flex flex-col items-center w-full bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
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
          className="min-h-screen w-full bg-gradient-to-b from-white to-green-50   flex items-center justify-center py-16"
          id="testimonials"
        >
          <div className="w-full max-w-6xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-center bg-clip-text text-transparent bg-gray-800 mb-12">
              What they say <b className="text-green-600">About me?</b>
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
                  name: "Mj Abante",
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
          className="flex items-center justify-center w-full min-h-screen bg-gradient-to-b from-green-50 to-white gap-6 p-4"
          id="contacts"
        >
          <div className="flex flex-col items-center text-center bg-transparent gap-12 w-full p-6 md:w-full md:px-12">
            <h2 className="flex-row text-2xl sm:text-3xl md:text-4xl font-regular bg-clip-text text-transparent bg-gray-800 text-center flex items-center justify-center gap-2">
              <b className="text-green-600">Connect</b> with me.
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

        <footer className="bg-gradient-to-b from-white to-green-50   px-6 py-12 rounded-b-lg shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between">
            {/* Branding Section */}
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-start text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
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
