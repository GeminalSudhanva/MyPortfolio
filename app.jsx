import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Welcome from './Welcome.jsx';
import ImageModal from './ImageModal.jsx';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Check if we're on the main portfolio page
  const path = window.location.pathname;
  const isPortfolioPage = path === '/portfolio/' || path === '/portfolio' || path.includes('/portfolio/');

  // Show welcome page only on root path
  if (path === '/' || path === '') {
    return <Welcome />;
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold gradient-text">Portfolio</span>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none" id="mobile-menu-button">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/portfolio/#home" className="nav-link text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/portfolio/#about" className="nav-link text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/portfolio/#education" className="nav-link text-gray-600 hover:text-gray-900">Education</Link>
              <Link to="/portfolio/#skills" className="nav-link text-gray-600 hover:text-gray-900">Skills</Link>
              <Link to="/portfolio/#projects" className="nav-link text-gray-600 hover:text-gray-900">Projects</Link>
              <Link to="/portfolio/#certificates" className="nav-link text-gray-600 hover:text-gray-900">Certificates</Link>
            </div>
          </div>
          {/* Mobile menu */}
          <div className="hidden md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/portfolio/#home" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/portfolio/#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/portfolio/#education" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Education</Link>
              <Link to="/portfolio/#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Skills</Link>
              <Link to="/portfolio/#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</Link>
              <Link to="/portfolio/#certificates" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Certificates</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Hi, I'm <span className="gradient-text">Sudhanva</span></h1>
              <p className="text-xl text-gray-600 mb-6">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-transform">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-transform">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-transform">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img src="WhatsApp Image 2025-04-30 at 9.07.52 PM.jpeg" alt="Profile Picture" className="rounded-full w-64 h-64 mx-auto md:mx-0 object-cover shadow-xl transform hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
            I am a passionate developer with expertise in building modern web applications. 
            I love solving complex problems and creating elegant solutions.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
          <div className="space-y-8">
            {/* Degree */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Bachelor's Degree</h3>
                  <p className="text-gray-600">AGMRCET</p>
                  <p className="text-gray-500">Course: Electronics and Communication Engineering</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">2023 - 2027</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">CGPA: 8.5/10</p>
              </div>
            </div>

            {/* PUC */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Pre-University Course (PUC)</h3>
                  <p className="text-gray-600">Vidhyaranya Pre University College</p>
                  <p className="text-gray-500">Stream: Science (PCMB)</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">2021 - 2023</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">Percentage: 80%</p>
              </div>
            </div>

            {/* Schooling */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">High School</h3>
                  <p className="text-gray-600">Vidhyaranya High School</p>
                  <p className="text-gray-500">Board: State Board</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">2011 - 2021</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">Percentage: 80%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Soft Skills */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Soft Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">Leadership</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">Communication</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">Teamwork</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">Problem Solving</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">Adaptability</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">Time Management</span>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Technical Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">System Design</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">Data Structures</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">Algorithms</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">Database Design</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">API Development</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">Cloud Computing</span>
              </div>
            </div>

            {/* Professional Skills */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Professional Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">Project Management</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">Agile Methodology</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">Version Control</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">Code Review</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">Documentation</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="project-card bg-white rounded-lg shadow-lg overflow-hidden p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="border-l-4 border-blue-500 pl-4 relative">
                <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Web Development</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 gradient-text">Website For Varadayaka Commerce Classes</h3>
                <p className="text-gray-600 mb-4">A professional website for commerce coaching classes with course details, faculty information, and student testimonials.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="skill-tag px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors">HTML5</span>
                  <span className="skill-tag px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors">CSS3</span>
                  <span className="skill-tag px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors">JavaScript</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://geminalsudhanva.github.io/VaradayakCommerceClasses/" target="_blank" 
                     className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    <i className="fab fa-github mr-2 group-hover:rotate-12 transition-transform"></i> View Project
                  </a>
                  <a href="https://geminalsudhanva.github.io/VaradayakCommerceClasses/" target="_blank" 
                     className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                    <i className="fas fa-external-link-alt mr-2 group-hover:rotate-12 transition-transform"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card bg-white rounded-lg shadow-lg overflow-hidden p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="border-l-4 border-green-500 pl-4 relative">
                <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">PDF Tool</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 gradient-text">A Selectable Text PDF's Reader</h3>
                <p className="text-gray-600 mb-4">An innovative PDF reader that allows text selection and copying from PDF documents with enhanced user experience.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="skill-tag px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200 transition-colors">React</span>
                  <span className="skill-tag px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200 transition-colors">PDF.js</span>
                  <span className="skill-tag px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200 transition-colors">JavaScript</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://geminalsudhanva.github.io/pdfreader/" target="_blank" 
                     className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    <i className="fab fa-github mr-2 group-hover:rotate-12 transition-transform"></i> View Project
                  </a>
                  <a href="https://geminalsudhanva.github.io/pdfreader/" target="_blank" 
                     className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                    <i className="fas fa-external-link-alt mr-2 group-hover:rotate-12 transition-transform"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card bg-white rounded-lg shadow-lg overflow-hidden p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="border-l-4 border-purple-500 pl-4 relative">
                <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AI Tool</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 gradient-text">Grammar and Sentence Corrector AI</h3>
                <p className="text-gray-600 mb-4">An AI-powered tool that helps users improve their writing by detecting and correcting grammatical errors and sentence structure.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="skill-tag px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200 transition-colors">Python</span>
                  <span className="skill-tag px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200 transition-colors">NLP</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200 transition-colors">Streamlit</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://grammer-sentence-corrector-ai-wytkqwc47cteqq5zt9kgqy.streamlit.app/" target="_blank" 
                     className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    <i className="fab fa-github mr-2 group-hover:rotate-12 transition-transform"></i> View Project
                  </a>
                  <a href="https://grammer-sentence-corrector-ai-wytkqwc47cteqq5zt9kgqy.streamlit.app/" target="_blank" 
                     className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                    <i className="fas fa-external-link-alt mr-2 group-hover:rotate-12 transition-transform"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-12 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Certificates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
                 onClick={() => setSelectedImage({
                   url: "WhatsApp Image 2025-04-30 at 9.28.06 PM.jpeg",
                   title: "Data Science And AIML - Internship"
                 })}>
              <img src="WhatsApp Image 2025-04-30 at 9.28.06 PM.jpeg" alt="Certificate 1" className="w-full h-64 object-contain" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 gradient-text">Data Science And AIML - Internship</h3>
                <p className="text-gray-600">YBI Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Sudhanva. All rights reserved.</p>
        </div>
      </footer>

      {/* Image Modal */}
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url}
        title={selectedImage?.title}
      />
    </div>
  );
};

export default App; 