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
          className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-12 rounded-lg bg-noise bg-[url('./new.jpg')] bg-cover bg-center"
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
        <div className="relative"
          style={{
            boxShadow: `
              0px 20px 40px rgba(0, 0, 0, 0.15),
              0px 20px 40px rgba(0, 0, 0, 0.15)
            `,
          }}
        >
            
          </div>
        {/* SECTION: MARQUEE */}
    <div className="relative w-full overflow-hidden p-12 z-10 bg-[url('./new.jpg')] bg-cover bg-center" >

          <div className="absolute inset-0 bg-[url('/wave.svg')] bg-repeat-x bg-top opacity-20 pointer-events-none" />

          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-50 blur-md" />

          <motion.div
            className="whitespace-nowrap animate-marquee flex gap-16 px-4"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 10, repeat: Infinity }}
          >
            {[
              "/logos/crescentree.png",
              "/logos/shift.png",
              "/logos/crescentree.png",
              "/logos/shift.png",
              "/logos/crescentree.png",
              "/logos/shift.png",
              "/logos/crescentree.png",
              "/logos/shift.png",
            ].map((src, idx) => (
              <motion.img
                key={idx}
                src={src}
                alt={`client-${idx}`}
                className="h-10 grayscale opacity-80 hover:opacity-100 transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "tween", duration: 1, delay: idx * 0.1 }}
              />
            ))}
            {[
              "/logos/crescentree.png",
              "/logos/shift.png",
              "/logos/crescentree.png",
              "/logos/shift.png",
              "/logos/crescentree.png",
              "/logos/shift.png",
              "/logos/crescentree.png",
              "/logos/shift.png",
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

            <div></div>
<motion.section
  id="about"
  className="relative w-full min-h-full px-4 py-12 sm:px-8 sm:py-16 flex flex-col gap-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={stagger}
>
  {/* ABOUT ME */}
  <motion.div
    variants={fadeIn}
    className="w-full max-w-6xl rounded-xl bg-white/5 backdrop-blur-md shadow-xl p-6 sm:p-10 flex flex-col gap-4 items-center mx-auto"
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
      <PiHandWavingThin className="mr-2 animate-bounce" /> About Me
    </h2>
    <p className="text-gray-500 text-lg leading-relaxed text-justify">
      I'm <strong className="text-black">Andrei John V. Poma</strong>, a freelance web designer and IT graduate based in Bulacan. I build modern, clean, and responsive websites. I'm passionate about creating engaging and user-friendly digital experiences.
    </p>
  </motion.div>

  {/* EXPERIENCE & TECHNOLOGIES/TOOLS */}
  <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
    {/* EXPERIENCE LEFT */}
    <motion.div
      variants={fadeIn}
      className="flex-1 rounded-xl bg-white/10 backdrop-blur-md shadow-2xl p-6 sm:p-10 flex flex-col gap-4"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4 flex items-center">
        <IoBriefcaseOutline className="mr-2"/>Experience
      </h1>
      <div className="flex flex-col gap-2 items-start">
        <p className="text-lg text-black font-bold">Shift101 IT Solutions</p>
        <p className="text-base text-green-500 italic ">WordPress Developer and Web Developer</p>
        <p className="text-sm text-gray-500">Feb 2025 - May 2025</p>
      </div>
      <p className="text-gray-600 mt-4 leading-relaxed text-justify">
        My tasks during the internship included creating websites using WordPress, HTML, Tailwind CSS, PHP, and MySQL.
      </p>
      <p className="text-sm text-gray-600 mt-2 text-start">
        <span className="font-bold">Projects:</span> Crescentree E-commerce Website
      </p>
      <hr className="my-6 border-gray-500" />
      <div className="flex flex-col gap-2 text-start">
        <p className="text-lg text-black font-bold">Freelance</p>
        <p className="text-base text-green-500 italic">UI/UX Designer and Web Developer</p>
        <p className="text-sm text-gray-500">2024 - Current</p>
      </div>
      <p className="text-gray-600 mt-4 leading-relaxed text-justify">
        My freelance projects include creating websites using HTML, Tailwind CSS, JavaScript, and React. I also provide UI/UX design services for clients using Figma.
      </p>
      <p className="text-sm text-gray-600 mt-2 text-start">
        <span className="font-bold">Projects:</span> Susihon ta Malaybalay, Aural Nexus
      </p>
    </motion.div>

    {/* TECHNOLOGIES & TOOLS RIGHT */}
    <div className="flex-1 flex flex-col gap-8">
      {/* TECHNOLOGIES */}
      <motion.div
        variants={fadeIn}
        className="rounded-3xl bg-white/10 backdrop-blur-md shadow-xl p-6 sm:p-10 flex flex-col gap-6 items-center"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-black">Technologies I Use</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
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
              <Icon className="text-3xl sm:text-4xl text-gray-700 hover:text-green-400" />
              <span className="text-center text-sm text-gray-600 mt-2">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* TOOLS */}
      <motion.div
        variants={fadeIn}
        className="rounded-3xl bg-white/10 backdrop-blur-md shadow-xl p-6 sm:p-10 flex flex-col gap-6 items-center"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-black">Tools I Use</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: PiFigmaLogoDuotone, name: "Figma" },
            { icon: VscVscode, name: "VS Code" },
            { icon: SiAdobephotoshop, name: "Adobe Photoshop" },
            { icon: FaGithub, name: "GitHub" },
            { icon: SiXampp, name: "XAMPP" },
          ].map(({ icon: Icon, name }, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className="hover:scale-110 transition-transform flex flex-col items-center"
            >
              <Icon className="text-3xl sm:text-4xl text-gray-700 hover:text-green-400" />
              <span className="text-center text-sm text-gray-600 mt-2">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>

  {/* SERVICES */}
  <motion.div
    variants={fadeIn}
    className="w-full max-w-6xl mx-auto rounded-xl bg-white/10 backdrop-blur-md shadow-xl p-6 sm:p-10 flex flex-col gap-8 items-center"
  >
    <h3 className="text-3xl sm:text-4xl font-bold text-black flex items-center gap-2"><MdOutlineDesignServices size={32} /> Services</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {[
        {
          icon: "💻",
          title: "Web Development",
          description: "Personal or business websites built with modern technologies — clean, fast, and scalable.",
        },
        {
          icon: "🎨",
          title: "UI/UX Designing",
          description: "Crafting intuitive and engaging user interfaces tailored to your brand and users’ needs.",
        },
        {
          icon: "📱",
          title: "Responsive Design",
          description: "Ensuring your website adapts flawlessly across all screen sizes — from mobile to desktop.",
        },
        {
          icon: "🌐",
          title: "Frontend Development",
          description: "Building high-performance, interactive interfaces using modern frameworks like React and Vue.",
        },
        {
          icon: "🖌️",
          title: "Graphic Design",
          description: "Designing custom visuals: logos, icons, banners, and branding assets for digital experiences.",
        },
        {
          icon: "🌐",
          title: "Web Designing",
          description: "Web Designs using React and Tailwind CSS for a modern and responsive user interface.",
        },
      ].map((service, idx) => (
        <motion.div
          key={idx}
          variants={fadeIn}
          className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-transform hover:scale-105 hover:border-green-400 group"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
          <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>

  {/* BEHANCE */}
  <motion.div
    variants={fadeIn}
    className="w-full max-w-3xl mx-auto flex flex-col items-center gap-4 mt-8"
  >
    <p className="text-lg sm:text-xl text-gray-400 text-center">
      I also do graphic design and UI/UX design that you can check out on <span className="font-bold">Behance</span>
    </p>
    <a
      href="https://www.behance.net/gallery/226837617/My-Designs"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-400 text-white rounded-md shadow-sm transition-colors"
    >
      <FaBehanceSquare className="mr-2 text-2xl" />
      <span className="text-lg">Check out my designs on Behance</span>
    </a>
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
                description:
                  "Handled the UI/UX Design of this website and Front-End Development",
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
                description:
                  "Handled the Full-Stack Development of this website",
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

        <section className="py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    {/* Header */}
    <p className="text-sm font-medium bg-green-100 text-green-700 px-4 py-1 inline-block rounded-full mb-4">
      Testimonials from clients and colleagues
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
            transform: `rotate(${i === 0 ? '-2deg' : i === 2 ? '2deg' : '0deg'})`
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
          <div className="text-2xl text-right mt-4 text-gray-500">”</div>
        </div>
      ))}
    </div>
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
