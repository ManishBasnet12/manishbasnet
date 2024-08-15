import React from "react";
import "./Selectedwork.css";
import Image from "next/image";

const Selectedwork = () => {
  const swork = [
    {
      sname: "E-Commerce",
      stype: "ui design, animation",
      simage: "/Work/home.jpg",
      sdesc:
        "Implement a sleek preloading animation that keeps users engaged while the content loads. Use a simple, branded animation that smoothly transitions into the main content, signaling the page's readiness without causing distractions.",
    },
    {
      sname: "Subarna Bhandari",
      stype: "Portfolio, Design",
      simage: "/Work/sbhd.png",
      sdesc:
        "Subarna Bhandari's portfolio website features their design projects, showcasing their skills and creative approach. It serves as a professional platform to highlight their expertise and attract potential clients and employers. The site effectively demonstrates their talent and unique style.",
    },
    {
      sname: "Esabda",
      stype: "web Devlopment, Design",
      simage: "/Work/esabda.png",
      sdesc:
        "The website provides valuable insights and information on Business related topics. It aims to educate readers, offer expert opinions, and keep them informed about industry trends and developments.",
    },
    {
      sname: "LIMS, DFTQC",
      stype: "Software, Devlopment",
      simage: "/Work/lims.png",
      sdesc:
        " LIMS improves efficiency by automating sample tracking and workflow management, enhancing data accuracy through centralized data management. It ensures compliance with regulations and provides remote access for better collaboration and scalability.",
    },
    {
      sname: "Google Traders",
      stype: "Logo, Design",
      simage: "/Work/google.jpg",
      sdesc:
        "created and implemented a logo that effectively communicates your brand's identity and enhances your website's appeal.",
    },
  ];

  return (
    <div className="sWorksec">
      <div className="sworktitle">
        <h2>Selected Work</h2>
      </div>
      {swork.map((work, index) => (
        <div className="swork" key={index}>
          <div className="sworkcontent">
            <div className="sworkcon">
              <h2>{work.sname}</h2>
              <p>{work.stype}</p>

              <h4>{work.sdesc}</h4>
            </div>
          </div>
          <div className="sworkimage">
            <div className="sworkimg">
              <Image
                src={work.simage}
                width={100}
                height={100}
                alt={work.simage}
                unoptimized
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Selectedwork;
