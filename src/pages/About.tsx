import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Target, Heart, Users } from 'lucide-react';
import code from "../../assets/code4.mp4"

const About = () => {
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
              About Us
            </motion.h1>
            <motion.p 
              className="p-color text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Staff Talents is a fast-growing global community of highly skilled information technology professionals who provide vital and varied IT consulting, development, system enhancement and support services. We integrate our clients' key considerations and objectives, using a proprietary approach we call S3RSM.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* About Content Section */}
      <div className="container mx-auto px-4 py-20">
        {/* Main Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-8"
        >
          {/* <div>
            <h2 className="text-3xl font-bold mb-6 gradient-text">About Staff Talents </h2>
            <p className="text-gray-300 leading-relaxed mb-12">
              Staff Talents  is a fast-growing global community of highly skilled information technology professionals who provide vital and varied IT consulting, development, system enhancement and support services. We integrate our clients' key considerations and objectives, using a proprietary approach we call S3RSM.
            </p>
          </div> */}

          {/* Mission, Vision, Values Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover bg-gray-900/50 p-6 rounded-xl border border-gray-800 relative overflow-hidden group">
              <div className=" scale-0 group-hover:scale-150" />
              <div className="relative z-10">
                <Target className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Mission</h3>
                <p className="text-gray-400">
                  Our mission is to add value to client operations with innovative, simplified IT products and services that improve employee productivity.
                </p>
              </div>
            </div>

            <div className="card-hover bg-gray-900/50 p-6 rounded-xl border border-gray-800 relative overflow-hidden group">
              <div className="scale-0 group-hover:scale-150" />
              <div className="relative z-10">
                <Building2 className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Vision</h3>
                <p className="text-gray-400">
                  Our vision is to empower clients with intellectual property through a transferable process that is digitized and mobilized.
                </p>
              </div>
            </div>

            <div className="card-hover bg-gray-900/50 p-6 rounded-xl border border-gray-800 relative overflow-hidden group">
              <div className="scale-0 group-hover:scale-150" />
              <div className="relative z-10">
                <Heart className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Values</h3>
                <p className="text-gray-400">
                  Our core values include exceeding client expectations with sustained quality, integrity and reliability, leading to relationships built on trust that has been earned.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Staff Talents Section */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
            <Users className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-white">Why Staff Talents</h3>
            <p className="text-gray-300 leading-relaxed">
              Global capabilities and efficiencies deliver bottom-line IT benefits to Fortune 2000 and smaller organizations. Proprietary S3RSM process simplifies your operations to reduce risk, time, and cost. Our global presence and associations with trusted high-performing allies assure clients of efficient, effective and timely accomplishment of specified objectives.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
            Our Intellectual Property is the key to our clients' satisfaction. We have world-class business process experts and seasoned technology consultants dedicated to maximizing your ROI. As an IT company, we know "it's about the people" working with the technology, as much as it is the technology itself. So people-skills share our priority with motivation, expertise and client orientation.
          </p>
          <p className="text-gray-300 leading-relaxed">
            For clients in a wide variety of industries, we have been employing, contracting, recruiting and training techStaff Talentsally competent people since 2004. We prepare our people, and will prepare yours, to work efficiently and effectively at optimal quality levels.
          </p>
          </div>
        </motion.div> */}

        {/* Additional Information Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-20 bg-gray-900/50 p-8 rounded-xl border border-gray-800"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Why Staff Talents</h3>
          <p className="text-gray-300 leading-relaxed">
              Global capabilities and efficiencies deliver bottom-line IT benefits to Fortune 2000 and smaller organizations. Proprietary S3RSM process simplifies your operations to reduce risk, time, and cost. Our global presence and associations with trusted high-performing allies assure clients of efficient, effective and timely accomplishment of specified objectives.
            </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Our Intellectual Property is the key to our clients' satisfaction. We have world-class business process experts and seasoned technology consultants dedicated to maximizing your ROI. As an IT company, we know "it's about the people" working with the technology, as much as it is the technology itself. So people-skills share our priority with motivation, expertise and client orientation.
          </p>
          <p className="text-gray-300 leading-relaxed">
            For clients in a wide variety of industries, we have been employing, contracting, recruiting and training techStaff Talentsally competent people since 2004. We prepare our people, and will prepare yours, to work efficiently and effectively at optimal quality levels.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 