import Image from "next/image";
import "./Service.css";

const Service = () => {
  const servicesList = [
    {
      heading: "Web Design",
      description:
        "Designing the visual aspects of websites or applications, including layout, color schemes, typography, and overall aesthetics, to enhance usability and user engagement.",
      icon: "/serviceicon1.gif",
      services: [
        "UI/UX Design",
        "Responsive Design",
        "Layout Optimization",
        "Brand Alignment",
      ],
    },
    {
      heading: "Web Development",
      description:
        "Creating visually appealing and functional websites using HTML, CSS, and JavaScript to ensure a seamless user experience across different devices and screen sizes.",
      icon: "/serviceicon2.gif",
      services: [
        "Frontend Development",
        "Performance Optimization",
        "Scalability",
        "Security Implementation",
      ],
    },
    {
      heading: "Cross-Browser Compatibility",
      description:
        "Testing and optimizing websites to work consistently across different web browsers such as Chrome, Firefox, Safari, and Edge.",
      icon: "/serviceicon3.gif",
      services: [
        "Browser Testing",
        " Optimization",
        "Responsive Adjustments",
        "Legacy Support",
      ],
    },
    {
      heading: "Web Animation and Effects",
      description:
        "Creating animations, transitions, and special effects using CSS, JavaScript, or libraries like GSAP (GreenSock Animation Platform) to enhance user engagement and contribute to a more polished user interface.",
      icon: "/serviceicon4.gif",
      services: [
        "Interactive Elements",
        "Motion Design",
        "Performance Optimization",
        "Visual Storytelling",
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
