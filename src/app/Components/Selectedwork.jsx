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
        "I relish the challenge of creating web applications from the ground up and watching them come to life in the browser.",
    },
    {
      sname: "Subarna Bhandari",
      stype: "Portfolio, Design",
      simage: "/Work/sbhd.png",
      sdesc:
        "I relish the challenge of creating web applications from the ground up and watching them come to life in the browser.",
    },
    {
      sname: "Esabda",
      stype: "web Devlopment, Design",
      simage: "/Work/esabda.png",
      sdesc:
        "I relish the challenge of creating web applications from the ground up and watching them come to life in the browser.",
    },
    {
      sname: "LIMS, DFTQC",
      stype: "Software, Devlopment",
      simage: "/Work/lims.png",
      sdesc:
        "I relish the challenge of creating web applications from the ground up and watching them come to life in the browser.",
    },
    {
      sname: "Google Traders",
      stype: "Logo, Design",
      simage: "/Work/google.jpg",
      sdesc:
        "I relish the challenge of creating web applications from the ground up and watching them come to life in the browser.",
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
