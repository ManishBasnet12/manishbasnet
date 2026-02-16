import Image from "next/image";
import "./Service.css";

const Service = () => {
  const servicesList = [
  {
    heading: "UI/UX & Web Design",
    description:
      "I design clean, conversion-focused digital experiences that combine aesthetics with strategy. Every interface is crafted to guide users naturally, strengthen brand identity, and increase engagement.",
    icon: "/serviceicon1.gif",
    services: [
      "User-Centered Interface Design",
      "Wireframing & Interactive Prototyping",
      "Design Systems & Component Libraries",
      "Responsive & Mobile-First Design",
      "Figma-to-Code Precision",
    ],
  },
  {
    heading: "Web Development",
    description:
      "I build modern, scalable web applications that transform ideas into real, revenue-generating products. My development approach focuses on clean architecture, performance, and security — ensuring your platform is reliable and ready to grow.",
    icon: "/serviceicon2.gif",
    services: [
      "Custom Web Applications",
      "SaaS Product Development",
      "Modern Frontend (React / Next.js)",
      "Backend Systems (Node.js / Express)",
      "API Development & Integrations",
      "Secure Authentication & Role Management",
    ],
  },
  {
    heading: "Deployment",
    description:
      "I handle the technical launch process so you can focus on your business. From cloud hosting to performance optimization, I ensure your application runs smoothly, securely, and efficiently in production.",
    icon: "/serviceicon3.gif",
    services: [
      "Cloud Deployment (AWS / Vercel)",
      "CI/CD Setup & Automation",
      "SSL & Security Configuration",
      "Core Web Vitals Optimization",
      "SEO Technical Optimization",
    ],
  },
  {
    heading: "Support",
    description:
      "Launching is just the beginning. I provide ongoing maintenance, updates, and improvements to keep your product secure, optimized, and aligned with your business growth.",
    icon: "/serviceicon4.gif",
    services: [
      "Bug Fixes & System Maintenance",
      "Performance Monitoring",
      "Feature Enhancements",
      "Code Refactoring",
      "Technical Consultation",
    ],
  },
];


  return (
    <div className="serviceSection">
      <div className="serviceTitle">
        <h2>Services I Offer</h2>
      </div>
      <div className="service__p">
        {servicesList.map((service, index) => (
          <div key={index} className="service__c">
            <div className="serviceCard">
              <div className="serviceIcon">
                <Image
                  src={service.icon}
                  width={50}  // Adjust width as needed
                  height={50} // Adjust height as needed
                  alt={service.heading}
                />
              </div>
              <div className="serviceContent">
                <h2 className="heading">{service.heading}</h2>
                <p className="paragraph">{service.description}</p>
                <ul className="servicesList">
                  {service.services.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
