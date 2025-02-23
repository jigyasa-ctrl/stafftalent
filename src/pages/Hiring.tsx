import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import code from "../../assets/code4.mp4"; // Ensure this import is present

const Hiring = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const jobOpenings = [
    {
      title: "Frontend Developer",
      description: "Looking for a skilled frontend developer to join our team.",
      applyLink: "/apply/frontend-developer"
    },
    {
      title: "Backend Developer",
      description: "Seeking a backend developer with experience in Node.js.",
      applyLink: "/apply/backend-developer"
    },
    // Add more job openings as needed
  ];

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
            We're Hiring!
            </motion.h1>
            <motion.p 
              className="p-color text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Join our dynamic team of innovators and tech enthusiasts! We're looking for passionate individuals who want to make an impact through cutting-edge technology solutions. Whether you're a developer, designer, or tech visionary, there's a place for you here.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
      {/* <div className="bg-black pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold gradient-text mb-8">We're Hiring</h1>
          <p className="text-gray-300">Join our team and help us empower businesses with cutting-edge solutions!</p>
          <p className="text-gray-300 mt-4">Check out our current job openings and apply today!</p>
        </div>
      </div> */}

      {/* Job Openings Section */}
      <div className="container mx-auto px-4 pt-20">
        <h2 className="text-4xl font-bold gradient-text mb-8">Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg cursor-pointer" onClick={() => window.location.href = job.applyLink}>
              <h3 className="text-xl font-semibold text-white">{job.title}</h3>
              <p className="text-gray-300">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hiring; 