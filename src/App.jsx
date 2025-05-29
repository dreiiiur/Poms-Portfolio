import "./App.css";
import React, { useState, useEffect } from "react";

import { FaFigma, FaGithub, FaInstagram, FaRProject } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { MdDarkMode } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

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
      rating: 4,
    },
    {
      image: "./default-user.jpg",
      name: "Joana Perey",
      position: "Client",
      text: "Mr. Poma is creative and insightful in different ways. He exerts great effort in designing, which exceeds my imagination and expectations. The quality and efficiency of his work are commendable.",
      rating: 5,
    },
    {
      image: "./angelo.jpg",
      name: "Angelo Parungao",
      position: "Fullstack Developer",
      text: "Andrei is a hardworking and dedicated UI/UX designer. His work reflects great attention to detail, and he consistently delivers quality results. He is also open to feedback and always willing to improve. It's a pleasure working with him.",
      rating: 5,
    },
    {
      image: "./karina.jpg",
      name: "Erlinda Bien",
      position: "Client",
      text: "We are incredibly grateful to Mr. Andrei, an outstanding IT student, for developing our app. His dedication, technical skill, and attention to detail brought our ideas to life in a smooth, user-friendly application. Thank you for your excellent work and professionalism!",
      rating: 5,
    },
    {
      image: "./default-user.jpg",
      name: "Kris Repolles",
      position: "Client",
      text: " Sir Andrei demonstrates efficiency and precision in his work, consistently exerting maximum effort and resourcefully utilizing all available design tools and technologies to deliver exceptional solutions.",
      rating: 5,
    },
  ];

  return (
    <>
      <div
        className="min-h-full max-w-screen flex flex-col max-w-full mx-auto"
        id="home"
      >
        <header className="gap-4 sticky top-0 z-50 rounded-3xl ">
          <nav className="flex justify-between items-center gap-4 rounded-lg max-w-screen bg-transparent p-4">
            <div className="text-5xl text-gray-500 tracking-wide hidden md:block lg:block">
              <img src="/pomsicles.png" alt="Logo" className="w-12 h-12" />
            </div>

            {/* Toggle Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-400  hover:text-green-500 rounded-full transition duration-300 ease-in-out"
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
            <ul className="hidden lg:flex space-x-8 lg:space-x-8 text-gray-500 gap-2 text-sm font-bold items-center shadow-lg backdrop-blur-md justify-center pr-4 transition duration-500 py-3 px-6 rounded-xl mx-auto">
              <li className="relative group">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 cursor-pointer"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block">
                    <p className="bg-white text-black text-xs px-2 py-1 rounded-lg shadow-lg">
                      Home
                    </p>
                  </div>
                  <GoHomeFill className="hover:text-green-500 cursor-pointer text-xl md:text-2xl hover:scale-125 transition duration-500 ease-out" />
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
                  <FaUserCircle className="hover:text-green-500 cursor-pointer text-xl md:text-2xl hover:scale-125 transition duration-500 ease-out" />
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
                  <AiFillProject className="hover:text-green-500 cursor-pointer text-xl md:text-2xl hover:scale-125 transition duration-500 ease-out" />
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
                  <MdRateReview className="hover:text-green-500 cursor-pointer text-xl md:text-2xl hover:scale-125 transition duration-500 ease-out" />
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
                  <IoMail className="hover:text-green-500 cursor-pointer text-xl md:text-2xl hover:scale-125 transition duration-500 ease-out" />
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed font-regular inset-0 flex flex-col items-center transform translate-x-0 transition duration-500 ease-in-out justify-center z-50 gap-8">
            <div className="fixed top-0 left-0 h-full w-72 backdrop-blur  bg-white/70 shadow-xl  p-6 flex flex-col justify-between">
              {/* User Info */}
              <div>
                {/* Close Button */}
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 text-gray-800 hover:text-green-500 cursor-pointer"
                  aria-label="Close menu"
                >
                  <span className="text-2xl">&times;</span>
                </button>

                <div className="flex items-center gap-4 mb-8">
                  <img
                    src="/gradpic123.png"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-gray-600 font-bold text-lg">
                      Andrei Poma
                    </h4>
                  </div>
                </div>

                {/* Menu Items */}
                <ul className="space-y-5 text-gray-800">
                  <li className="flex items-center gap-3 text-lg hover:text-green-500 cursor-pointer">
                    <GoHomeFill className="hover:text-green-500 cursor-pointer text-xl md:text-2xl" />
                    <Link
                      to="home"
                      smooth={true}
                      duration={500}
                      className="hover:text-green-500 cursor-pointer"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 text-lg hover:text-green-500 cursor-pointer">
                    <FaUserCircle className="hover:text-green-500 cursor-pointer text-xl md:text-2xl" />
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
                    <AiFillProject className="hover:text-green-500 cursor-pointer text-xl md:text-2xl" />
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
                    <MdRateReview className="hover:text-green-500 cursor-pointer text-xl md:text-2xl" />
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
                    <IoMail className="hover:text-green-500 cursor-pointer text-xl md:text-2xl" />
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
          className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-12 rounded-lg "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl mt-12 lg:mt-0">
            <p className="text-gray-600 text-lg mb-2">— Hello There!</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600 leading-tight mb-4 drop-shadow-lg">
              I’m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500 font-sans ">
                Andrei{" "}
              </span>
              <PiHandWavingThin className="animate-bounce transition duration-500 ease-in-out inline-block" />
              ,
              <br />
              Freelance <span className="text-green-500">Web Designer</span>
              <br />
              and <span className="text-green-500">Front-End Developer</span>
              <br />
              based in Bulacan.
            </h1>
            <p className="text-gray-500 mt-4 text-base sm:text-lg s">
              I’m a Freelance Web Designer and Front-End Developer based in the
              Bulacan, Philippines. I have a passion for creating visually
              stunning and user-friendly websites and apps.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6">
              <button className="bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition hover:scale-105 duration-300 ease-in-out flex items-center gap-2">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  View my Projects
                </Link>
                <FaEye className="animate-bounce transition duration-500 ease-in-out text-xl" />
              </button>
              <button className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white py-2 px-6 rounded-lg font-semibold hover:scale-105 transition duration-300 ease-in-out flex items-center gap-2">
                <a
                  href="./Poma-Andrei-John.V.CV2025.pdf"
                  target="_blank"
                  className="hover:text-white cursor-pointer transition-opacity duration-500 ease-in-out"
                  download
                >
                  Download CV
                </a>
                <PiReadCvLogoBold className="animate-bounce transition duration-500 ease-in-out text-xl" />
              </button>
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
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-200 to-gray-500 circle"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1.2 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "reverse",
              }}
            />
            <img
              src="/gradpic123.png"
              alt="Profile"
              className="relative w-[250px] sm:w-[350px] lg:w-[460px] h-auto object-cover rounded-full filter drop-shadow-lg picture"
            />
          </motion.div>
        </motion.div>

        {/* Wavy SVG Separator */}
        <div className="relative w-full overflow-hidden leading-none -mt-10 z-10">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-[100px] rotate-360 fill-gray-900 animate-wave"
          >
            <path d="M0.00,49.98 C150.00,150.00 349.28,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" />
          </svg>
        </div>

        <motion.section
          id="about"
          className="relative w-full min-h-screen px-4 sm:px-8 py-16 flex flex-col items-center gap-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {/* ABOUT ME */}
          <motion.div
            variants={fadeIn}
            className="w-full max-w-5xl rounded-3xl bg-white/5 backdrop-blur-md shadow-2xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <PiHandWavingThin className="mr-2 animate-bounce" /> About Me
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed text-justify">
                I'm <strong className="text-white">Andrei John V. Poma</strong>,
                a freelance web designer and IT graduate based in Bulacan. I
                build modern, clean, and responsive websites. I'm passionate
                about creating engaging and user-friendly digital experiences.
              </p>
              <p className="mt-4 text-gray-400 text-lg leading-relaxed text-justify">
                Former Full-Stack Wordpress and Web Developer intern at{" "}
                <strong className="text-white">shift101 IT Solutions</strong>.
                Currently focused on freelance projects, self-learning, and
                enhancing my design and dev skills.
              </p>
            </div>
          </motion.div>

          {/* TECHNOLOGIES */}
          <motion.div
            variants={fadeIn}
            className="w-full max-w-5xl rounded-3xl bg-white/5 backdrop-blur-md shadow-xl p-6 sm:p-10 flex flex-col gap-6 items-center"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-white flex items-center gap-2">
              Technologies I Use
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-9 gap-6">
              {[
                FaHtml5,
                FaCss3Alt,
                IoLogoJavascript,
                FaReact,
                RiTailwindCssFill,
                FaBootstrap,
                FaPhp,
                SiMysql,
                FaWordpress,
              ].map((Icon, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  className="hover:scale-110 transition-transform"
                >
                  <Icon className="text-4xl sm:text-5xl text-gray-300 hover:text-green-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* TOOLS */}
          <motion.div
            variants={fadeIn}
            className="w-full max-w-5xl rounded-3xl bg-white/5 backdrop-blur-md shadow-xl p-6 sm:p-10 flex flex-col gap-6 items-center"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-white flex items-center gap-2">
              Tools I Use
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
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
                  <Icon className="text-4xl sm:text-5xl text-gray-300 hover:text-green-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* HOBBIES */}
          <motion.div
            variants={fadeIn}
            className="w-full max-w-5xl rounded-3xl bg-white/5 backdrop-blur-md shadow-xl p-6 sm:p-10 flex flex-col gap-6 items-center"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
              Hobbies
            </h3>
            <div className="flex flex-col gap-4 w-full">
              {[
                "Designing UI using Figma",
                "Building React side projects",
                "Gaming (FPS, MOBA)",
                "Learning new tech and tools",
                "Coding while listening to Laufey",
              ].map((hobby, idx) => (
                <div
                  key={idx}
                  className={`px-6 py-3 rounded-xl w-fit max-w-full text-gray-300 text-lg shadow-inner hover:scale-105 transition-transform hover:text-green-400 ${
                    idx % 2 === 0
                      ? "bg-white/10 self-start"
                      : "bg-white/10 self-end"
                  }`}
                >
                  {hobby}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <div
          className="flex flex-col items-center justify-center w-full min-h-screen gap-8 px-4 sm:px-8 py-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900"
          id="projects"
        >
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            PROJECTS
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 text-center max-w-3xl mb-12">
            Here are some personal, freelance, and school projects I've worked
            on and contributed to.
          </p>
          {/* Behance Link */}
          <div className="flex flex-col items-center justify-center w-full max-w-3xl mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl text-gray-400 text-center mb-4 sm:mb-6">
              I also do graphic design and UI/UX design that you can check out on{" "}
              <span className="font-bold">Behance</span>
            </p>
            <a
              href="https://www.behance.net/gallery/226837617/My-Designs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-green-500 text-white rounded-md shadow-sm sm:w-fit transition-all duration-300"
            >
              <FaBehanceSquare className="mr-2" /> Check out my designs on Behance
            </a>
          </div>
          

          {/* Projects Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {[
              {
                image: "./natureNinjas1.jpg",
                title: "Nature Ninjas",
                description: "Contributed to the Frontend of this website",
                tech: "Django",
                tech2: "TailwindCSS",
                github: "https://github.com/ClydeMondero/nature-ninjas.git",
              },
              {
                image: "./susihontamalaybalayhero.png",
                title: "Susihon Ta Malaybalay",
                description: "Handled the UI/UX Design.",
                tech: "Figma",
                link: "https://www.figma.com/proto/TWjRPaDvVcWr8126zL050R/Susihon-ta-Malaybalay?node-id=21-43&p=f&t=Do5kUWBLzHge4YXy-1&scaling=contain&content-scaling=fixed&page-id=0%3A1",
              },
              {
                image: "./Matcha-Madness.png",
                title: "Task-Matcha",
                description: "Delivered a task management website",
                tech: "React.js",
                tech2: "TailwindCSS",
                github: "https://github.com/dreiiiur/Task-Matcha",
              },
              {
                image: "./industry-system.jpg",
                title: "Industry System",
                description: "Handled the UI/UX Design of this website and Front-End Development",
                tech: "PHP",
                tech2: "TailwindCSS",
                tech3: "MySQL",
                github: "https://github.com/dreiiiur/Industry-System",
              },
              {
                image: "./Aural-Nexus.png",
                title: "Aural Nexus",
                description: "Handled the UI/UX Design of this website",
                tech: "Figma",
                link: "https://www.figma.com/proto/J4ejpBHqCimF0xXvvfdZX3/Aural-Nexus--Copy-?page-id=0%3A1&node-id=2105-23",
              },
              {
                image: "./busybee.png",
                title: "BusyBee",
                description: "Handled the UI/UX Design of this website",
                tech: "Figma",
                link: "https://www.figma.com/design/qieyz5wEJilByp7ZQ0TRzW/UI-Design-Exam?node-id=0-1&t=SGNyQzBvUCuT53mV-1",
              },
              {
                image: "./crescentree.png",
                title: "Crescentree",
                description: "Handled the Full-Stack Development of this website",
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
                  <p className="text-gray-500">{project.description}</p>
                  <div className="mt-2">
                    <p className="text-sm text-green-400 flex items-center gap-2">
                      {project.tech}
                      <p> </p>
                      {project.tech2} <p> </p>
                      {project.tech3}
                      <p> </p>
                    </p>
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-sm text-gray-400 hover:text-violet-400 flex items-center gap-2 mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> View Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-sm text-gray-400 hover:text-violet-400 flex items-center gap-2 mt-2"
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
        {/* Wavy SVG Separator */}
        <div className="relative w-full overflow-hidden leading-none -mt-10 z-10 bg-transparent">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-[100px] rotate-180 fill-gray-900 animate-wave"
          >
            <path d="M0.00,49.98 C150.00,150.00 349.28,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" />
          </svg>
        </div>

        {/* Testimonial Section */}
        <section
  className="relative min-h-screen w-full flex items-center justify-center py-16 px-4 overflow-hidden"
  id="testimonials"
>
  {/* Minimal Background Effects */}
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 z-0"></div>

  {/* Main Content */}
  <div className="relative w-full max-w-6xl mx-auto z-10">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
      What they say{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
        About me?
      </span>
    </h2>
    <p className="text-md sm:text-lg md:text-xl text-gray-500 text-center mb-12">
      A few words from clients and colleagues.
    </p>

    <Slider {...settings}>
      {testimonials.map((item, index) => (
        <div key={index} className="px-4">
          <div className="rounded-2xl shadow-md hover:shadow-2xl transition-transform p-8 max-w-xl mx-auto text-gray-800 bg-white">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-green-400 shadow-md"
              />
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-green-600">{item.position}</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-gray-600">{item.text}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

        {/* Wavy SVG Separator */}
        <div className="relative w-full overflow-hidden leading-none -mt-10 z-10">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-[100px] rotate-360 fill-gray-900 animate-wave"
          >
            <path d="M0.00,49.98 C150.00,150.00 349.28,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" />
          </svg>
        </div>

        {/* Contact Section */}
        <div
          className="flex items-center justify-center w-full min-h-screen bg-transparent px-4 py-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900"
          id="contacts"
        >
          <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md rounded-2xl shadow-xl px-8 py-12">
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-white">
                Get in Touch
              </h2>
              <p className="text-gray-400 mt-2 text-base sm:text-lg">
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
                  className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
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
                  className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
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
                  className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
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
                  className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 transition hover:scale-105 duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <footer className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900 px-6 py-12 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between">
            {/* Branding Section */}
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-start text-4xl sm:text-5xl bg-clip-text text-white">
                About
              </h1>
              <p className="text-gray-400 text-start sm:text-lg max-w-2xl">
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
                  className="text-gray-400 hover:text-green-400 cursor-pointer transition"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  className="text-gray-400 hover:text-green-400 cursor-pointer transition"
                >
                  About
                </Link>
                <Link
                  to="projects"
                  className="text-gray-400 hover:text-green-400 cursor-pointer transition"
                >
                  Projects
                </Link>
                <Link
                  to="testimonials"
                  className="text-gray-400 hover:text-green-400 cursor-pointer transition"
                >
                  Testimonials
                </Link>
                <Link
                  to="contacts"
                  className="text-gray-400 hover:text-green-400 cursor-pointer transition"
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
                  className="text-gray-400 hover:text-green-400 cursor-pointer transition flex items-center"
                >
                  <FaFacebookMessenger className="mr-2" />
                  Andrei Poma
                </a>
                <a
                  href="https://www.linkedin.com/in/andreipoma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400  cursor-pointer transition flex items-center"
                >
                  <FaLinkedin className="mr-2" />
                  Andrei Poma
                </a>
                <a
                  href="https://github.com/dreiiiur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 cursor-pointer transition flex items-center"
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
