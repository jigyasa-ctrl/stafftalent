import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import code from "../../assets/code4.mp4";

const ServicesWrapper = ({title, data} : {title: string , data: any}) => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
        <div className="container mx-auto px-4 text-center content-wrapper relative z-20">
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
             {title}
            </motion.h1>
            <motion.p 
              className="p-color text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover our services and how we can help you achieve your goals.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* New Content Section */}
      <section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(data).map(([category, items], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{category}</h3>
                <ul className="space-y-3">
                  {items.map((item: string, itemIndex: number) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                      className="text-gray-300 text-left flex items-start"
                    >
                      <span className="text-blue-400 mr-2">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesWrapper;
