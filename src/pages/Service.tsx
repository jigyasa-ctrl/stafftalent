import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Database, Cpu, LineChart, Code, Shield } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import healthcare from "../../assets/healthcare.jpg"
import finance from "../../assets/finance.jpg"
import manufacturing from "../../assets/manufacturing.jpg"
import education from "../../assets/education.jpg"
import realestate from "../../assets/realestate.jpg"
import energy from "../../assets/energy.jpg"
import agriculture from "../../assets/agriculture.jpg"
import telecommunication from "../../assets/telecommunication.jpg"
import testimonial1 from "../../assets/testimonial1.jpg"
import testimonial2 from "../../assets/testimonial2.jpg"
import testimonial3 from "../../assets/testimonial3.jpg"
import testimonial4 from "../../assets/testimonial4.jpg"
import code from "../../assets/code4.mp4"


const industries = [
  {
    title: "Healthcare",
    image: healthcare,
    description: "Advanced solutions for medical institutions and healthcare providers. Specialized in electronic health records, telemedicine platforms, medical imaging analysis, and patient care management systems."
  },
  {
    title: "Finance",
    image: finance,
    description: "Innovative fintech solutions and banking systems. Expertise in payment processing, blockchain technology, risk management platforms, and automated trading systems with robust security measures."
  },
  {
    title: "Manufacturing",
    image: manufacturing,
    description: "Smart factory solutions and industrial automation. Implementing IoT sensors, predictive maintenance systems, supply chain optimization, and real-time production monitoring platforms."
  },
  {
    title: "Education",
    image: education,
    description: "EdTech solutions and learning management systems. Developing interactive e-learning platforms, student performance analytics, virtual classroom environments, and adaptive learning technologies."
  },
  {
    title: "Real Estate",
    image: realestate,
    description: "Property management and real estate platforms. Offering virtual tour solutions, automated property valuation systems, tenant management software, and smart building integration systems."
  },
  {
    title: "Energy",
    image: energy,
    description: "Smart grid solutions and energy management systems. Specializing in renewable energy monitoring, consumption optimization, predictive grid maintenance, and sustainable energy distribution platforms."
  },
  {
    title: "Agriculture",
    image: agriculture,
    description: "Precision farming and agricultural technology. Implementing drone-based crop monitoring, soil analysis systems, automated irrigation solutions, and harvest optimization platforms. Leverage AI tools to maximize production."
  },
  {
    title: "Telecommunications",
    image: telecommunication,
    description: "Network solutions and communication systems. Providing 5G infrastructure management, network optimization tools, unified communications platforms, and advanced data routing solutions."
  }
];

const testimonials = [
  {
    quote: "Their AI solutions transformed our healthcare operations, improving patient care and efficiency dramatically.",
    author: "Dr. Sarah Chen",
    position: "Medical Director, HealthTech Solutions",
    image: testimonial1
  },
  {
    quote: "The custom software development team delivered beyond our expectations. Their attention to detail and innovative approach set them apart.",
    author: "Michael Rodriguez",
    position: "CTO, FinanceHub",
    image: testimonial2
  },
  {
    quote: "Outstanding cybersecurity services that helped us establish a robust security framework. Highly recommended!",
    author: "Emma Thompson",
    position: "Security Director, SecureNet",
    image: testimonial3
  },
  {
    quote: "Their cloud solutions enabled us to scale our operations seamlessly. The expertise and support were exceptional.",
    author: "James Wilson",
    position: "VP Engineering, CloudScale Inc",
    image: testimonial4
  }
];

const Services = () => {
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
               Services
            </motion.h1>
            <motion.p 
              className="p-color text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We offer a comprehensive range of IT services and solutions, leveraging cutting-edge technologies and industry best practices to deliver exceptional results for our clients.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="card-hover bg-gray-900 p-6 rounded-xl border border-gray-800 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F40218] to-[#1603EC] transition-transform duration-500 ease-in-out origin-bottom-left -rotate-45 scale-0 group-hover:scale-150" />
            <div className="relative z-10">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Development</h3>
              <p className="text-gray-400">Custom AI solutions including machine learning models, natural language processing, and computer vision applications.</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-hover bg-gray-900 p-6 rounded-xl border border-gray-800 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F40218] to-[#1603EC] transition-transform duration-500 ease-in-out origin-bottom-left -rotate-45 scale-0 group-hover:scale-150" />
            <div className="relative z-10">
              <Database className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
              <p className="text-gray-400">Scalable cloud infrastructure, migration services, and cloud-native application development.</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-hover bg-gray-900 p-6 rounded-xl border border-gray-800 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F40218] to-[#1603EC] transition-transform duration-500 ease-in-out origin-bottom-left -rotate-45 scale-0 group-hover:scale-150" />
            <div className="relative z-10">
              <Cpu className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">DevOps Services</h3>
              <p className="text-gray-400">Streamline your development pipeline with our comprehensive DevOps solutions and automation tools.</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="card-hover bg-gray-900 p-6 rounded-xl border border-gray-800 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F40218] to-[#1603EC] transition-transform duration-500 ease-in-out origin-bottom-left -rotate-45 scale-0 group-hover:scale-150" />
            <div className="relative z-10">
              <LineChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
              <p className="text-gray-400">Transform your data into actionable insights with our advanced analytics and visualization solutions.</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="card-hover bg-gray-900 p-6 rounded-xl border border-gray-800 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F40218] to-[#1603EC] transition-transform duration-500 ease-in-out origin-bottom-left -rotate-45 scale-0 group-hover:scale-150" />
            <div className="relative z-10">
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Development</h3>
              <p className="text-gray-400">Bespoke software solutions tailored to your specific business needs and requirements.</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="card-hover bg-gray-900 p-6 rounded-xl border border-gray-800 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F40218] to-[#1603EC] transition-transform duration-500 ease-in-out origin-bottom-left -rotate-45 scale-0 group-hover:scale-150" />
            <div className="relative z-10">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
              <p className="text-gray-400">Protect your digital assets with our comprehensive security solutions and consulting services.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Delivering innovative solutions across diverse sectors
            </p>
          </motion.div>

          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]}
            className="industry-slider"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4"
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{industry.title}</h3>
                    <p className="text-gray-400">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6"> Why Our Clients Love Working With Us ?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
            Client Testimonials
            </p>
          </motion.div>

          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={5000}
            className="testimonial-slider"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4"
              >
                <div className="bg-gray-900 rounded-xl p-8 mx-auto max-w-3xl">
                  <div className="flex items-center gap-8">
                    <div className="w-48 h-48 flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl text-gray-300 mb-6 font-light italic">
                        "{testimonial.quote}"
                      </div>
                      <div className="text-lg font-semibold gradient-text">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-400">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Services; 