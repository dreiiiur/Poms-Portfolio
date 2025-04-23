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
import { FaM } from "react-icons/fa6";

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

  const handleDownload = () => {
    const pdf = new jsPDF();
    pdf.text("Hello, this is a sample PDF file.", 10, 10);
    pdf.save("sample.pdf");
  };

  const splashScreen = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <span className="sr-only">Loading...</span>
        <div className="animate-spin h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  };

  return (
    <>
      <div
        className="min-h-screen max-w-screen flex flex-col bg-transparent max-w-screen mx-auto "
        id="home"
      >
        <header className="gap-4 sticky top-0  z-50 rounded-3xl backdrop-blur-lg bg-white/50">
          <nav className="flex justify-between items-center gap-4 rounded-lg max-w-screen bg-transparent p-4">
            <div className="text-5xl font-black text-green-800 tracking-wide">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-green-700 cursor-pointer"
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
            <ul className="hidden lg:flex space-x-8 lg:space-x-8 text-gray-800 gap-2 text-sm font-bold items-center pr-4">
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
          className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 py-12 bg-transparent overflow-hidden"
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
              src="./123456.jpg"
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
              Aspiring Front-End Developer & UI/UX Designer. I specialize in
              creating engaging and visually appealing user interfaces.
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
                  icon: (
                    <FaGithub className="text-green-800 hover:text-[#C5BAFF]" />
                  ),
                },
                {
                  href: "https://www.linkedin.com/in/andreipoma/",
                  icon: (
                    <FaLinkedin className="text-green-800 hover:text-[#9ACBD0]" />
                  ),
                },
                {
                  href: "https://www.figma.com/design/TWjRPaDvVcWr8126zL050R/Susihon-ta-Malaybalay?m=auto&t=gpOC35CdVSYqT0x4-1",
                  icon: (
                    <FaFigma className="text-green-800 hover:text-[#F6C794]" />
                  ),
                },
                {
                  href: "mailto:andreipoma1220@gmail.com",
                  icon: (
                    <SiGmail className="text-green-800 hover:text-[#FF8383]" />
                  ),
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
            <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
              About Me?
            </p>
            <p className="leading-relaxed text-gray-600 text-lg md:text-xl lg:text-2xl">
              I'm currently a 4th year student, taking Bachelor of Science in
              Information Technology at{" "}
              <b>Bulacan State University Bustos Campus</b>. I have a strong
              passion for web development and I'm eager to learn new
              technologies and grow as a developer.
            </p>

            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 font-mono flex items-center gap-2">
                <FaCode className="text-3xl md:text-4xl lg:text-4xl" />{" "}
                Technologies
              </p>
              <motion.div
                className="flex flex-wrap items-center gap-4 mt-4"
                variants={stagger}
              >
                <motion.div variants={fadeIn}>
                  <FaHtml5 className="text-4xl text-blue-400" />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <FaCss3Alt className="text-4xl text-[#264de4]" />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <IoLogoJavascript className="text-4xl text-[#F0DB4F]" />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <FaReact className="text-4xl text-[#61DBFB]" />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <RiTailwindCssFill className="text-4xl text-[#a5f3fc]" />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <FaBootstrap className="text-4xl text-[#563d7c]" />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <FaPhp className="text-4xl text-[#AEB2D5]" />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <SiMysql className="text-4xl text-blue-500" />
                </motion.div>
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
                <motion.div variants={fadeIn}>
                  <PiFigmaLogoDuotone className="text-4xl text-[#0acf83]" />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <VscVscode className="text-4xl text-[#0078d7]" />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <SiAdobephotoshop className="text-4xl text-[#4FCCFE]" />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <FaGithub className="text-4xl text-[#6e5494]" />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <SiXampp className="text-4xl text-orange-500" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div
          className="flex flex-col items-center justify-center w-full min-h-screen bg-transparent gap-12 px-8 py-16"
          id="projects"
        >
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800 mb-12">
              Projects
            </h2>

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
          className="min-h-screen w-full bg-transparent flex items-center justify-center py-16"
          id="testimonials"
        >
          <div className="w-full max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800 mb-12">
              What they say about me?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  image:
                    "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-1/485079722_3908545429463270_3993449192919758734_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFM08urZFK3iGIvGcVYIYhPNul6J4x632Y26XonjHrfZkrYqA1xpFeVveO1tQT1hAjnEzj2Uz9E_7Sn91Zkj1yX&_nc_ohc=1iWhtLRUmfEQ7kNvwHNhIak&_nc_oc=AdmilqH350fl0nVsT6lDbR0Euis1ccFCLHMbL6TFhyaAGucjuHAfHIDN2CrDVAlPoRo&_nc_zt=24&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=upBIWt59wVXo9mBYYqbTtg&oh=00_AfGdaOoVY310GDC3PnHYlkDvQ-NM70jrB6Ua4n9_Uzio2w&oe=680D6804",
                  name: "Marrianne Tameta",
                  position: "Co-Intern/QA @shift101",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
                  rating: 4,
                },
                {
                  image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-1/432783749_3170328106434114_6182646494488330411_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFUEwdJPm9dzf_d9RMlDHUgq6ExbaaeOX-roTFtpp45fyYwHYIpLq-37Gq_CSf5v4thHiKzZckmiajWWIHmPVVt&_nc_ohc=Qdb7cw9q6fMQ7kNvwEyGcX4&_nc_oc=AdmINbW5QdSZzVABs_ICm8N1CyJRNJOOb4mVxhCWctPRioMdMaXbqT-hLUjXsEkl484&_nc_zt=24&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=NyEZ3i7HiV1d8n4nygLXgQ&oh=00_AfHWakFLQJGPHSR1aoTBiuyE3uE6BHxo8Z4hX_bjrztSAw&oe=680D7684",
                  name: "Josh Laturnas",
                  position: "Co-Intern/Web Dev @shift101",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
                  rating: 5,
                },
                {
                  image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-1/486025218_3896533637230502_841214430026573250_n.jpg?stp=c3.0.931.931a_dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFJUk6ynRlVgLj6tXd1nZKUr4jai2Sr_eKviNqLZKv94nR9jkBotiXzG1EjKDyE8SVrKTtXChgyZq87w09ObLS5&_nc_ohc=3YyadeJTSSMQ7kNvwFY7ndW&_nc_oc=AdnEXj9xJCHjdY7C861il1liR3sQRFhsTQw5qZvhLvi4yMUZkNIdOtxm6YjVVp-xPLg&_nc_zt=24&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=NP-IWPyybvHa0PcO5gD2Og&oh=00_AfGOzCAYITqfIT_flFGei0PF_va9af3qXu6myTY3kHbP6A&oe=680D7EAB",
                  name: "Mj Abante",
                  position: "BSIT UB/ Fullstack Dev",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
                  rating: 5,
                },
                {
                  image: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-1/465062151_2340025386339353_752878490139429169_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG2_0969-46YNwxG_fcEJlnus1yIdHZTEC6zXIh0dlMQBCdDahTJHjX3-yJwT-mHQm83B09bRv5DnEeuEJgPrBz&_nc_ohc=o49R35ma-b0Q7kNvwGW5NmJ&_nc_oc=AdnYj4_v_pbdmaKq0Oqc35upcW_lGNGyWXi-VJxVsZjbQiFqB46r3kYuVMLakDbVULc&_nc_zt=24&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=KrSG9G9POvKMAnjpHvsHqg&oh=00_AfGN3d3Jix2mE_cxVXLYuCdpGXCLKdSzXMUUZBi0mm-6-g&oe=680EA1B9",
                  name: "Erlinda Bien",
                  position: "Previous Client",
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
                      <p className="text-xl font-semibold text-green-600">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-center gap-2 mt-4">
                    <label className="text-sm text-gray-600">
                      Rating:
                    </label>
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
                  <p className="text-sm text-gray-600 mt-4">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div
          className="flex items-center justify-center w-full min-h-screen bg-transparent rounded-xl gap-6 p-4"
          id="contacts"
        >
          <div className="flex flex-col items-center text-center bg-transparent gap-12 w-full p-6 md:w-full md:px-12">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800 text-center flex items-center justify-center gap-2">
              Let's get in touch.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl md:gap-8 lg:gap-12 hover:text-green-600">
              {[
                {
                  href: "https://github.com/dreiiiur",
                  icon: (
                    <FaGithub className="text-3xl md:text-4xl font-mono text-green-800 mr-2 hover:text-green-700" />
                  ),
                  text: "Dreiiiur",
                  textColor: "text-gray-600",
                },
                {
                  href: "https://www.linkedin.com/in/andreipoma/",
                  icon: (
                    <FaLinkedin className="text-3xl md:text-4xl font-mono text-green-800 mr-2 hover:text-green-700" />
                  ),
                  text: "Andrei Poma",
                  textColor: "text-gray-600",
                },
                {
                  href: "https://www.facebook.com/dreiur/",
                  icon: (
                    <FaFacebookMessenger className="text-3xl md:text-4xl font-mono text-green-800 mr-2 hover:text-green-700" />
                  ),
                  text: "Andrei Poma",
                  textColor: "text-[#45474B]",
                },
                {
                  href: "mailto:andreipoma1220@gmail.com",
                  icon: (
                    <SiGmail className="text-3xl md:text-4xl font-mono text-green-800 mr-2 hover:text-green-700" />
                  ),
                  text: "andreipoma1220@gmail.com",
                  textColor: "text-[#45474B]",
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`flex items-center ${link.textColor} font-semibold hover:text-gray-600`}
                >
                  {link.icon}
                  <span className="hidden sm:inline">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="bg-gray-100  px-6 py-12 rounded-t-2xl shadow-lg">
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
                <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">Links</p>
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
                <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">Contacts</p>
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
