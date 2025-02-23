import { motion } from 'framer-motion';
import code from "../assets/code4.mp4"
import { useInView } from 'react-intersection-observer';
import ReactMarkdown from 'react-markdown';

const Positions = ({title, descriptions}: {title: string, descriptions: string}) => {

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
            <source src={code} type="video/mp4" />
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
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Job Description Section */}
        <motion.section
          className="py-10 bg-gray-800 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Job Description</h2>
            <div className="text-lg">
              <ReactMarkdown>{descriptions}</ReactMarkdown>
            </div>
          </div>
        </motion.section>
        
      </div>
    );
};

export default Positions; 