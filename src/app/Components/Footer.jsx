import "./Footer.css";
import Link from "next/link";
import {
  FaInstagram,
  FaBehance,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { BsArrowReturnRight } from "react-icons/bs";

const Footer = () => {
  const socialLinks = [
    {
      link: "https://www.behance.net/manishbasnet1",
      icon: <FaBehance />,
      name: "Behance",
    },
    {
      link: "https://www.linkedin.com/in/manish-basnet-b092a2207/",
      icon: <FaLinkedinIn />,
      name: "LinkedIn",
    },
    {
      link: "https://twitter.com/ManishB85356350",
      icon: <FaXTwitter />,
      name: "X",
    },
    {
      link: "https://www.instagram.com/manishbasnet__/",
      icon: <FaInstagram />,
      name: "Instagram",
    },
  ];

  return (
    <>
      <div className="footer">
        <div className="socialLinks">
          {socialLinks.map((socialLink, index) => (
            <Link href={socialLink.link} key={index} target="_blank" className="socialLink">
              <div className="socialCard">
                <div className="socialLinkicon">{socialLink.icon}</div>
                <div className="socialLinktext">
                  <h2>{socialLink.name}</h2>
                </div>
              </div>
            </Link>
          ))}
          <div className="myEmail">
            <p>If you Prefer Email</p>
            <h2><span><BsArrowReturnRight /></span>info@manishbasnet.com</h2>
          </div>
        </div>
        <div className="contact">
          <div className="contactTitle">
            <h2>Your project's success starts with a conversation—</h2>
            <h2>Reach out to us now!</h2>
          </div>
          <form action="" className="contactForm">
            <div className="row">
              <div className="fullName">
                <label htmlFor="Name">Full Name</label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="Enter your Full Name"
                />
              </div>
              <div className="Email">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="Enter your Email"
                />
              </div>
            </div>
            <div className="webLink">
              <label htmlFor="WebsiteLink">Website Link</label>
              <input type="url" name="WebsiteLink" id="WebsiteLink" placeholder="Enter your Website Link" />
            </div>
            <div className="message">
              <label htmlFor="Meaasge">Mesage</label>
              <textarea name="Message" id="" cols="30" rows="10">
                Your Message
              </textarea>
            </div>
            <div className="send">
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
