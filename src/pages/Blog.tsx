import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import code from "../../assets/code4.mp4"
import webdev from "../../assets/webdev.jpg"
import future from "../../assets/future.jpg"

const Blog = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <motion.section
        ref={heroRef}
        animate={heroInView ? "visible" : "hidden"}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src={code}
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full z-10"></div>
        <div className="container mx-auto px-4 text-center content-wrapper relative z-20 ">
          <motion.div
            className="banner"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2,
                type: "spring",
                stiffness: 100 
              }}
            >
               Blogs
            </motion.h1>
            <motion.p 
              className="p-color text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Stay updated with the latest insights, tech trends, and industry news from our expert team at Staff Talents.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Content Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Sample Blog Posts - Replace with actual data/mapping */}
          <motion.div 
            className="blog-card bg-zinc-900 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = 'https://www.geeksforgeeks.org/future-of-web-development/'}
          >
            <img 
              src={webdev}
              alt="Blog Title" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-3">
                Understanding Modern Web Development
              </h2>
              <p className="text-gray-300 mb-4">
                Explore the latest trends and best practices in modern web development. 
                From React to Next.js, discover how to build better web applications.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span>Read More →</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="blog-card bg-zinc-900 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = 'https://www.forbes.com/sites/bernardmarr/2024/08/16/where-will-artificial-intelligence-take-us-in-the-future/2'}
          >
            <img 
              src={future} 
              alt="Blog Title" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-3">
                The Future of AI in Tech Recruitment
              </h2>
              <p className="text-gray-300 mb-4">
                Discover how artificial intelligence is transforming the recruitment 
                landscape and what it means for tech professionals.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span>Read More →</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 