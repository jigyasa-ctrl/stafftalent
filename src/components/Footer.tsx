import logo from "../../assets/logo4.png"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img src={logo} alt="staff talents Logo" className="h-12 mb-6" />
            <p className="text-gray-400 mb-6">
              Empowering Businesses with Cutting-Edge AI Solutions, Data Analytics, and Future-Ready Innovation.
            </p>
          </div>

          {/* Office */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6">Office</h3>
            <div className="text-gray-400">
              <p className="mb-2">STAFF TALENTS</p>
              <p className="mb-4">4914 Francistown rd
              Glen Allen, Va, 23060<br />Richmond, VA</p>
              <a href="mailto:hr@stafftalentssolutions.com" className="hover:text-white transition-colors">hr@stafftalentssolutions.com</a>
              <p className="mt-2">
                <a href="tel:+1 (318) 500-3479" className="hover:text-white transition-colors">+1 (318) 500-3479</a>
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/hiring" className="text-gray-400 hover:text-white transition-colors">Hiring</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0zm-3.15 12.025h-3.15v9.075h-4.5v-9.075h-2.25v-3.6h2.25v-2.65c0-2.1 1.25-3.25 3.1-3.25.875 0 1.625.065 1.85.095v2.15h-1.275c-1.05 0-1.25.5-1.25 1.25v1.65h3.15l-.45 3.6z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 STAFFTALENTSLLC. All rights reserved</p>
          <Link to="/contact"><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors mt-4 md:mt-0">
            Privacy Policy
          </a></Link>
        </div>
      </div>
    </footer>
  );
} 