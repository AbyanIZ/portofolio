// ============================================
// FILE: app/page.js (Next.js App Router)
// SEMUA DALAM SATU FILE - VERSION FINAL
// ============================================

"use client";

import React, { useState } from "react";
import {
  FaWhatsapp,
  FaGithub,
  FaEnvelope,
  FaCertificate,
  FaTimes,
  FaExpand,
  FaUserGraduate,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  // ==========================================
  // DATA YANG BISA KAMU GANTI
  // ==========================================

  const profile = {
    name: "Abyan Faiz",
    title: "UI/UX Designer & Web Developer",
    bio: "I am passionate about efficient, scalable software development that delivers the best user experience. With a strong understanding of backend, frontend, and system integration, I enjoy turning ideas into functional and impactful digital solutions.",
    photo: "/Foto.jpeg",
  };

  const skills = [
    {
      name: "Figma",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
      name: "JavaScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "HTML",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "Laravel",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    },
    {
      name: "Next.js",
      icon: "https://blog.logrocket.com/wp-content/uploads/2023/09/next-js-13-app-directory.png",
    },
    {
      name: "MySQL",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
    },
    {
      name: "Adobe Illustrator",
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
    },
    {
      name: "Unity",
      icon: "https://cdn.brandfetch.io/idEc0EPR9J/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1667820720681",
    },
    {
      name: "Canva",
      icon: "https://assets-global.website-files.com/64f605bdfa749671fed117a9/6558e05ac940fb6c69048e9c_Canva.png",
    },
    {
      name: "Word",
      icon: "https://avatars.fastly.steamstatic.com/e9362ad773ffccec737e1a557ee23df171a37bd8_full.jpg",
    },
    {
      name: "Excel",
      icon: "https://avatars.fastly.steamstatic.com/ee178d5fe80d2f95d7a02cf829eac4b14c48c9b1_full.jpg",
    },
  ];

  const projects = [
    {
      title: "Library Management System",
      image: "/system_perpustakaan.png",
      description:
        "A web-based library management system with complete features for managing books and members.",
      tags: ["Laravel", "MySQL"],
      github: "https://github.com/AbyanIZ/ukk-peminjaman-buku",
    },
    {
      title: "Car Credit System",
      image: "/system_kredit_mobil.png",
      description:
        "A web-based car credit information system built with Laravel and MySQL, featuring online credit applications, installment simulations, customer data management, and integrated verification & approval processes.",
      tags: ["Laravel", "MySQL", "Flutter"],
      github: "https://github.com/AbyanIZ/kredit-mobil",
    },
    {
      title: "Item Borrowing System",
      image: "/sarpas.png",
      description:
        "An item borrowing information system built with Laravel and MySQL to manage inventory, borrowing and return processes, and stock reporting with a responsive and user-friendly interface.",
      tags: ["Laravel", "MySQL"],
      github: "https://github.com/AbyanIZ/sarpas",
    },
  ];

  const certificates = [
    {
      title: "Internship Certificate",
      issuer: "SMKN Taruna Bhakti Depok",
      year: "2025-2026",
      image: "/sertifikat_pkl.jpeg",
      description: "I completed my internship at PT. Ciptadra Softindo",
    },
    {
      title: "Sarpas Certificate",
      issuer: "SMKN Taruna Bhakti Depok",
      year: "2024-2025",
      image: "/sertifikat_sarpas.png",
      description: "Vocational Exam Certificate from SMKN Taruna Bhakti Depok",
    },
    {
      title: "UKK Certificate",
      issuer: "SMKN Taruna Bhakti Depok",
      year: "2026",
      image: "/sertifikat_ukk.jpeg",
      description:
        "UKK (Competency Proficiency Test) Certificate from SMKN Taruna Bhakti Depok and PT. Sada Technology",
    },
  ];

  const contacts = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+62 857 7847 6172",
      link: "https://wa.me/6285778476172",
      color: "text-green-400",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "AbyanIZ",
      link: "https://github.com/AbyanIZ",
      color: "text-gray-400",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "abyanfaizmuammar2008@gmail.com",
      link: "mailto:abyanfaizmuammar2008@gmail.com",
      color: "text-blue-400",
    },
  ];

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Contact",
  ];

  // ==========================================
  // FUNGSI ZOOM MODAL
  // ==========================================
  const openModal = (image, title) => {
    setModalImage(image);
    setModalTitle(title);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalImage(null);
    setModalTitle("");
    document.body.style.overflow = "auto";
  };

  // ==========================================
  // SCROLL SMOOTH KE CONTACT
  // ==========================================
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans">
      {/* ==========================================
      ============== NAVIGATION ===================
      ========================================== */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#00bfff]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a
              href="#home"
              className="text-lg sm:text-xl font-bold tracking-wide whitespace-nowrap"
            >
              <span className="bg-gradient-to-r from-[#00bfff] to-[#1e90ff] bg-clip-text text-transparent">
                Abyan
              </span>
              <span className="text-white"> Faiz Muammar</span>
              <span className="text-gray-500 text-xs sm:text-sm font-light ml-1"></span>
            </a>

            <ul className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#00bfff] transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00bfff] to-[#1e90ff] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-400 hover:text-[#00bfff] transition-colors"
            >
              {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#00bfff]/10 transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center py-6 gap-4 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 hover:text-[#00bfff] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ==========================================
      ============== HERO / HOME ==================
      ========================================== */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
            {/* PROFILE PHOTO */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-full animate-pulse-ring border-2 border-[#00bfff]/30"></div>
              <div
                className="absolute inset-[-8px] rounded-full border-2 border-[#00bfff]/20 animate-pulse-ring"
                style={{ animationDelay: "0.5s" }}
              ></div>

              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-[#00bfff] shadow-[0_0_40px_rgba(0,191,255,0.2)]">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="max-w-2xl text-center lg:text-left space-y-4 sm:space-y-6">
              <p className="text-[#00bfff] font-semibold tracking-wider text-sm sm:text-base">
                👋 HELLO, I AM
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black">
                <span className="bg-gradient-to-r from-[#00bfff] to-[#1e90ff] bg-clip-text text-transparent">
                  Abyan
                </span>
                <span className="text-white"> Faiz Muammar </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-300">
                {profile.title}
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base lg:text-lg">
                {profile.bio}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
                <a
                  href="/cv.pdf"
                  download
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#00bfff] to-[#1e90ff] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#00bfff]/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Download CV
                </a>
                <button
                  onClick={scrollToContact}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 border border-[#00bfff]/50 text-[#00bfff] font-semibold rounded-full hover:bg-[#00bfff]/10 transition-all duration-300 text-sm sm:text-base"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
      ============== ABOUT ========================
      ========================================== */}
      <section id="about" className="py-16 sm:py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              About{" "}
              <span className="bg-gradient-to-r from-[#00bfff] to-[#1e90ff] bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#00bfff] to-[#1e90ff] mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-[#1a1a2e]/50 p-6 sm:p-8 rounded-2xl border border-[#00bfff]/10 hover:border-[#00bfff]/30 transition-all duration-300 group hover:scale-105 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-[#00bfff]/10 rounded-full flex items-center justify-center text-2xl sm:text-3xl group-hover:bg-[#00bfff]/20 transition-colors">
                <FaUserGraduate className="text-[#00bfff]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-4 mb-2">
                RPL Student
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Grade 12 RPL 2 at SMKN Taruna Bhakti Depok
              </p>
            </div>

            <div className="bg-[#1a1a2e]/50 p-6 sm:p-8 rounded-2xl border border-[#00bfff]/10 hover:border-[#00bfff]/30 transition-all duration-300 group hover:scale-105 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-[#00bfff]/10 rounded-full flex items-center justify-center text-2xl sm:text-3xl group-hover:bg-[#00bfff]/20 transition-colors">
                <FaLaptopCode className="text-[#00bfff]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-4 mb-2">
                Web Developer
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Building websites with programming languages
              </p>
            </div>

            <div className="bg-[#1a1a2e]/50 p-6 sm:p-8 rounded-2xl border border-[#00bfff]/10 hover:border-[#00bfff]/30 transition-all duration-300 group hover:scale-105 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-[#00bfff]/10 rounded-full flex items-center justify-center text-2xl sm:text-3xl group-hover:bg-[#00bfff]/20 transition-colors">
                <FaCode className="text-[#00bfff]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-4 mb-2">
                UI/UX Designer
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Designing interfaces with Figma
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 sm:mt-10 bg-[#1a1a2e]/30 p-6 sm:p-8 rounded-2xl border border-[#00bfff]/5 hover:border-[#00bfff]/20 transition-all duration-300">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg text-center">
              {profile.bio}
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
      ============== SKILLS =======================
      ========================================== */}
      <section id="skills" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              My{" "}
              <span className="bg-gradient-to-r from-[#00bfff] to-[#1e90ff] bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#00bfff] to-[#1e90ff] mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-[#1a1a2e]/50 p-4 sm:p-6 rounded-2xl text-center border border-[#00bfff]/10 hover:border-[#00bfff]/30 hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-[#0a0a0a] rounded-full flex items-center justify-center p-2 sm:p-3 group-hover:shadow-[0_0_30px_rgba(0,191,255,0.15)] transition-shadow">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
      ============== PROJECTS =====================
      ========================================== */}
      <section id="projects" className="py-16 sm:py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              My{" "}
              <span className="bg-gradient-to-r from-[#00bfff] to-[#1e90ff] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#00bfff] to-[#1e90ff] mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-[#1a1a2e]/50 rounded-2xl overflow-hidden border border-[#00bfff]/10 hover:border-[#00bfff]/30 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div
                  className="relative h-48 sm:h-52 overflow-hidden cursor-pointer"
                  onClick={() => openModal(project.image, project.title)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <div className="bg-[#00bfff]/20 backdrop-blur-sm p-3 rounded-full border border-[#00bfff]/50">
                      <FaExpand className="text-white text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-[#00bfff]/10 text-[#00bfff] border border-[#00bfff]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#00bfff] hover:text-white transition-colors text-xs sm:text-sm font-medium"
                    >
                      <FaGithub /> View on GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
      ============== CERTIFICATES =================
      ========================================== */}
      <section id="certificates" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              My{" "}
              <span className="bg-gradient-to-r from-[#00bfff] to-[#1e90ff] bg-clip-text text-transparent">
                Certificates
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#00bfff] to-[#1e90ff] mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="bg-[#1a1a2e]/50 rounded-2xl overflow-hidden border border-[#00bfff]/10 hover:border-[#00bfff]/30 hover:scale-[1.03] transition-all duration-300 group"
              >
                <div
                  className="relative h-44 sm:h-52 overflow-hidden bg-[#0a0a0a] cursor-pointer"
                  onClick={() => openModal(cert.image, cert.title)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-3 sm:p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <div className="bg-[#00bfff]/20 backdrop-blur-sm p-3 rounded-full border border-[#00bfff]/50">
                      <FaExpand className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#00bfff]/20 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs text-[#00bfff] border border-[#00bfff]/30">
                    #{index + 1}
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {cert.title}
                    </h3>
                    <FaCertificate className="text-[#00bfff] text-lg sm:text-xl flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-[#00bfff] text-xs sm:text-sm font-medium">
                    {cert.year}
                  </p>
                  <p className="text-gray-500 text-[10px] sm:text-xs mt-2">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
      ============== CONTACT ======================
      ========================================== */}
      <section id="contact" className="py-16 sm:py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Contact{" "}
              <span className="bg-gradient-to-r from-[#00bfff] to-[#1e90ff] bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#00bfff] to-[#1e90ff] mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.title}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a1a2e]/50 p-4 sm:p-6 rounded-2xl border border-[#00bfff]/10 hover:border-[#00bfff]/30 hover:scale-105 transition-all duration-300 group flex items-center gap-3 sm:gap-4"
                >
                  <Icon
                    className={`text-2xl sm:text-3xl ${contact.color} group-hover:scale-110 transition-transform`}
                  />
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">
                      {contact.title}
                    </h3>
                    <p className="text-gray-400 text-[10px] sm:text-sm truncate max-w-[120px] sm:max-w-none">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
      ============== FOOTER =======================
      ========================================== */}
      <footer className="py-6 sm:py-8 border-t border-[#00bfff]/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2025 Abyan Faiz Muammar.
          </p>
        </div>
      </footer>

      {/* ==========================================
      ============== MODAL ZOOM ===================
      ========================================== */}
      {modalImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#0a0a0a] rounded-2xl overflow-hidden border border-[#00bfff]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-[#00bfff]/30"
            >
              <FaTimes size={16} className="sm:text-xl" />
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-white font-bold text-base sm:text-lg">
                {modalTitle}
              </h3>
            </div>

            <div className="flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] p-3 sm:p-4">
              <img
                src={modalImage}
                alt={modalTitle}
                className="max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
      ============== CSS ANIMATIONS ===============
      ========================================== */}
      <style jsx global>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-pulse-ring {
          animation: pulse-ring 1.5s ease-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #00bfff;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #1e90ff;
        }
      `}</style>
    </div>
  );
}
