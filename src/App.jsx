
import SplashScreen from './components/SplashScreen';
import React, { useState, useEffect } from 'react';

import { IoMdDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
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

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#FFFDF0 max-w-7xl mx-auto" id="home">
        <header className="gap-4 sticky top-0 bg-[#1A1A1D] bg-opacity-70 backdrop-blur-md z-50">
          <nav className="flex justify-between items-center gap-4 rounded-lg max-w-screen bg-transparent p-4">
            <div className="text-2xl font-black text-[#C2FFC7] tracking-wide">
              <Link to="home" smooth={true} duration={500} className="hover:text-[#c2ffc7] cursor-pointer">
                🥦 POMSICLES
              </Link>
            </div>
            {/* Toggle Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-[#C2FFC7]"
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
            <ul className="hidden lg:flex space-x-6 lg:space-x-8 text-white gap-3 text-sm font-bold items-center">
              <li>
                <Link to="about" smooth={true} duration={500} className="hover:text-[#c2ffc7] cursor-pointer">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} className="hover:text-[#c2ffc7] cursor-pointer">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link to="contacts" smooth={true} duration={500} className="hover:text-[#c2ffc7] cursor-pointer">
                  CONTACTS
                </Link>
              </li>
              <li>
                <a href="./Poma-Andrei-John.V.CV.pdf" className="hover:text-[#c2ffc7]" download>
                  <button className="bg-white text-[#1A1A1D] rounded-lg px-6 py-2 flex items-center gap-2 hover:bg-[#c2ffc7] hover:text-[#1A1A1D]">
                    DOWNLOAD CV
                  </button>
                </a>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-[#1A1A1D] bg-opacity-90 flex flex-col items-center justify-center z-50">
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white hover:text-[#C2FFC7]"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <ul className="flex flex-col text-white text-xm font-bold">
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#c2ffc7] cursor-pointer"
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
                    className="hover:text-[#c2ffc7] cursor-pointer"
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
                    className="hover:text-[#c2ffc7] cursor-pointer"
                    onClick={toggleMenu}
                  >
                    CONTACTS
                  </Link>
                </li>
                <li>
                  <a
                    href="./src/assets/Poma-Andrei-John.V.CV.pdf"
                    className="hover:text-[#c2ffc7]"
                    download
                    onClick={toggleMenu}
                  >
                    DOWNLOAD CV
                  </a>
                </li>
              </ul>
            </div>
          )}
        </header>

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
              className="w-60 h-auto mx-auto mb-4 rounded-full md:w-80 lg:w-96 hover:scale-105 transition-transform duration-300 border-2 border-[#C2FFC7]"
              whileHover={{ scale: 1.1 }} // Slight zoom on hover
              transition={{ type: "spring", stiffness: 300 }}
            />

            <motion.div
              className="leading-relaxed text-gray-400 w-full max-w-3xl text-2xl md:text-3xl font-mono font-semibold"
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
                    "Hello, I'm Andrei!",
                    "Annyeonghaseyo, I'm Andrei!",
                    "Konnichiiwa, I'm Andrei!",
                  ]}
                  loop={Infinity}
                  typeSpeed={100} // Slower typing speed
                  deleteSpeed={60} // Slower deleting speed
                  delaySpeed={2000} // Delay between words
                />
              </span>
            </motion.div>

            <motion.p
              className="leading-relaxed text-2xl md:text-4xl lg:text-4xl  font-bold text-[#C2FFC7] ease-linear"
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
                  icon: <FaGithub className="text-3xl md:text-4xl text-white mr-2" />,
                  textColor: "text-white",
                },
                {
                  href: "https://www.linkedin.com/in/andreipoma/",
                  icon: <FaLinkedin className="text-3xl md:text-4xl text-[#0a66c2] mr-2" />,
                  textColor: "text-white",
                },
                {
                  href: "https://www.facebook.com/dreiur/",
                  icon: <FaFacebookMessenger className="text-3xl md:text-4xl text-[#006AFF] mr-2" />,
                  textColor: "text-white",
                },
                {
                  href: "mailto:andreipoma1220@gmail.com",
                  icon: <SiGmail className="text-3xl md:text-4xl text-red-500 mr-2" />,
                  textColor: "text-white",
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
        <div
          className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-transparent rounded-xl gap-6 p-4"
          id="about"
        >
          {/* Left Section - Profile Picture */}
          <div className="flex justify-center items-center">
            <img
              src="./meme.jpg"
              alt="Profile"
              className="w-75 h-70 md:w-screen md:h-1/2 object-cover shadow rounded-xl border-2 border-[#C2FFC7]"
            />
          </div>

          {/* Right Section - Content */}
          <div className="flex flex-col text-left text-[#727D73] gap-6 max-w-3xl">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#C2FFC7] font-mono">
              About Me?
            </p>
            <p className="leading-relaxed text-gray-400 text-lg md:text-xl lg:text-2xl">
              I'm currently a 4th year student, taking Bachelor of Science in Information Technology at{" "}
              <b className="text-white">Bulacan State University Bustos Campus</b>. I have a strong passion
              for web development and I'm eager to learn new technologies and grow as a developer.
            </p>

            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#C2FFC7] font-mono flex items-center gap-2">
                <FaCode className="text-2xl md:text-3xl lg:text-4xl" /> Technologies
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <FaHtml5 className="text-4xl text-blue-400" />
                <FaCss3Alt className="text-4xl text-[#264de4]" />
                <IoLogoJavascript className="text-4xl text-[#F0DB4F]" />
                <FaReact className="text-4xl text-[#61DBFB]" />
                <RiTailwindCssFill className="text-4xl text-[#a5f3fc]" />
                <FaBootstrap className="text-4xl text-[#563d7c]" />
                <FaPhp className="text-4xl text-[#AEB2D5]" />
              </div>
            </div>

            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#C2FFC7] flex items-center gap-2">
                <VscTools className="text-3xl md:text-4xl text-[#C2FFC7]" /> Tools
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <PiFigmaLogoDuotone className="text-4xl text-[#0acf83]" />
                <VscVscode className="text-4xl text-[#0078d7]" />
                <SiAdobephotoshop className="text-4xl text-[#4FCCFE]" />
                <FaGithub className="text-4xl text-[#6e5494]" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex items-center justify-center w-full min-h-screen bg-transparent rounded-xl gap-6 p-4" id="contacts">
          <div className="flex flex-col items-center text-center text-[#727D73] bg-transparent gap-12 w-full p-6 md:w-full md:px-12">
            <p className="text-3xl font-bold text-[#C2FFC7] text-center flex items-center justify-center gap-2">📧 Get in Touch with me.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl md:gap-8 lg:gap-12">
              {[
                {
                  href: "https://github.com/dreiiiur",
                  icon: <FaGithub className="text-3xl md:text-4xl text-white mr-2" />,
                  text: "Dreiiiur",
                  textColor: "text-white"
                },
                {
                  href: "https://www.linkedin.com/in/andreipoma/",
                  icon: <FaLinkedin className="text-3xl md:text-4xl text-[#0a66c2] mr-2" />,
                  text: "Andrei Poma",
                  textColor: "text-white"
                },
                {
                  href: "https://www.facebook.com/dreiur/",
                  icon: <FaFacebookMessenger className="text-3xl md:text-4xl text-[#006AFF] mr-2" />,
                  text: "Andrei Poma",
                  textColor: "text-white"
                },
                {
                  href: "mailto:andreipoma1220@gmail.com",
                  icon: <SiGmail className="text-3xl md:text-4xl text-red-500 mr-2" />,
                  text: "andreipoma1220@gmail.com",
                  textColor: "text-white"
                },
              ].map((link, index) => (
                <a key={index} href={link.href} className={`flex items-center ${link.textColor} font-semibold hover:text-[#C2FFC7]`}>
                  {link.icon}
                  <span className="hidden sm:inline">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="flex items-center justify-center w-full h-full bg-transparent gap-6 p-6 rounded-xl">
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-white font-bold text-2xl">🥦 POMSICLES</p>
            <p className="text-gray-400 font-semibold">All Rights Reserved @ 2025</p>
            <p className="text-[#c2ffc7] font-semibold flex items-center"><SiGmail className="text-2xl text-[#c2ffc7] mr-2" />andreipoma1220@gmail.com</p>
          </div>
        </footer>

      </div>
    </>
  )

}

export default App

