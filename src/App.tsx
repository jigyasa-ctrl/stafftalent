import React, {useEffect, useState} from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Brain, Cpu, Database, LineChart, MoveDownIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { PytorchPlainWordmark,OracleOriginal,SalesforcePlain, GithubactionsOriginal,JenkinsOriginal, GitlabOriginal, GrafanaPlainWordmark, BitbucketOriginalWordmark, AmazonwebservicesPlainWordmark, NodejsPlainWordmark,  FlutterOriginal, MaterialuiPlain, LaravelOriginalWordmark,MysqlPlainWordmark,DjangoPlain, BootstrapPlainWordmark,AxiosPlainWordmark, PhpOriginal, ReactOriginal, Html5Original, AngularOriginal, FastapiPlain,  TensorflowLineWordmark, ApachesparkPlainWordmark, KerasPlainWordmark, MatlabPlain, NumpyPlainWordmark,MatplotlibPlainWordmark, PandasPlainWordmark } from 'devicons-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from '../assets/logo4.png'
import code from "../assets/code.mp4"
import servicenow from "../assets/servicenow.png"
import powerbi from "../assets/powerbi.png"
import googlecloud from "../assets/googlecloud.png"
import go from "../assets/go.png"

// import PytorchOriginal from 'devicons-react/lib/icons/PytorchOr

// Import the new pages
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services from './pages/Service';
import Hiring from './pages/Hiring';
import Positions from "./Positions"
import ServicesWrapper from "./components/ServicesWrapper"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const frontend = {
  title: "Frontend Developer",
  description: `We are seeking a talented Frontend Developer to join our innovative team. The ideal candidate will have:

### Qualifications:
- 3+ years of experience with modern JavaScript frameworks (particularly React)
- Strong proficiency in TypeScript, HTML5, CSS3/SCSS, ReactJS
- Experience with state management (Redux, Context API)

### Key Responsibilities:
- Develop and maintain responsive web applications using React
- Collaborate with UX/UI designers to implement pixel-perfect interfaces

Interested ? Send your resumes to us at hr@stafftalentssolutions.com` ,
}

const backend = {
  title: "Backend Developer",
  description: `We are looking for a skilled Backend Developer to join our dynamic team. The ideal candidate will have:

### Qualifications:
- 3+ years of experience with server-side languages (Node.js, Python, Java, etc.)
- Strong proficiency in database management (SQL, NoSQL)
- Experience with RESTful APIs and microservices architecture

### Key Responsibilities:
- Design and implement server-side logic and APIs
- Collaborate with frontend developers to integrate user-facing elements with server-side logic

Interested ? Send your resumes to us at hr@stafftalentssolutions.com` ,
}

