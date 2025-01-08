
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
  const generatePDF = () => {
    // Create a new instance of jsPDF
    const doc = new jsPDF();

    // Add text to the PDF
    doc.text('Hello, this is your PDF content!', 10, 10);

    // Add additional content (example: a rectangle)
    doc.rect(10, 20, 100, 20); // x, y, width, height

    // Save the PDF
    doc.save('example.pdf'); // Name of the file to be downloaded
  };


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data or assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#FFFDF0 max-w-7xl mx-auto" id="home">
        <header className="gap-4 sticky top-0 bg-opacity-90 backdrop-blur-md z-50">
          <nav className="flex justify-between items-center gap-4 rounded-lg max-w-screen bg-transparent p-4">
            <div className="text-2xl font-black text-[#C2FFC7] tracking-wide"><Link to ="home" smooth={true} duration={500} className="hover:text-[#c2ffc7] cursor-pointer">🥦 POMSICLES</Link></div>
            <button className="lg:hidden text-white hover:text-[#C2FFC7]" aria-label="Toggle menu">
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
        <div className="flex items-center justify-center w-full h-screen bg-transparent rounded-xl gap-6">
          <div className="flex flex-col text-center text-[#727D73] p-6 bg-transparent gap-6">
            <img src="./src/assets/portfolio.png" alt="poms" className="w-80 h-auto mx-auto mb-4 rounded-full hover:scale-105 " />
            <p className="leading-relaxed text-4xl md:text-6xl font-bold text-[#C2FFC7]">👋🏿 Hi, I'm Andrei!</p>
            <p className="leading-relaxed text-gray-400 text-2xl font-mono font-semi">UI/UX Designer | Front-End Developer.</p>
            <p className="leading-relaxed text-white text-2xl font-mono font-semi">Memento Vivere</p>

          </div>
        </div>

        {/* About Section */}
        <div className="flex items-center justify-center w-full h-screen bg-transparent rounded-xl" id="about">
          <div className="flex flex-col text-center text-[#727D73] bg-transparent gap-5">
            <p className="text-6xl font-bold text-[#C2FFC7] font-mono">🤷🏿‍♂️ About Me?</p>
            <p className="leading-relaxed text-gray-400 text-2xl lg:3xl w-full max-w-4xl justify-normal">I'm currently a 4th year student, taking Bachelor
              of Science in Information Technology at <b className="text-white">Bulacan State University Bustos Campus</b>.
              I have a strong passion for web development and I'm eager to learn new technologies and grow as a developer.
            </p>

            <p className="text-3xl font-bold text-[#C2FFC7] text-center flex items-center justify-center gap-2">
              <FaCode className="text-5xl text-[#C2FFC7]" /> Programming Languages
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
              <FaHtml5 className="text-4xl text-blue-400" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <FaCss3Alt className="text-4xl text-[#264de4]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <IoLogoJavascript className="text-4xl text-[#F0DB4F]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <FaReact className="text-4xl text-[#61DBFB]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <RiTailwindCssFill className="text-4xl text-[#a5f3fc]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <FaBootstrap className="text-4xl text-[#563d7c]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <FaPhp className="text-4xl text-[#AEB2D5]" />
            </div>

            <p className="text-3xl font-bold text-[#C2FFC7] text-center flex items-center justify-center gap-2">
              <VscTools className="text-4xl text-[#C2FFC7]" /> Tools
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
              <PiFigmaLogoDuotone className="text-4xl text-[#0acf83]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <VscVscode className="text-4xl text-[#0078d7]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <SiAdobephotoshop className="text-4xl text-[#4FCCFE]" />
              <p className="leading-relaxed text-white text-xl lg:2xl font-mono">|</p>
              <FaGithub className="text-4xl text-[#6e5494]" />
            </div>
          </div>
        </div>

        {/* Project Section */}
        <div className="flex items-center justify-center w-full h-screen bg-transparent rounded-xl" id="projects">
          <div className="flex flex-col text-center text-[#727D73] bg-transparent gap-10">
            <p className="text-6xl font-bold text-[#C2FFC7] font-mono">💻 Projects</p>

            <div className="flex flex-col">
              <p className="text-3xl font-bold text-white text-start">1. Nature Ninjas Website</p>
              <p className="leading-relaxed text-gray-400 text-lg lg:xl text-left">Nature Ninja is a website that provides information about climate change,
                environmental sustainability, and conservation initiatives.
              </p>
              <p className="leading-relaxed text-white text-lg lg:xl text-left font-mono"><b className="text-[#C2FFC7]">Role :</b> UI/UX Designer | Front End Developer</p>
              <p className="leading-relaxed text-white text-lg lg:xl text-left font-mono"><b className="text-orange-400">Tech Stack :</b> Django | TailwindCSS</p>
            </div>

            <div className="flex flex-col">
              <p className="text-2xl font-bold text-white text-start">2. Grab Rescue: Empowering Emergency Response with GPS-Driven Rescue Management</p>
              <p className="leading-relaxed text-gray-400 text-lg lg:xl text-left">Capstone Project</p>
              <p className="leading-relaxed text-white text-lg lg:xl text-left font-mono"><b className="text-[#C2FFC7]">Role :</b> Documentation | Front End Developer to some pages</p>
              <p className="leading-relaxed text-white text-lg lg:xl text-left font-mono"><b className="text-orange-400">Tech Stack :</b> React.js | TailwindCSS | Node.js | Mapbox | Firebase | PostgreSQL</p>
            </div>

            <div className="flex flex-col">
              <p className="text-2xl font-bold text-white text-start">3. POMSICLES</p>
              <p className="leading-relaxed text-gray-400 text-lg lg:xl text-left">Portfolio</p>
              <p className="leading-relaxed text-white text-lg lg:xl text-left font-mono"><b className="text-[#C2FFC7]">Role :</b>Full Stack</p>
              <p className="leading-relaxed text-white text-lg lg:xl text-left font-mono"><b className="text-orange-500">Tech Stack :</b> React.js | TailwindCSS | Node.js</p>
            </div>

            <div className="flex flex-col">
              <p className="text-2xl font-bold text-white text-start">4. Susihon ta Malaybalay</p>
              <p className="leading-relaxed text-gray-400 text-lg lg:xl text-left">Freelancing Project</p>
              <p className="leading-relaxed text-white text-lg lg:xl text-left font-mono"><b className="text-[#C2FFC7]">Role :</b>UI/UX Designer</p>
              <p className="leading-relaxed text-white text-lg lg:xl text-left font-mono"><b className="text-blue-600">Tools :</b> Figma</p>
            </div>

          </div>
        </div>

        {/* Contact Section */}
        <div className="flex items-center justify-center w-full h-screen bg-transparent gap-6 p-6 rounded-xl md:flex-row flex-col" id="contacts">
          <div className="flex flex-col items-center text-center text-[#727D73] bg-transparent gap-12 w-full p-6 md:w-1/2 md:px-12">
            <p className="text-4xl font-bold text-[#C2FFC7] font-mono">📧 Get in Touch with me.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xl md:gap-12">
              <a href="https://github.com/dreiiiur" className="flex items-center text-white font-semibold hover:text-[#C2FFC7]">
                <FaGithub className="text-4xl text-white mr-2" />
                <span className="hidden sm:inline">Dreiiiur</span>
              </a>
              <a href="https://www.linkedin.com/in/andreipoma/" className="flex items-center text-white font-semibold hover:text-[#C2FFC7]">
                <FaLinkedin className="text-4xl text-[#0a66c2] mr-2" />
                <span className="hidden sm:inline">Andrei Poma</span>
              </a>
              <a href="https://www.facebook.com/dreiur/" className="flex items-center text-white font-semibold hover:text-[#C2FFC7]">
                <FaFacebookMessenger className="text-4xl text-[#006AFF] mr-2" />
                <span className="hidden sm:inline">Andrei Poma</span>
              </a>
              <a href="mailto:andreipoma1220@gmail.com" className="flex items-center text-white font-semibold hover:text-[#C2FFC7]">
                <SiGmail className="text-4xl text-red-500 mr-2" />
                <span className="hidden sm:inline">andreipoma1220@gmail.com</span>
              </a>
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

