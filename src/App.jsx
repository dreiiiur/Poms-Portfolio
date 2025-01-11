
import SplashScreen from './components/SplashScreen';
import React, { useState, useEffect } from 'react';

import { IoMdDownload } from "react-icons/io";
import { FaFigma, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";

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

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import jsPDF from 'jspdf';

import { Link } from 'react-scroll';


import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
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
      <div className="min-h-screen flex flex-col bg-[#FFFDF0 max-w-7xl mx-auto" id="home">
        <header className="gap-4 sticky top-0 bg-transparent bg-opacity-70 backdrop-blur-md z-50">
          <nav className="flex justify-between items-center gap-4 rounded-lg max-w-screen bg-transparent p-4">
            <div className="text-2xl font-black text-[#727D73] tracking-wide">
              <Link to="home" smooth={true} duration={500} className="hover:text-[#727D73] cursor-pointer">
                🥦 POMSICLES
              </Link>
            </div>
            {/* Toggle Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-[#AAB99A] hover:text-[#727D73] cursor-pointer"
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
            <ul className="hidden lg:flex space-x-6 lg:space-x-8 text-[#727D73] gap-3 text-sm font-bold items-center">
              <li>
                <Link to="about" smooth={true} duration={500} className="hover:text-[#AAB99A] cursor-pointer">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} className="hover:text-[#AAB99A] cursor-pointer">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link to="contacts" smooth={true} duration={500} className="hover:text-[#AAB99A] cursor-pointer">
                  CONTACTS
                </Link>
              </li>
              <li>
                <a href="./Poma-Andrei-John.V.CV.pdf" target="_blank" className="hover:text-[#c2ffc7]" download>
                  <button className="bg-[#AAB99A] text-[#F0F0D7] rounded-lg px-6 py-2 flex items-center gap-2 hover:bg-[#727D73] hover:text-[#D0DDD0]">
                    DOWNLOAD CV
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </header>


        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#727D73] bg-opacity-90 flex flex-col items-center justify-center z-50">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-[#F0F0D7] hover:text-[#AAB99A] cursor-pointer"
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
            <ul className="flex flex-col items-center gap-6 text-white text-xl font-bold">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:text-[#AAB99A] cursor-pointer"
                  onClick={toggleMenu}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="hover:text-[#AAB99A] cursor-pointer"
                  onClick={toggleMenu}
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  to="contacts"
                  smooth={true}
                  duration={500}
                  className="hover:text-[#AAB99A] cursor-pointer"
                  onClick={toggleMenu}
                >
                  CONTACTS
                </Link>
              </li>
              <li>
                <a
                  href="./src/assets/Poma-Andrei-John.V.CV.pdf"
                  className="bg-[#F0F0D7] text-[#727D73] rounded-lg px-6 py-2 flex items-center gap-2 hover:bg-[#AAB99A] hover:text-[#F0F0D7] cursor-pointer"
                  download
                  onClick={toggleMenu}
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}


        {/* Content Section */}
        <motion.div
          className="flex flex-row items-center w-full min-h-screen bg-transparent rounded-xl"
          initial={{ opacity: 0, y: 50 }} // Animation starts hidden and moved down
          animate={{ opacity: 1, y: 0 }} // Ends visible and in the correct position
          transition={{ duration: 0.8, ease: "easeOut" }} // Timing for smooth animation
        >
          <div className="flex flex-col text-center text-[#727D73] bg-transparent gap-8 max-w-3xl mx-auto">
            <motion.img
              src="./portfolio.png"
              alt="poms"
              className="w-60 h-auto mx-auto mb-4 rounded-full md:w-80 lg:w-96 hover:scale-105 transition-transform duration-300 border-2 border-[#727D73] bg-[#F0F0D7]"
              whileHover={{ scale: 1.1 }} // Slight zoom on hover
              transition={{ type: "spring", stiffness: 300 }}
            />

            <motion.div
              className="leading-relaxed text-[#727D73] w-full max-w-3xl text-2xl md:text-3xl font-mono font-semibold"
              initial={{ opacity: 0, y: 150 }} // Start farther down for slower feel
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -150 }} // Smooth exit upwards
              transition={{
                delay: 0, // Increased delay for staggering
                duration: 1, // Extended duration for ultra-smooth motion
                ease: [0.2, 0.8, 0.2, 1], // Smoother cubic-bezier easing
              }}
            >
              <span>
                <Typewriter
                  words={[
                    "Kamusta? Ako si Andrei!.",
                    "Hello, I'm Andrei!",
                    "안녕하세요, 저는 안드레이에요.",
                    "こんにちは、私はアンドレイです。",
                  ]}
                  loop={Infinity}
                  typeSpeed={100} // Slower typing speed
                  deleteSpeed={60} // Slower deleting speed
                  delaySpeed={2000} // Delay between words
                />
              </span>
            </motion.div>

            <motion.p
              className="leading-relaxed text-2xl md:text-4xl lg:text-4xl  font-bold text-[#AAB99A] ease-linear"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5, duration: 4 }}
            >
              Front-End Developer & UI/UX Designer
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl md:gap-8 lg:gap-12"
              initial={{ opacity: 0, y: 150 }} // Start farther away for slow entry
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -150 }} // Exit animation for smooth upwards motion
              transition={{
                delay: 1, // Larger delay to stagger after the first animation
                duration: 1, // Even longer duration for smooth entry
                ease: [0.3, 0.7, 0.3, 1], // Softer cubic-bezier easing for natural feel
              }}
            >
              {[
                {
                  href: "https://github.com/dreiiiur",
                  icon: <FaGithub className="text-3xl md:text-4xl font-light text-[#727D73] mr-2" />,
                  textColor: "text-white",
                  target: "_blank",
                },
                {
                  href: "https://www.linkedin.com/in/andreipoma/",
                  icon: <FaLinkedin className="text-3xl md:text-4xl font-light text-[#727D73] mr-2" />,
                  textColor: "text-white",
                  target: "_blank",
                },
                {
                  href: "https://www.figma.com/design/TWjRPaDvVcWr8126zL050R/Susihon-ta-Malaybalay?m=auto&t=gpOC35CdVSYqT0x4-1",
                  icon: <FaFigma className="text-3xl md:text-4xl font-light text-[#727D73] mr-2" />,
                  textColor: "text-white",
                  target: "_blank",
                },
                {
                  href: "mailto:andreipoma1220@gmail.com",
                  icon: <SiGmail className="text-3xl md:text-4xl font-light text-[#727D73] mr-2" />,
                  textColor: "text-white",
                  target: "_blank",
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`flex items-center ${link.textColor} font-semibold hover:text-[#C2FFC7]`}
                >
                  {link.icon}
                  <span className="hidden sm:inline">{link.text}</span>
                </a>
              ))}
            </motion.div>
          </div>
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
            className="flex justify-center items-center"
            variants={fadeIn}
          >
            <img
              src="./meme.jpg"
              alt="Profile"
              className="w-75 h-70 md:w-screen md:h-1/2 object-cover shadow rounded-xl border-2 border-[#AAB99A]"
            />
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            className="flex flex-col text-left text-[#727D73] gap-6 max-w-3xl"
            variants={fadeIn}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#AAB99A] font-mono">
              About Me?
            </p>
            <p className="leading-relaxed text-[#727D73] text-lg md:text-xl lg:text-2xl">
              I'm currently a 4th year student, taking Bachelor of Science in Information Technology at{" "}
              <b>Bulacan State University Bustos Campus</b>. I have a strong passion for web development
              and I'm eager to learn new technologies and grow as a developer.
            </p>

            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#AAB99A] font-mono flex items-center gap-2">
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
              </motion.div>
            </div>

            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#AAB99A] flex items-center gap-2">
                <VscTools className="text-3xl md:text-4xl text-[#AAB99A]" /> Tools
              </p>
              <motion.div
                className="flex flex-wrap items-center gap-4 mt-4"
                variants={stagger}
              >
                <motion.div variants={fadeIn}><PiFigmaLogoDuotone className="text-4xl text-[#0acf83]" /></motion.div>
                <motion.div variants={fadeIn}><VscVscode className="text-4xl text-[#0078d7]" /></motion.div>
                <motion.div variants={fadeIn}><SiAdobephotoshop className="text-4xl text-[#4FCCFE]" /></motion.div>
                <motion.div variants={fadeIn}><FaGithub className="text-4xl text-[#6e5494]" /></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Section */}

        <motion.div
          className="flex flex-col items-center justify-center w-full min-h-screen bg-transparent rounded-xl gap-6 p-4"
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} // Repeats animation on scroll
          variants={stagger}
        >
          {/* Section Title */}
          <motion.p
            className="text-2xl md:text-3xl font-extrabold text-[#AAB99A] text-center mb-6 font-mono"
            variants={fadeIn}
          >
            PROJECTS
          </motion.p>

          {/* Projects Container */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 w-full"
            variants={stagger}
          >
            {/* Project Card 1 */}
            <motion.div
              className="flex flex-col items-center w-full md:w-96 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-105"
              variants={fadeIn}
            >
              <div
                className="flex items-center justify-center w-full h-64 bg-center bg-cover"
                style={{ backgroundImage: `url("./natureNinjas1.jpg")` }}
              ></div>
              <div className="flex flex-col items-start text-left w-full p-6">
                <p className="text-2xl font-bold text-[#AAB99A]">Nature Ninjas</p>
                <p className="text-lg text-[#727D73]">Front-End Developer</p>
                <ul className="flex flex-col items-start gap-2 mt-4">
                  <li className="flex items-start gap-2">
                    <FaCode className="text-2xl text-gray-600" />
                    <span className="text-lg text-gray-600 hover:text-blue-500">
                      Django, Tailwind
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaGithub className="text-2xl text-gray-600" />
                    <a
                      href="https://github.com/ClydeMondero/nature-ninjas.git"
                      className="text-lg text-gray-600 hover:text-violet-500"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              className="flex flex-col items-center w-full md:w-96 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-105"
              variants={fadeIn}
            >
              <div
                className="flex items-center justify-center w-full h-64 bg-center bg-cover"
                style={{ backgroundImage: `url("./susihontamalaybalayhero.png")` }}
              ></div>
              <div className="flex flex-col items-start text-left w-full p-6">
                <p className="text-2xl font-bold text-[#B43F3F]">Susihon Ta Malaybalay</p>
                <p className="text-lg text-[#727D73]">UI/UX Designer</p>
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
                      href="https://www.figma.com/design/TWjRPaDvVcWr8126zL050R/Susihon-ta-Malaybalay?m=auto&t=gpOC35CdVSYqT0x4-1"
                      className="text-lg text-gray-600 hover:text-violet-500"
                    >
                      Project Link
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>



        {/* Contact Section */}
        <div className="flex items-center justify-center w-full min-h-screen bg-transparent rounded-xl gap-6 p-4" id="contacts">
          <div className="flex flex-col items-center text-center text-[#727D73] bg-transparent gap-12 w-full p-6 md:w-full md:px-12">
            <p className="text-3xl font-bold text-[#AAB99A] text-center flex items-center justify-center gap-2">📧 Get in Touch with me.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl md:gap-8 lg:gap-12">
              {[
                {
                  href: "https://github.com/dreiiiur",
                  icon: <FaGithub className="text-2xl md:text-3xl font-mono text-[#727D73] mr-2 hover:text-[#AAB99A]" />,
                  text: "Dreiiiur",
                  textColor: "text-[#727D73]"
                },
                {
                  href: "https://www.linkedin.com/in/andreipoma/",
                  icon: <FaLinkedin className="text-2xl md:text-3xl font-mono text-[#727D73] hover:text-[#AAB99A] mr-2" />,
                  text: "Andrei Poma",
                  textColor: "text-[#727D73]"
                },
                {
                  href: "https://www.facebook.com/dreiur/",
                  icon: <FaFacebookMessenger className="text-2xl md:text-3xl font-mono text-[#727D73] hover:text-[#AAB99A] mr-2" />,
                  text: "Andrei Poma",
                  textColor: "text-[#727D73]"
                },
                {
                  href: "mailto:andreipoma1220@gmail.com",
                  icon: <SiGmail className="text-2xl md:text-3xl font-mono text-[#727D73] hover:text-[#AAB99A] mr-2" />,
                  text: "andreipoma1220@gmail.com",
                  textColor: "text-[#727D73]"
                },
              ].map((link, index) => (
                <a key={index} href={link.href} className={`flex items-center ${link.textColor} font-semibold hover:text-[#AAB99A]`}>
                  {link.icon}
                  <span className="hidden sm:inline">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="w-full bg-transparent p-6 rounded-t-xl">
          <div className="container mx-auto flex flex-col md:flex-row justify-between gap-6">
            {/* Branding */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-[#AAB99A] font-bold text-2xl">Pomsicles</p>
              <p className="text-[#727D73] font-medium">© 2025 Pomsicles. All rights reserved.</p>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <p className="text-[#727D73] font-medium">Contact Us:</p>
              <a
                href="mailto:andreipoma1220@gmail.com"
                className="text-[#727D73] font-semibold flex items-center hover:underline"
              >
                <SiGmail className="text-2xl text-[#727D73] mr-2" />
                andreipoma1220@gmail.com
              </a>
            </div>
          </div>
        </footer>

      </div>
    </>
  )


}

export default App

