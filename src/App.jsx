
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

import jsPDF from 'jspdf';

import { Link } from 'react-scroll';


import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#FFFDF0 max-w-7xl mx-auto" id="home">
        <header className="gap-4 sticky top-0 bg-opacity-90 backdrop-blur-md z-50">
          <nav className="flex justify-between items-center gap-4 rounded-lg max-w-screen bg-transparent p-4">
            <div className="text-2xl font-black text-[#C2FFC7] tracking-wide"><Link to ="home" smooth={true} duration={500} className="hover:text-[#c2ffc7] cursor-pointer">🥦 POMSICLES</Link></div>
            <button className="lg:hidden fixed top-0 right-0 z-50 p-4" aria-label="Toggle menu" onClick={() => {
              document.querySelector('.hidden').classList.toggle('hidden');
              document.querySelector('body').classList.toggle('overflow-y-hidden');
            }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <ul className="hidden lg:flex space-x-6 lg:space-x-8 text-white gap-3 text-sm font-bold items-center">
              <li><Link to="about" smooth={true} duration={500} className="hover:text-[#c2ffc7] cursor-pointer">
                ABOUT
              </Link></li>
              <li><Link to="projects" smooth={true} duration={500} className="hover:text-[#c2ffc7] cursor-pointer">
                PROJECTS
              </Link></li>
              <li><Link to="contacts" smooth={true} duration={500} className="hover:text-[#c2ffc7] cursor-pointer">
                CONTACTS
              </Link></li>
              <li><a href="./src/assets/Poma-Andrei-John.V.CV.pdf" className="hover:text-[#c2ffc7]" download>
                <button className="bg-white text-[#1A1A1D] rounded-lg px-6 py-2 flex items-center gap-2 hover:bg-[#c2ffc7] hover:text-[#1A1A1D]">DOWNLOAD CV</button>
              </a></li>
            </ul>
          </nav>
        </header>

        {/* Content Section */}
        <div className="flex items-center justify-center w-full min-h-screen bg-transparent rounded-xl gap-6 p-4">
          <div className="flex flex-col text-center text-[#727D73] p-6 bg-transparent gap-6 max-w-lg mx-auto">
            <img src="./src/assets/portfolio.png" alt="poms" className="w-40 h-auto mx-auto mb-4 rounded-full md:w-60 lg:w-80 hover:scale-105 transition-transform duration-300" />
            <p className="leading-relaxed text-3xl md:text-4xl lg:text-5xl font-bold text-[#C2FFC7]">👋🏿 Hi, I'm Andrei!</p>
            <p className="leading-relaxed text-gray-400 text-xl md:text-2xl font-mono font-semi">UI/UX Designer | Front-End Developer.</p>
            <p className="leading-relaxed text-white text-xl md:text-2xl font-mono font-semi">Memento Vivere</p>
          </div>
        </div>

        {/* About Section */}
        <div className="flex items-center justify-center w-full min-h-screen bg-transparent rounded-xl gap-6 p-4" id="about">
          <div className="flex flex-col text-center text-[#727D73] bg-transparent gap-5">
            <p className="leading-relaxed text-3xl md:text-4xl lg:text-5xl font-bold text-[#C2FFC7]">🤷🏿‍♂️ About Me?</p>
            <p className="leading-relaxed text-gray-400 text-xl lg:2xl w-full max-w-4xl justify-normal">I'm currently a 4th year student, taking Bachelor
              of Science in Information Technology at <b className="text-white">Bulacan State University Bustos Campus</b>.
              I have a strong passion for web development and I'm eager to learn new technologies and grow as a developer.
            </p>

            <p className="text-3xl font-bold text-[#C2FFC7] text-center flex items-center justify-center gap-2">
              <FaCode className="text-3xl md:text-4xl text-[#C2FFC7]" /> Technologies
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
              <FaHtml5 className="text-3xl md:text-4xl text-blue-400" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <FaCss3Alt className="text-3xl md:text-4xl text-[#264de4]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <IoLogoJavascript className="text-3xl md:text-4xl text-[#F0DB4F]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <FaReact className="text-3xl md:text-4xl text-[#61DBFB]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <RiTailwindCssFill className="text-3xl md:text-4xl text-[#a5f3fc]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <FaBootstrap className="text-3xl md:text-4xl text-[#563d7c]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <FaPhp className="text-3xl md:text-4xl text-[#AEB2D5]" />
            </div>

            <p className="text-3xl font-bold text-[#C2FFC7] text-center flex items-center justify-center gap-2">
              <VscTools className="text-3xl md:text-4xl text-[#C2FFC7]" /> Tools
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
              <PiFigmaLogoDuotone className="text-3xl md:text-4xl text-[#0acf83]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <VscVscode className="text-3xl md:text-4xl text-[#0078d7]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <SiAdobephotoshop className="text-3xl md:text-4xl text-[#4FCCFE]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <FaGithub className="text-3xl md:text-4xl text-[#6e5494]" />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex items-center justify-center w-full min-h-screen bg-transparent rounded-xl gap-6 p-4" id="contacts">
          <div className="flex flex-col items-center text-center text-[#727D73] bg-transparent gap-12 w-full p-6 md:w-1/2 md:px-12">
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
                  href: "https://www.linkedin.com/in/andrei-poma-605637344/",
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

