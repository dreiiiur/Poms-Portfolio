import "./App.css";
import React, { useState, useEffect } from "react";
import { MdOutlineDesignServices } from "react-icons/md";

import { FaFigma, FaGithub, FaInstagram, FaRProject } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { MdDarkMode } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
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
import { FaFacebook } from "react-icons/fa";

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
import { FaEye } from "react-icons/fa";

import { TbUserQuestion } from "react-icons/tb";

import { AiFillProject } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";

import { CiMail } from "react-icons/ci";

import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";
import { PiReadCvLogo } from "react-icons/pi";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-scroll";

import "./App.css";

const tabs = [
  "About Me",
  "Experience",
  "Technologies",
  "Tools",
  "Services",
  "Behance",
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("About Me");

   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const testimonials = [
    {
      image: "./karina.jpg",
      name: "Marrianne Tameta",
      position: "Full Stack Developer",
      text: "Andrei was not only kind and easy to work with but also skilled, focused, and always ready to help with any task.",
      bg: "#ECFAE5",
    },
    {
      image: "./default-user.jpg",
      name: "Joana Perey",
      position: "Client",
      text: "Mr. Poma is creative and insightful in different ways. He exerts great effort in designing, which exceeds my imagination and expectations. The quality and efficiency of his work are commendable.",
      bg: "#ffffff",
    },
    {
      image: "./angelo.jpg",
      name: "Angelo Parungao",
      position: "Fullstack Developer",
      text: "Andrei is a hardworking and dedicated UI/UX designer. His work reflects great attention to detail, and he consistently delivers quality results. He is also open to feedback and always willing to improve. It's a pleasure working with him.",
      bg: "#FAF6E9",
    },
    {
      image: "./karina.jpg",
      name: "Erlinda Bien",
      position: "Client",
      text: "We are incredibly grateful to Mr. Andrei, an outstanding IT student, for developing our app. His dedication, technical skill, and attention to detail brought our ideas to life in a smooth, user-friendly application. Thank you for your excellent work and professionalism!",
      bg: "#FFF0BD",
    },
    {
      image: "./default-user.jpg",
      name: "Kris Repolles",
      position: "Client",
      text: " Sir Andrei demonstrates efficiency and precision in his work, consistently exerting maximum effort and resourcefully utilizing all available design tools and technologies to deliver exceptional solutions.",
      bg: "#F5EFFF",
    },
  ];

  return (
    <>
      <div
        className="min-h-full max-w-screen flex flex-col max-w-full mx-auto"
        id="home"
      >
        <header className="gap-4 sticky top-0 z-50 rounded-3xl ">
          <nav className="flex justify-between items-center gap-4 rounded-lg max-w-screen bg-transparent p-2">
           

            {/* Toggle Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-400  hover:text-violet-500 rounded-full transition duration-300 ease-in-out"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <ul  className={`hidden lg:flex space-x-8 text-gray-100 gap-2 text-sm font-bold items-center justify-center pr-4 transition duration-500 py-3 px-6 rounded-xl mx-auto shadow-lg ${
    scrolled
      ? "bg-violet-400/30 backdrop-blur-md"
      : "bg-violet-700"
  }`}>
              <li className="relative group">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="hover:text-violet-500 cursor-pointer"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block">
                    <p className="bg-white text-black text-xs px-2 py-1 rounded-lg shadow-lg">
                      Home
                    </p>
                  </div>
                  <GoHomeFill className="hover:text-violet-300 cursor-pointer text-xl md:text-2xl hover:scale-125 transition duration-500 ease-out" />
                </Link>
              </li>
              <li className="relative group">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block hover:scale-105 transition duration-500">
                    <p className="bg-white text-black text-xs px-2 py-1 rounded-lg shadow-lg">
                      About
                    </p>
                  </div>
                  <FaUserCircle className="hover:text-violet-300 cursor-pointer text-xl md:text-2xl hover:scale-125 transition duration-500 ease-out" />
                </Link>
              </li>
              <li className="relative group">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block hover:scale-105 transition duration-500">
                    <p className="bg-white text-black text-xs px-2 py-1 rounded-lg shadow-lg">
                      Projects
                    </p>
                  </div>
                  <AiFillProject className="hover:text-violet-300 cursor-pointer text-xl md:text-2xl hover:scale-125 transition duration-500 ease-out" />
                </Link>
              </li>

              <li className="relative group">
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block hover:scale-105 transition duration-500">
                    <p className="bg-white text-black text-xs px-2 py-1 rounded-lg shadow-lg">
                      Testimonials
                    </p>
                  </div>
                  <MdRateReview className="hover:text-violet-300 cursor-pointer text-xl md:text-2xl hover:scale-125 transition duration-500 ease-out" />
                </Link>
              </li>

              <li className="relative group">
                <Link
                  to="contacts"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block hover:scale-105 transition duration-500">
                    <p className="bg-white text-black text-xs px-2 py-1 rounded-lg shadow-lg">
                      Contacts
                    </p>
                  </div>
                  <IoMail className="hover:text-violet-300 cursor-pointer text-xl md:text-2xl hover:scale-125 transition duration-500 ease-out" />
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed font-regular inset-0 flex flex-col items-center transform translate-x-0 transition duration-500 ease-in-out justify-center z-50 gap-8">
            <div className="fixed top-0 left-0 h-full w-72 backdrop-blur  bg-violet-900 shadow-xl  p-6 flex flex-col justify-between">
              {/* User Info */}
              <div>
                {/* Close Button */}
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 text-gray-100 hover:text-violet-500 cursor-pointer"
                  aria-label="Close menu"
                >
                  <span className="text-2xl">&times;</span>
                </button>

                {/* Menu Items */}
                <ul className="space-y-5 text-gray-100">
                  <li className="flex items-center gap-3 text-lg hover:text-violet-500 cursor-pointer">
                    
                    <Link
                      to="home"
                      smooth={true}
                      duration={500}
                      className="hover:text-violet-500 cursor-pointer"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 text-lg hover:text-violet-500 cursor-pointer">
                    
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      className="hover:text-green-500 cursor-pointer"
                    >
                      <i className="fas fa-history"></i> About
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 text-lg hover:text-green-500 cursor-pointer">
                    
                    <Link
                      to="projects"
                      smooth={true}
                      duration={500}
                      className="hover:text-green-500 cursor-pointer"
                    >
                      <i className="fas fa-ticket-alt"></i> Projects
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 text-lg hover:text-green-500 cursor-pointer">
                    
                    <Link
                      to="testimonials"
                      smooth={true}
                      duration={500}
                      className="hover:text-green-500 cursor-pointer"
                    >
                      <i className="fas fa-map-marker-alt"></i> Testimonials
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 text-lg hover:text-green-500 cursor-pointer">
                    
                    <Link
                      to="contacts"
                      smooth={true}
                      duration={500}
                      className="hover:text-green-500 cursor-pointer"
                    >
                      <i className="fas fa-user"></i> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <motion.div
          className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 bg-gradient-to-b from-[#1d1d1d] via-[#1d1d1d] to-violet-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Text Content */}
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            <p className="text-gray-50 text-lg mb-2">Hello There!</p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-50 leading-tight mb-4"
             
            >
              I’m{" "}
              <span
                className="bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 px-4 py-1 rounded-lg"
               
              >
                Andrei{" "}
                <PiHandWavingThin className="animate-bounce inline-block ml-1" />
              </span>
              ,
              <br />
               Freelance Web Designer and Front-End Developer
              <br />
              based in Bulacan.
            </h1>

            <p className="text-gray-200 mt-4 text-base sm:text-lg text-shadow-lg">
              I’m a Freelance Web Designer and Front-End Developer based in the
              Bulacan, Philippines. I have a passion for creating visually
              stunning and user-friendly websites and apps.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <button className="bg-violet-500 text-white py-3 px-4 rounded-full font-semibold hover:bg-violet-700 hover:scale-105 transition duration-300 flex items-center gap-2">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  View Projects
                </Link>
                <FaEye className="animate-bounce text-xl" />
              </button>

              <button className="bg-white text-violet-500  py-3 px-4 rounded-full font-semibold hover:scale-105 transition duration-300 flex items-center gap-2">
                <a
                  href="./Poma-Andrei-John.V.CV2025.pdf"
                  target="_blank"
                  download
                  className=" cursor-pointer transition-opacity duration-500"
                >
                  Download CV
                </a>
                <PiReadCvLogoBold className="animate-bounce text-xl" />
              </button>
            </div>
          </div>
        </motion.div>

        <div
          className="relative"
          style={{
            boxShadow: `
              0px 20px 40px rgba(0, 0, 0, 0.15),
              0px 20px 40px rgba(0, 0, 0, 0.15)
            `,
          }}
        ></div>

      
        {/* SECTION: MARQUEE
        <div className="relative w-full overflow-hidden p-12 z-10">
          <div className="absolute inset-0  pointer-events-none" />

          <div className="absolute inset-0 opacity-50 blur-md" />

          <motion.div
            className="whitespace-nowrap animate-marquee flex gap-16 px-4"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 10, repeat: Infinity }}
          >
            {[
              "/logos/crescentree.png",
              "/logos/shift.png",
              "/logos/aural-nexus.png",
              "/logos/susihon.png",
              "/logos/match-madness.png",
              "/logos/crescentree.png",
              "/logos/shift.png",
              "/logos/aural-nexus.png",
              "/logos/susihon.png",
              "/logos/match-madness.png",
            ].map((src, idx) => (
              <motion.img
                key={idx}
                src={src}
                alt={`client-${idx}`}
                className="h-10 grayscale opacity-10 hover:opacity-100 transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "tween", duration: 1, delay: idx * 0.1 }}
              />
            ))}
            {[
              "/logos/crescentree.png",
              "/logos/shift.png",
              "/logos/aural-nexus.png",
              "/logos/susihon.png",
              "/logos/match-madness.png",
              "/logos/crescentree.png",
              "/logos/shift.png",
              "/logos/aural-nexus.png",
              "/logos/susihon.png",
              "/logos/match-madness.png",
            ].map((src, idx) => (
              <motion.img
                key={`dup-${idx}`}
                src={src}
                alt={`client-${idx}`}
                className="h-10 grayscale opacity-80 hover:opacity-100 transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "tween", duration: 1, delay: idx * 0.1 }}
              />
            ))}
          </motion.div>
        </div>
        */}

        <div id="about"></div>
        <section className="relative w-full px-4 py-12 sm:px-8 sm:py-16 flex flex-col gap-12  h-full sm:h-screen bg-gradient-to-t from-[#1d1d1d] via-[#1d1d1d] to-violet-900">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 items-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] letter-spacing-2">
              Know more about me
            </h2>
          </motion.div>
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-colors duration-300 ${
                  activeTab === tab
                    ? "bg-violet-500 text-white shadow-md"
                    : "bg-white/10 text-gray-300 hover:bg-violet-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "About Me" && (
            <motion.div
              variants={fadeIn}
              className="w-full max-w-6xl rounded-xl border border-violet-600 shadow-xl p-6 sm:p-10 flex flex-col gap-4 items-center mx-auto"
            >
              <section className="relative py-16 px-4 sm:px-8 max-w-6xl mx-auto">
                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed text-justify max-w-3xl mx-auto mb-10">
                  I'm a{" "}
                  <span className="text-white font-semibold">
                    freelance web designer
                  </span>{" "}
                  and{" "}
                  <span className="text-white font-semibold">IT graduate</span>{" "}
                  based in Bulacan. I build modern, clean, and responsive
                  websites. I'm passionate about crafting engaging and
                  user-friendly digital experiences through thoughtful design
                  and clean code.
                </p>

                {/* Activities Section */}
                <div className="bg-gray-800/60 border border-gray-700/60 rounded-2xl shadow-xl p-8 backdrop-blur-md transition-all duration-300 hover:shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center underline decoration-violet-400 underline-offset-4">
                    Activities I Usually Do
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-lg">
                    <li className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-violet-400 animate-pulse"></span>
                     Kdrama
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-violet-400 animate-pulse"></span>
                     Anime
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-violet-400 animate-pulse"></span>
                      Gym
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-violet-400 animate-pulse"></span>
                      Run
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-violet-400 animate-pulse"></span>
                      Coding
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-violet-400 animate-pulse"></span>
                      Listens to Music
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-violet-400 animate-pulse"></span>
                      Self Blame
                    </li>
                  </ul>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === "Experience" && (
            <motion.div
              variants={fadeIn}
              className="w-full max-w-6xl mx-auto rounded-xl border-violet-600 border backdrop-blur-md shadow-2xl p-6 sm:p-10 flex flex-col gap-6"
            >
              <section className="relative py-16 text-left px-4 sm:px-8 max-w-6xl mx-auto bg-gray-800/60 border border-gray-700/60 rounded-xl p-6 sm:p-8 shadow-lg  border-green-200 dark:border-gray-700 transition-all">
                {/* Experience Item 1 */}
                <div className="mb-10 text-left">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:text-left sm:justify-between text-left">
                    <div className="items-start text-left">
                      <p className="text-xl font-semibold text-gray-900 dark:text-white text-left">
                        Shift101 IT Solutions
                      </p>
                      <p className="text-violet-500 text-base">
                        WordPress Developer & Web Developer
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Feb 2025 - May 2025
                    </p>
                  </div>

                  <p className="text-gray-200 mt-4 leading-relaxed text-justify">
                    Developed websites using{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                      WordPress
                    </span>
                    ,{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                      HTML
                    </span>
                    ,{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                      Tailwind CSS
                    </span>
                    ,{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                      PHP
                    </span>
                    , and{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                      MySQL
                    </span>
                    .
                  </p>
                  <p className="text-sm text-gray-200 dark:text-gray-200 mt-2">
                    <span className="font-bold text-gray-900 dark:text-white">
                      Project:
                    </span>{" "}
                    Crescentree E-commerce Website
                  </p>
                </div>

                <hr className="my-6 border-gray-300 dark:border-gray-700" />

                {/* Experience Item 2 */}
                <div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div className="items-start text-left">
                      <p className="text-xl font-semibold text-gray-900 dark:text-white text-left">
                        Freelance
                      </p>
                      <p className="text-violet-500  text-base">
                        UI/UX Designer & Web Developer
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2024 - Present
                    </p>
                  </div>

                  <p className="text-gray-200  mt-4 leading-relaxed text-justify">
                    I offer designing services and website development
                    using{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                      HTML
                    </span>
                    ,{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                      Tailwind CSS
                    </span>
                    ,{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                      JavaScript
                    </span>
                    , and{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                      React
                    </span>
                    . I also create user interfaces with{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                      Figma
                    </span>
                    .
                  </p>
                  <p className="text-sm text-gray-200 dark:text-gray-200 mt-2">
                    <span className="font-bold text-gray-300">
                      Projects:
                    </span>{" "}
                    Susihon ta Malaybalay, Aural Nexus
                  </p>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === "Technologies" && (
            <motion.div
              variants={fadeIn}
              className="rounded-3xl border-violet-600 border backdrop-blur-md shadow-xl p-6 sm:p-10 flex flex-col gap-6 items-center mx-auto max-w-6xl"
            >
              <motion.div
                variants={fadeIn}
                className="rounded-3xl bg-gray-800/60 border border-gray-700/60 backdrop-blur-md shadow-xl p-6 sm:p-10 flex flex-col gap-6 items-center"
              >
               
                <div className="grid grid-cols-3 sm:grid-cols-7 gap-5">
                  {[
                    { icon: FaHtml5, name: "HTML5" },
                    { icon: FaCss3Alt, name: "CSS3" },
                    { icon: IoLogoJavascript, name: "JavaScript" },
                    { icon: FaReact, name: "React" },
                    { icon: RiTailwindCssFill, name: "Tailwind CSS" },
                    { icon: FaBootstrap, name: "Bootstrap" },
                    { icon: FaPhp, name: "PHP" },
                    { icon: SiMysql, name: "MySQL" },
                    { icon: FaWordpress, name: "WordPress" },
                  ].map(({ icon: Icon, name }, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeIn}
                      className="hover:scale-110 transition-transform flex flex-col items-center"
                    >
                      <Icon className="text-3xl sm:text-4xl text-gray-100 hover:text-violet-400 duration-300" />
                      <span className="text-center text-sm text-gray-400 mt-2">
                        {name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "Tools" && (
            <motion.div
              variants={fadeIn}
              className="rounded-3xl border border-violet-600 p-6 sm:p-10 flex flex-col gap-6 items-center mx-auto max-w-6xl"
            >
                 <motion.div
                variants={fadeIn}
                className="rounded-3xl bg-gray-800/60 border border-gray-700/60 shadow-xl p-6 sm:p-10 flex flex-col gap-6 items-center"
              >
               
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { icon: PiFigmaLogoDuotone, name: "Figma" },
                    { icon: VscVscode, name: "VS Code" },
                    { icon: SiAdobephotoshop, name: "Photoshop" },
                    { icon: FaGithub, name: "GitHub" },
                    { icon: SiXampp, name: "XAMPP" },
                  ].map(({ icon: Icon, name }, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeIn}
                      className="hover:scale-110 transition-transform flex flex-col items-center"
                    >
                      <Icon className="text-3xl sm:text-4xl text-gray-100 hover:text-violet-400" />
                      <span className="text-center text-sm text-gray-400 mt-2">
                        {name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "Services" && (
                <motion.div
            variants={fadeIn}
            className="w-full max-w-6xl mx-auto rounded-xl border border-violet-600 backdrop-blur-md shadow-xl p-6 sm:p-10 flex flex-col gap-8 items-center"
          >
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {[
                {
                  icon: "💻",
                  title: "Web Development",
                  description:
                    "Personal or business websites built with modern technologies — clean, fast, and scalable.",
                },
                {
                  icon: "🎨",
                  title: "UI/UX Designing",
                  description:
                    "Crafting intuitive and engaging user interfaces tailored to your brand and users’ needs.",
                },
                {
                  icon: "📱",
                  title: "Responsive Design",
                  description:
                    "Ensuring your website adapts flawlessly across all screen sizes — from mobile to desktop.",
                },
                {
                  icon: "🎨",
                  title: "Graphic Designing",
                  description:
                    "Creating visually stunning and effective designs that leave a lasting impression on your audience.",
                },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  className="bg-voilet-700 border border-white/10 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-transform hover:scale-105 hover:border-violet-400 group"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          )}

          {activeTab === "Behance" && (
            <motion.div
              variants={fadeIn}
              className="w-full max-w-3xl mx-auto flex flex-col items-center gap-4 mt-8"
            >
              <p className="text-lg sm:text-xl text-gray-300 text-center">
                I also do graphic design and UI/UX design that you can check out
                on <span className="font-bold">Behance</span>
              </p>
              <a
                href="https://www.behance.net/gallery/226837617/My-Designs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-3 sm:py-3 sm:px-2 sm:text-md bg-violet-500 hover:bg-violet-400 text-white rounded-md shadow-sm transition-colors"
              >
                <FaBehanceSquare className="mr-2 text-2xl" />
                <span className="text-lg">Check out my designs on Behance</span>
              </a>
            </motion.div>
          )}
        </section>

        <div
          className="flex flex-col items-center justify-center w-full min-h-screen gap-8 px-4 sm:px-8 py-16 bg-gradient-to-b from-[#1d1d1d] via-[#1d1d1d] to-violet-900"
          id="projects"
        >
          {/* Section Title */}
          <motion.div variants={fadeIn} className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-violet-500 to-pink-500 mb-4 drop-shadow-[0_0_10px_#8b5cf6]">
              PROJECTS
            </h1>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-100  mb-4 drop-shadow-[0_0_10px_#8b5cf6]">
  Design, Code, and Creativity
</h2>

          <p className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl mb-12">
            Here are some personal, freelance, and school projects I've worked
            on and contributed to.
          </p>

          {/* Projects Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {[
              {
                image: "./natureNinjas1.jpg",
                title: "Nature Ninjas",
                description: "Climate awareness website that is made for kids.",
                tech: "Django",
                tech2: "TailwindCSS",
                github: "https://github.com/ClydeMondero/nature-ninjas.git",
              },
              {
                image: "./susihontamalaybalayhero.png",
                title: "Susihon Ta Malaybalay",
                description: "Reservation Website for Susihon Ta Malaybalay.",
                tech: "Figma",
                link: "https://www.figma.com/proto/TWjRPaDvVcWr8126zL050R/Susihon-ta-Malaybalay?node-id=21-43&p=f&t=Do5kUWBLzHge4YXy-1&scaling=contain&content-scaling=fixed&page-id=0%3A1",
              },
              {
                image: "./Matcha-Madness.png",
                title: "Task-Matcha",
                description: "Task Management website that is made to manage tasks and projects.",
                tech: "React.js",
                tech2: "TailwindCSS",
                github: "https://github.com/dreiiiur/Task-Matcha",
              },
              {
                image: "./Aural-Nexus.png",
                title: "Aural Nexus",
                description: "Web-based game that is made for gr9 students to practice their hearing ability.",
                tech: "Figma",
                link: "https://www.figma.com/proto/J4ejpBHqCimF0xXvvfdZX3/Aural-Nexus--Copy-?page-id=0%3A1&node-id=2105-23",
              },
              {
                image: "./busybee1.png",
                title: "BusyBee",
                description: "Task Management website that is made to help busybee employees to manage their tasks.",
                tech: "Figma",
                link: "https://www.figma.com/design/qieyz5wEJilByp7ZQ0TRzW/UI-Design-Exam?node-id=0-1&t=SGNyQzBvUCuT53mV-1",
              },
              {
                image: "./crescentree.png",
                title: "Crescentree",
                description:
                  "An AI chatbot powered E-commerce website that is made to help people buy and sell products.",
                tech: "WordPress",
                tech2: "Astra",
                tech3: "TydioAI",
                wordpress: "https://www.crescentreellc.com/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
              >
                <div
                  className="w-full h-40 sm:h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-5 flex flex-col gap-2 text-left">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="mt-2">
                    <p className="text-sm text-violet-400 flex items-center gap-2">
                      {project.tech}
                      <p> </p>
                      {project.tech2} <p> </p>
                      {project.tech3}
                      <p> </p>
                    </p>
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-sm text-gray-300 hover:text-violet-400 flex items-center gap-2 mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> View Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-sm text-gray-300 hover:text-violet-400 flex items-center gap-2 mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFigma /> View Project
                      </a>
                    )}
                    {project.wordpress && (
                      <a
                        href={project.wordpress}
                        className="text-sm text-gray-400 hover:text-violet-400 flex items-center gap-2 mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWordpress /> Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      

        <section className="py-20 px-6 bg-gradient-to-t from-[#1d1d1d] via-[#1d1d1d] to-violet-900" id="testimonials">
          <div className="max-w-6xl mx-auto text-center">
            {/* Header */}
            <p className="text-sm font-medium bg-violet-100 text-violet-700 px-4 py-1 inline-block rounded-full mb-4">
              Testimonials from clients and colleagues
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
              Real Stories. Real People. Real You.
            </h2>

            {/* Grid of Testimonials */}
            <div className="grid gap-6 md:grid-cols-3 mt-12">
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-3xl text-left relative shadow-md transition-all`}
                  style={{
                    backgroundColor: item.bg || "#f5f5f5",
                    transform: `rotate(${
                      i === 0 ? "-2deg" : i === 2 ? "2deg" : "0deg"
                    })`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 leading-relaxed">{item.text}</p>
                  <div className="text-2xl text-right mt-4 text-gray-500">
                    ”
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <div
          className="flex items-center justify-center w-full min-h-screen bg-transparent px-4 py-16  bg-gradient-to-b from-[#1d1d1d] via-[#1d1d1d] to-violet-900"
          id="contacts"
        >
          <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md rounded-2xl shadow-xl px-8 py-12">
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-violet-400">
                Get in Touch
              </h2>
              <p className="text-gray-100 mt-2 text-base sm:text-lg">
                Feel free to send me a message using the form below.
              </p>
            </div>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/your-form-id" // replace with your Formspree or EmailJS endpoint
              method="POST"
              className="space-y-6"
            >
              <div className="flex flex-col items-start">
                <label className="block text-gray-200 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className=" text-gray-200 mb-2 flex flex-col items-start">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="text-gray-200 mb-2 flex flex-col items-start">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="text-gray-200 mb-2 flex flex-col items-start">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-violet-600 text-white font-semibold hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-600 transition hover:scale-105 duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <footer className=" bg-gradient-to-t from-[#1d1d1d] via-[#1d1d1d] to-violet-900 px-6 py-12 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between">
            {/* Branding Section */}
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-start text-4xl sm:text-5xl bg-clip-text text-white">
                About
              </h1>
              <p className="text-gray-300 text-start sm:text-lg max-w-2xl">
                I'm Andrei John V. Poma, a freelance web designer and IT
                graduate based in Bulacan. I build modern, clean, and responsive
                websites. I'm passionate about creating engaging and
                user-friendly digital experiences.
              </p>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Navigation Links */}
              <div className="flex flex-col gap-4 text-start">
                <p className="font-bold text-lg bg-clip-text text-white">
                  Links
                </p>
                <Link
                  to="home"
                  className="text-gray-400 hover:text-violet-400 cursor-pointer transition"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  className="text-gray-400 hover:text-violet-400 cursor-pointer transition"
                >
                  About
                </Link>
                <Link
                  to="projects"
                  className="text-gray-400 hover:text-violet-400 cursor-pointer transition"
                >
                  Projects
                </Link>
                <Link
                  to="testimonials"
                  className="text-gray-400 hover:text-violet-400 cursor-pointer transition"
                >
                  Testimonials
                </Link>
                <Link
                  to="contacts"
                  className="text-gray-400 hover:text-violet-400 cursor-pointer transition"
                >
                  Contact
                </Link>
              </div>

              {/* Social Contacts */}
              <div className="flex flex-col gap-4 text-start">
                <p className="font-bold text-lg bg-clip-text text-white">
                  Contacts
                </p>
                <a
                  href="https://www.facebook.com/dreiur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 cursor-pointer transition flex items-center"
                >
                  <FaFacebookMessenger className="mr-2" />
                  Andrei Poma
                </a>
                <a
                  href="https://www.linkedin.com/in/andreipoma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400  cursor-pointer transition flex items-center"
                >
                  <FaLinkedin className="mr-2" />
                  Andrei Poma
                </a>
                <a
                  href="https://github.com/dreiiiur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 cursor-pointer transition flex items-center"
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
