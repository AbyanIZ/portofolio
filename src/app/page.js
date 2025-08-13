import { FaWhatsapp, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white to-purple-100 text-gray-900 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-lg border-b border-purple-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Abyan Fa
              </span>
              iz Muammar
            </h1>
            <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <li key={section} className="relative group">
                    <a
                      href={`#${section}`}
                      className="hover:text-purple-600 transition duration-300"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                )
              )}
            </ul>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-purple-600 transition">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-20 sm:pt-28 sm:pb-24 min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-purple-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center group">
              <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-purple-400 via-pink-400 to-purple-300 opacity-40 blur-3xl animate-pulse"></div>
              <img
                src="https://i.pinimg.com/736x/2d/37/d9/2d37d9e9bf5943fedef00e6f6a387379.jpg"
                alt="Foto Profil"
                className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-[0_0_30px_rgba(128,0,128,0.5)] group-hover:scale-110 group-hover:rotate-3 transition duration-500 ease-out"
              />
            </div>
            <div className="max-w-lg text-center lg:text-left space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-purple-800 animate-pulse">
                Hi, I am{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Abyan
                </span>
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-700 via-pink-600 to-purple-400 bg-clip-text text-transparent animate-text-glow">
                UI/UX Designer
              </h1>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg lg:text-xl">
                Passionate about designing intuitive and visually stunning user
                interfaces with tools like Figma, paired with modern web
                development using JavaScript, HTML, CSS, and Laravel.
              </p>
              <a
                href="/Abyan_Faiz_Muammar_CV.pdf"
                download
                className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold text-lg hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/40 transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28 bg-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-purple-800">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-base sm:text-lg lg:text-xl">
              Saya adalah siswa kelas 12 RPL 2 jurusan Rekayasa Perangkat Lunak.
              Saya bersemangat dalam merancang antarmuka pengguna yang intuitif
              dan estetis menggunakan alat seperti Figma. Ketertarikan saya pada
              UI/UX mendorong saya untuk terus belajar dan menciptakan
              pengalaman digital yang menarik dan fungsional, diimbangi dengan
              keahlian pengembangan web menggunakan JavaScript, HTML, CSS, dan
              Laravel.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 text-center text-purple-800">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Figma",
                icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
                description:
                  "Desain antarmuka pengguna yang intuitif dan kolaboratif untuk prototyping.",
              },
              {
                name: "JavaScript",
                icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                description:
                  "Bahasa pemrograman untuk interaktivitas dinamis pada website.",
              },
              {
                name: "HTML",
                icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
                description:
                  "Struktur halaman web yang semantik dan terorganisir.",
              },
              {
                name: "CSS",
                icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
                description:
                  "Styling modern dengan Flexbox, Grid, dan animasi.",
              },
              {
                name: "Laravel",
                icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
                description:
                  "PHP framework untuk pengembangan aplikasi web yang cepat.",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-white border border-purple-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 hover:border-purple-300 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-20 h-20 mb-6 group-hover:scale-110 transition"
                />
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  {skill.name}
                </h3>
                <p className="text-gray-600 text-base">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-28 bg-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 text-center text-purple-800">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sifo Sarpas",
                image:
                  "https://i.pinimg.com/736x/9a/cb/b9/9acbb9c5fca8392952934e9521bc0dc4.jpg",
                description:
                  "Sistem manajemen sarana prasarana sekolah dengan UI/UX intuitif berbasis Laravel dan Flutter.",
                github: "https://github.com/AbyanIZ/sarpas",
                tags: ["Laravel", "Flutter", "Figma"],
              },
              {
                title: "Movie Film",
                image:
                  "https://i.pinimg.com/736x/2e/0b/46/2e0b469558d2e613f501d38fd1bab440.jpg",
                description:
                  "Membuat web movie film dengan desain UI/UX yang menarik dan responsif.",
                github: "https://github.com/AbyanIZ/Tugas-Pwd",
                tags: ["Figma", "JavaScript"],
              },
              {
                title: "Portfolio Web",
                image:
                  "https://i.pinimg.com/736x/c7/18/ba/c718ba975521bd74f0c170856583e303.jpg",
                description:
                  "Membuat website resturant dengan desain UI/UX yang modern dan responsif.",
                github: "https://github.com/AbyanIZ/portfolio-web",
                tags: ["Laravel", "Tailwind", "Figma"],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-white border border-purple-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 text-center text-purple-800">
            Contact{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <FaWhatsapp className="text-green-500 text-3xl" />,
                title: "WhatsApp",
                value: "+62 857 7847 6172",
                link: "https://wa.me/6285778476172",
                hoverColor: "hover:border-green-300",
              },
              {
                icon: <FaGithub className="text-gray-700 text-3xl" />,
                title: "GitHub",
                value: "AbyanIZ",
                link: "https://github.com/AbyanIZ",
                hoverColor: "hover:border-gray-400",
              },
              {
                icon: <FaInstagram className="text-pink-500 text-3xl" />,
                title: "Instagram",
                value: "yanz_ngap",
                link: "https://instagram.com/yanz_ngap",
                hoverColor: "hover:border-pink-300",
              },
              {
                icon: <FaEnvelope className="text-red-500 text-3xl" />,
                title: "Email",
                value: "Get in touch",
                link: "mailto:abyanfaizmuammar2008@gmail.com",
                hoverColor: "hover:border-red-300",
              },
            ].map((contact) => (
              <a
                key={contact.title}
                href={contact.link}
                target="_blank"
                className={`flex items-center gap-4 p-6 bg-white border border-purple-200 rounded-2xl hover:shadow-lg ${contact.hoverColor} transition-all duration-300`}
              >
                {contact.icon}
                <div>
                  <div className="font-semibold text-purple-800">
                    {contact.title}
                  </div>
                  <div className="text-sm text-gray-600">{contact.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            © 2025 Abyan Faiz Muammar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
