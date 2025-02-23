import logo from "../../assets/logo4.png"

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
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
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
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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
          <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors mt-4 md:mt-0">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
} 