const services =[{
  title: "IT Services",
  data: {
    "Software Development" :["Custom Software Solutions",
      "Web Application Development",
      "Mobile Application Development (iOS/Android)",
      "E-commerce Development"],
      "Cloud Solutions": ["Cloud Migration Services",
        "Cloud Infrastructure Setup",
        "Cloud Hosting Solutions",
        "SaaS (Software as a Service) Development"],
      "IT Consulting":[
        "IT Strategy Consulting",
        "Digital Transformation Strategy",
        "Technology Roadmap Design", 
        "Enterprise Architecture Consulting"
      ],
      "Cybersecurity Services":[

        "Penetration Testing",
        "Security Audits",
        "Data Encryption and Protection",
        "Security System Setup & Monitoring"
      ],
      "Network Solutions":[
        "Network Design & Optimization",
        "Network Security Setup",
        "VPN (Virtual Private Network) Implementation", 
        "Wi-Fi & LAN Infrastructure Setup"
      ],
      "Database Management": ["Database Design & Development",
        "Data Migration Services",
        "Database Optimization & Maintenance", 
        "Cloud Database Solutions"],
      "Business Intelligence & Analytics": [
        "Data Warehousing",
        "Predictive Analytics Solutions",
        "Business Intelligence Dashboards",
        "Reporting & Data Visualization"
      ],
      "Enterprise Software Solutions":[
        "ERP (Enterprise Resource Planning) Implementation",
        "CRM (Customer Relationship Management) Solutions",
        "Custom Enterprise Application Development",
        "Business Process Automation (BPA)"
      ],
      "UX/UI Design":[
        "Website UI/UX Design",
        "Mobile App UI/UX Design",
        "Prototyping & Wireframing", 
        "User Experience Research"
      ],
      // "IT Support & Managed Services":[]
      "IT Support & Managed Services":[
        "Help Desk Support",
        "IT Outsourcing & Managed IT Services", 
        "Remote IT Support",
        "IT Infrastructure Management"
      ],
      "AI & Machine Learning":[
        "AI Strategy & Consulting",
        "Machine Learning Models Development",
        "Chatbots and Virtual Assistants",
        "Natural Language Processing (NLP) Solutions"
      ],
      "Blockchain Services":[
        "Blockchain Consulting & Development",
        "Smart Contract Development", 
        "Cryptocurrency Development",
        "Blockchain-based Applications"
      ],
      "DevOps Services":[
        "Continuous Integration/Continuous Deployment (CI/CD)",
        "Cloud Automation & Management",
        "Infrastructure as Code (IaC)",
        "DevOps Pipeline Automation"
      ],
      "Digital Marketing":[
        "SEO (Search Engine Optimization)",
        "Social Media Marketing",
        "Paid Ad Campaigns (Google Ads, Facebook Ads)",
        "Content Marketing & Strategy"
      ],
      "Testing & QA":[
        "Manual Testing",
        "Automated Testing Solutions", 
        "Performance Testing",
        "Test Strategy and Planning"
      ],
      "Training & Support":[
        "Staff Training on IT Tools & Software",
        "Custom Training Programs",
        "Software Implementation Support", 
        "IT Knowledge Transfer"
      ]
    }
  }, {
    title: "Staffing & Training",
    data: {
      "Cloud Services": [
        "Cloud Computing Consulting",
        "Cloud Strategy & Roadmap Development", 
        "Cloud Migration Services",
        "Cloud Infrastructure Setup (AWS, Azure, Google Cloud)",
        "Hybrid & Multi-Cloud Solutions",
        "Cloud Hosting & Managed Services",
        "SaaS Development & Integration",
        "Cloud Security Solutions (Identity Management, Encryption, Compliance)",
        "Cloud Backup & Disaster Recovery"
      ],
      "Programming & Development": [
        "Web Application Development",
        "Front-End Development (React, Angular, Vue.js)",
        "Back-End Development (Node.js, Python, Ruby on Rails)", 
        "Full-Stack Development",
        "Mobile App Development",
        "iOS Development (Swift, Objective-C)",
        "Android Development (Java, Kotlin)",
        "Cross-Platform Development (React Native, Flutter)",
        "Custom Software Development",
        "E-commerce Development (Shopify, WooCommerce, Magento)",
        "API Development & Integration",
        "Microservices Architecture Development",
        "DevOps Services (CI/CD, Jenkins, Docker, Kubernetes)"
      ],
      "Network Security": [
        "Network Architecture & Design",
        "Firewall Management & Configuration",
        "Penetration Testing & Vulnerability Assessments",
        "Cybersecurity Audits & Compliance",
        "Intrusion Detection Systems (IDS) Setup",
        "Security Information and Event Management (SIEM)",
        "Secure VPN Setup",
        "Endpoint Security Solutions",
        "Zero Trust Security Architecture",
        "Data Encryption & Protection"
      ],
      "Database Services": [
        "Database Design & Architecture",
        "Relational Database Management (SQL, PostgreSQL, MySQL)",
        "NoSQL Database Solutions (MongoDB, Cassandra, Couchbase)",
        "Data Warehousing & Data Lakes",
        "Cloud Database Solutions (Amazon RDS, Azure SQL, Google Cloud SQL)",
        "Database Optimization & Tuning",
        "Database Security & Backup Solutions",
        "Database Migration Services",
        "Big Data Technologies (Hadoop, Spark)"
      ],
      "Data Engineering": [
        "ETL (Extract, Transform, Load) Solutions",
        "Data Pipeline Development",
        "Data Integration Services",
        "Real-Time Data Processing (Apache Kafka, Apache Flink)",
        "Data Warehousing Solutions",
        "Data Modeling & Architecture",
        "Big Data Solutions (Hadoop, Spark, Kafka)",
        "Data Lake Implementation",
        "Data Quality Management",
        "Cloud Data Engineering"
      ],
      "Artificial Intelligence (AI) & Machine Learning (ML)": [
        "AI Strategy & Consulting",
        "Machine Learning Model Development",
        "Natural Language Processing (NLP)",
        "Computer Vision Solutions", 
        "AI Chatbots and Virtual Assistants",
        "Predictive Analytics Solutions",
        "Recommendation Engines",
        "Deep Learning Solutions",
        "AI-Driven Automation",
        "AI Model Training & Fine-Tuning"
      ],
      "Admin Staffing & Training": [
        "Staffing Solutions for IT & Tech Roles",
        "IT Project Managers",
        "Network Engineers",
        "Software Developers",
        "Cloud Architects",
        "Cybersecurity Specialists",
        "Permanent & Contract Staffing",
        "Outsourcing Solutions for IT Support Teams",
        "Admin Support Staffing (Virtual Assistants, Executive Assistants)",
        "IT Support & Help Desk Staffing"
      ],
      "Training Services": [
        "Cloud Technology",
        "AWS, Azure, Google Cloud Certifications",
        "Cloud Architecture & Design",
        "Cloud Security & Compliance",
        "Programming & Development",
        "Java, Python, JavaScript, C++",
        "Full-Stack Development",
        "Mobile App Development (iOS & Android)",
        "Software Development Best Practices",
        "Network Security & Cybersecurity",
        "Ethical Hacking & Penetration Testing",
        "Network Security Fundamentals",
        "SOC (Security Operations Center) Operations",
        "CISSP, CISM, CompTIA Security+ Certifications",
        "Database & Data Engineering",
        "SQL, PostgreSQL, MySQL, MongoDB",
        "Data Warehousing & ETL Tools (Talend, Informatica)",
        "Big Data Technologies (Hadoop, Spark)",
        "Data Science & Machine Learning",
        "AI & ML",
        "Machine Learning Algorithms",
        "Deep Learning & Neural Networks",
        "AI in Business Applications",
        "TensorFlow, PyTorch, Keras",
        "Admin Support",
        "Office Management Tools (MS Office Suite, Google Workspace)",
        "Remote Collaboration Tools (Slack, Zoom, Asana)",
        "Executive Support Best Practices",
        "Time Management & Organization Skills",
        "Business Analyst",
        "Scrum Master",
        "QA Automations Testing"
      ]
    }},
    {
      title: "Placements",
      data: {
        "Resume Building & Optimization": [
          "Professional Resume Writing: Tailoring resumes to match job market standards, highlighting key skills and experience",
          "ATS (Applicant Tracking System) Optimization: Ensuring the resume is optimized to pass through ATS filters and get noticed by recruiters",
          "Cover Letter Writing: Building and optimizing LinkedIn profiles to increase visibility to recruiters and hiring managers",
          "LinkedIn Profile Optimization"
        ],
        "Job Portals Marketing": [
          "Job Portal Profile Creation & Optimization: Helping candidates create and optimize profiles on major job portals (Indeed, Monster, Glassdoor, LinkedIn, etc.)",
          "Job Alerts & Resume Submissions: Setting up job alerts based on skills and location, along with proactive resume submission to relevant job openings.", 
          "Job Application Tracking: Monitoring job applications, ensuring candidates are applying to relevant roles, and tracking progress"
        ],
        "Vendor Marketing": [
          "Vendor Partnership Management: Building relationships with staffing agencies and third-party vendors to maximize job placement opportunitie",
          "Vendor Presentation & Profile Marketing: Marketing candidate profiles to staffing vendors for contract, permanent, or temporary positions",
          "Vendor Networking: Leveraging industry connections with recruiting agencies to expose candidates to more job opportunities"
        ],
        "Direct Client Marketing": [
          "Client Profiling & Targeting: Identifying and marketing to specific clients directly, focusing on positions that match candidates' skills",
          "Direct Outreach to Employers: Proactively contacting hiring managers and decision-makers at companies to present candidates",
          "Negotiating Terms & Salary: Assisting with job offer negotiation, including compensation and benefits discussion."
        ],
        "Interview Preparation & Coaching": [
          "Mock Interviews: Conducting practice interviews to help candidates prepare for real job interviews with specific companies",
          "Behavioral Interview Coaching: Preparing candidates to answer behavioral questions using techniques like STAR (Situation, Task, Action, Result)",
          "Technical Interview Preparation: Offering tailored technical interview preparation for IT and technical roles, including coding challenges and problem-solving",
          "Soft Skills Training: Improving communication, presentation, and negotiation skills to ensure candidates make a positive impression in interviews"
        ],
        "End-to-End Candidate Preparation": [
          "Job Market Insights & Trends: Keeping candidates informed on the latest industry trends, skills in demand, and job market changes",
          "Skill Gap Analysis: Evaluating candidates' skills and offering personalized learning plans to bridge any gaps before applying for positions",
          "Portfolio & Project Showcasing: Helping candidates build and showcase portfolios with real-world projects or previous work to attract more attention from potential employers",
          "Onboarding Support: Providing guidance through the onboarding process for new roles, including document submission, background checks, and contract reviews"
        ],
        "Post-Placement Support": [
          "Ongoing Career Coaching: Offering continuous career advice, mentoring, and guidance to help candidates grow in their new role",
          "Project Transition Support: Assisting candidates with smooth transitions to new projects, understanding job expectations, and ensuring a successful start",
          "Feedback & Continuous Improvement: Collecting feedback after placement to evaluate the effectiveness of job search strategies and identifying areas for improvement in future placements"
        ]
      }
    }
  ]

  // Add scroll handler


