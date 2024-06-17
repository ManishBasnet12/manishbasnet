import Image from "next/image";
import "./Service.css";

const Service = () => {
  const servicesList = [
    {
      heading: "Web Design",
      description:
        "Designing the visual aspects of websites or applications, including layout, color schemes, typography, and overall aesthetics, to enhance usability and user engagement.",
      icon: "/serviceicon1.gif",
    },
    {
      heading: "Web Development",
      description:
        "Creating visually appealing and functional websites using HTML, CSS, and JavaScript to ensure a seamless user experience across different devices and screen sizes.",
      icon: "/serviceicon2.gif",
    },
    {
      heading: "Cross-Browser Compatibility",
      description:
        "They test and optimize websites to work consistently across different web browsers such as Chrome, Firefox, Safari, and Edge",
      icon: "/serviceicon3.gif",
    },
    {
      heading: "Web Animation and Effects",
      description:
        "They create animations, transitions, and special effects using CSS, JavaScript, or libraries like GSAP (GreenSock Animation Platform). These animations enhance user engagement and contribute to a more polished user interface.",
      icon: "/serviceicon4.gif",
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
                  width={10}
                  height={10}
                  alt={service.heading}
                  optimized
                  quality={3}
                />
              </div>
              <div className="serviceContent">
                <h2 className="heading">{service.heading}</h2>

                <p className="paragraph">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