function AnimatedNumber({ value, suffix = '' }: { value: string, suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => {
    const number = parseFloat(value);
    return `${Math.round(latest)}${suffix}`;
  });

  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  React.useEffect(() => {
    if (inView) {
      const number = parseFloat(value);
      const animation = animate(count, number, {
        duration: 2,
        ease: "easeOut"
      });

      return animation.stop;
    }
  }, [count, inView, value]);

  return (
    <motion.h3 ref={ref} className="font-bold gradient-text mb-2 text-large">
      <motion.span>{rounded}</motion.span>
    </motion.h3>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: any }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.5 }}
      className="card-hover bg-gray-900 p-6 rounded-xl border border-gray-800 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F40218] to-[#1603EC] transition-transform duration-500 ease-in-out origin-bottom-left -rotate-45 scale-0 group-hover:scale-150" />
      <div className="relative z-10">
        <Icon className="w-12 h-12 text-blue-400 mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

function App() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const texts = [
    "Empowering Businesses with Cutting-Edge AI Solutions, Data Analytics, and Future-Ready Innovation.",
    "100% success in placements ",
    "Tailored Solutions for Hiring Success.",
    "Innovating Pathways for Career Development.",
    "AI Solutions Tailored for Your Business.",
    "Driving Efficiency through Technology.",
    "Transforming Ideas into Reality.",
    "Empowering Companies to Find the Right Talent.",
  ];
  
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (textIndex < texts.length) {
      const currentText = texts[textIndex];
      if (charIndex < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 50); // Adjust typing speed here
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length); // Loop back to the start
          setCharIndex(0);
          setDisplayedText(""); // Clear text for next one
        }, 500); // Pause before showing the next text
        return () => clearTimeout(timer);
      }
    }
  }, [textIndex, charIndex, texts]);

  const scrollToServices = () => {
    // Open the specified URL in a new tab
    window.open('https://calendly.com/stafftalents-work/30min', '_blank');
  };
  
  const dataScience = [
    <PytorchPlainWordmark color='white' size="100" />,
    <ApachesparkPlainWordmark color="white" size="100" />,
    <KerasPlainWordmark color='white' size="100" />,
    <MatlabPlain color="white" size="50" />,
    <NumpyPlainWordmark color="white" size="100" />,
    <MatplotlibPlainWordmark color="white" size="100" />,
    <PandasPlainWordmark color="white" size="100" />,
    <TensorflowLineWordmark color="white" size="100" />,
    <FastapiPlain color="white" size="100" />,

  ]
  const fullStack = [
    <AngularOriginal color='white' size="50" />,
    <ReactOriginal color='white' size="50" />,
    <PhpOriginal color='white' size="100" />,
    <MysqlPlainWordmark color='white' size="100" />,
    <Html5Original color='white' size="100" />,
    <BootstrapPlainWordmark  color='white' size="100" />,
    <AxiosPlainWordmark color='white' size="100" />,
    <DjangoPlain color='white' size="50" />,
    <MaterialuiPlain color='white' size="50" />,
    <LaravelOriginalWordmark color='white' size="100" />,
    <FlutterOriginal color='white' size="50" />,
    <NodejsPlainWordmark  color='white' size="100" />,
    <OracleOriginal  color='white' size="100" />,
    <img src={servicenow} height={50} width={50} />,
    <img src={powerbi} height={50} width={50} />,
    <img src={googlecloud} height={50} width={50} />,
    <img src={go} height={100} width={100} />,
    <SalesforcePlain size='100' />
  ]
  const devOps = [
    <GitlabOriginal  color='white' size="50" />,
    <AmazonwebservicesPlainWordmark  color='white' size="80" />,
    <BitbucketOriginalWordmark color='white' size="80" />,
    <GrafanaPlainWordmark color='white' size="80" />,
    <GithubactionsOriginal color='white' size="80" />,
    <JenkinsOriginal  size="100" />

  ]

  const [selectedTab, setSelectedTab] = React.useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(prevState => !prevState);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center pt-5">
                <Link to="/">
                  <img src={logo} alt="Company Logo" className="h-20 w-100 logo" />
                </Link>
              </div>
              
              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8 ">
                <Link to="/" className="text-gray-300 text-xl hover:text-white transition-colors">Home</Link>
                <Link to="/about" className="text-gray-300 text-xl hover:text-white transition-colors">About</Link>
                <div className="relative group">
                    <Link 
                        to="/services" 
                        className="text-gray-300 text-xl hover:text-white transition-colors"
                        onClick={() => setIsDropdownOpen(prev => !prev)}
                    >
                        Services
                    </Link>
                    {isDropdownOpen && (
                        <div className="absolute left-0 bg-gray-800 text-white rounded-md mt-2 w-48" style={{zIndex: 9999999}}>
                            <div className="relative" style={{zIndex: 10000000}}>
                                <Link to="/it-services" onClick={() => setIsDropdownOpen(prev => !prev)} className="block px-4 py-2 hover:bg-gray-700">IT Services</Link>
                                <Link to="/staff" onClick={() => setIsDropdownOpen(prev => !prev)} className="block px-4 py-2 hover:bg-gray-700">Staffing & Trainings </Link>
                                
                            </div>
                        </div>
                    )}
                </div>
                <Link to="/placement" className="text-gray-300 text-xl hover:text-white transition-colors">Placements</Link>
                <Link to="/contact" className="text-gray-300 text-xl hover:text-white transition-colors">Contact</Link>
                <Link to="/hiring" className="text-gray-300 text-xl hover:text-white transition-colors">Hiring</Link>
              </nav>
              {/* Hamburger Icon for Mobile */}
              <div className="md:hidden flex items-center">
                <button onClick={toggleNav} className="text-gray-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        {isNavOpen && (
          <div 
            className="md:hidden flex flex-col items-center space-y-2 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100 mx-lg bg-gray-900 py-5"
            // initial={{ opacity: 0, y: -20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-gray-300 text-xl hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-gray-300 text-xl hover:text-white transition-colors">About</Link>
            <Link to="/services" className="text-gray-300 text-xl hover:text-white transition-colors">Services</Link>
            <Link to="/placement" className="text-gray-300 text-xl hover:text-white transition-colors">Placement</Link>
            <Link to="/contact" className="text-gray-300 text-xl hover:text-white transition-colors">Contact</Link>
            <Link to="/hiring" className="text-gray-300 text-xl hover:text-white transition-colors">Hiring</Link>
          </div>
        )}

        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <motion.section
                ref={heroRef}
                // initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                // variants={fadeIn}
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
                      className="text-5xl md:text-7xl font-bold mb-6 text-glow"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 1.2,
                        type: "spring",
                        stiffness: 100 
                      }}
                    >
                       {displayedText}
                      {/* Empowering Businesses  
                      <br />with Cutting-Edge Tech Solutions */}
                    </motion.h1>
                    <motion.p 
                      className="p-color text-xl mb-8 max-w-2xl mx-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      Helping businesses innovate, optimize their operations,
                      enhance customer experience, and drive growth
                    </motion.p>
                    <motion.button
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      onClick={scrollToServices}
                    >
                      Get Free Consultation <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.section>

              {/* Features Section */}
              <section className="py-20 px-4" id="services">
                <div className="container mx-auto">
                  <h2 className="text-4xl font-bold text-center gradient-text">Our Services</h2>
                  <p className='text-center font-bold text-gray-600 mb-16 mt-5'>Innovative technology solutions, staffing and training solutions to complement in-house skills and capabilities, and IT services designed with real-world insight.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard
                      icon={Brain}
                      title="IT Services"
                      description="Clients need tailored proprietary applications to optimize operations efficiently. At Staff Talents, our expert teams leverage our cutting-edge 4D Software Development Methodology to design, develop, and maintain seamless solutions."
                    />
                    <FeatureCard
                      icon={Cpu}
                      title="Career Consulting"
                      description="Our career consulting services help professionals navigate their tech careers with expert guidance on skill development, job search strategies, interview preparation, and career advancement opportunities in the ever-evolving technology landscape."
                    />
                    <FeatureCard
                      icon={Database}
                      title="Engineering Services"
                      description="We deliver engineering and technical solutions tailored to your unique requirements. We take the time to understand your needs and craft strategic solutions that align with your goals and plans."
                    />
                    <FeatureCard
                      icon={LineChart}
                      title="Training Solutions"
                      description="In today's fast-paced business environment, market conditions can shift rapidly. We ensure your team stays ahead by precisely assessing your needs and enhancing their technical skills, empowering them to adapt and excel."
                    />
                  </div>
                </div>
              </section>

              {/* Stats Section */}
              <section className="py-20 bg-gray-900 ">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <AnimatedNumber value="98" suffix="%" />
                      <p className="text-gray-400">Client Satisfaction</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <AnimatedNumber value="500" suffix="+" />
                      <p className="text-gray-400">Projects Completed</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <AnimatedNumber value="50" suffix="+" />
                      <p className="text-gray-400">AI Models Deployed</p>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Tech Stack Section */}
              <section className="py-20 px-4">
                <div className="container mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-5xl font-bold gradient-text mb-6">Tech Stack</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Leveraging cutting-edge technologies to deliver powerful and scalable solutions
                    </p>
                  </motion.div>

                  {/* New Tabs Implementation */}
                  <div className="mb-8">
                    <div className="flex justify-center space-x-4 mb-8">
                      {['Full Stack', 'Data Science', 'DevOps'].map((tab, index) => (
                        <motion.button
                          key={tab}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 rounded-full text-lg font-semibold transition-all
                            ${selectedTab === index 
                              ? 'bg-gradient-to-r from-[#6D08A1] to-[#3D0459] text-white' 
                              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                          onClick={() => setSelectedTab(index)}
                        >
                          {tab}
                        </motion.button>
                      ))}
                    </div>

                    <motion.div
                      className="relative w-full h-[400px] rounded-xl overflow-hidden"
                      initial={false}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {selectedTab === 0 && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="grid grid-cols-6 gap-4 p-8 bg-gray-900/80 h-full"
                        >
                          {fullStack.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              className="aspect-square rounded-lg overflow-hidden flex items-center justify-center"
                            >
                              {item}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                      {selectedTab === 1 && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="grid grid-cols-6 gap-4 p-8 bg-gray-900/80 h-full"
                        >
                          {dataScience.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              className="aspect-square rounded-lg overflow-hidden flex items-center justify-center"
                            >
                              {item}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                      {selectedTab === 2 && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="grid grid-cols-6 gap-4 p-8 bg-gray-900/80 h-full"
                        >
                          {devOps.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              className="aspect-square rounded-lg overflow-hidden flex items-center justify-center"
                            >
                              {item}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </section>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/frontend" element={<Positions title={frontend.title} descriptions={frontend?.description} />} />
          <Route path="/backend" element={<Positions title={backend.title} descriptions={backend?.description} />} />
          <Route path="/it-services" element={<ServicesWrapper title={services[0].title} data={services[0].data} />} />
          <Route path="/staff" element={<ServicesWrapper title={services[1].title} data={services[1].data} />} />
          <Route path="/placement" element={<ServicesWrapper title={services[2].title} data={services[2].data} />} />
        
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;