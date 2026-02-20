"use client"
import "./Footer.css";
import Link from "next/link";
import {
  FaInstagram,
  FaBehance,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { BsArrowReturnRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from 'axios';

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    weblink: "",
    message: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true); // Initialize as true
  const [loading, setLoading] = useState(false);

  const onSignup = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      setLoading(true);
       await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact/create`, user);
      
      toast.success("Message sent successfully");
      // Clear the form fields
      setUser({
        fullName: "",
        email: "",
        weblink: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.fullName.length > 0 &&
      user.email.length > 0 &&
      user.weblink.length > 0 &&
      user.message.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="footer">
      <div className="socialLinks">
        {socialLinks.map((socialLink, index) => (
          <Link
            href={socialLink.link}
            key={index}
            target="_blank"
            className="socialLink"
          >
            <div className="socialCard">
              <div className="socialLinkicon">{socialLink.icon}</div>
              <div className="socialLinktext">
                <h2>{socialLink.name}</h2>
              </div>
            </div>
          </Link>
        ))}
        <div className="myEmail">
          <p>If you prefer email</p>
          <h2>
            <span>
              <BsArrowReturnRight />
            </span>
            info@manishbasnet.com
          </h2>
        </div>
      </div>
      <div className="contact">
        <div className="contactTitle">
          <h2>Your project's success starts with a conversation—</h2>
          <h2>Reach out to us now!</h2>
        </div>
        <form className="contactForm" onSubmit={onSignup}>
          <div className="row">
            <div className="fullName">
              <label htmlFor="Name">Full Name</label>
              <input
                type="text"
                name="Name"
                id="Name"
                value={user.fullName}
                onChange={(e) =>
                  setUser({ ...user, fullName: e.target.value })
                }
                placeholder="Enter your full name"
              />
            </div>
            <div className="Email">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="Email"
                id="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="webLink">
            <label htmlFor="WebsiteLink">Website Link</label>
            <input
              type="url"
              name="WebsiteLink"
              id="WebsiteLink"
              value={user.weblink}
              onChange={(e) => setUser({ ...user, weblink: e.target.value })}
              placeholder="Enter your website link"
            />
          </div>
          <div className="message">
            <label htmlFor="Message">Message</label>
            <textarea
              name="Message"
              id="Message"
              value={user.message}
              onChange={(e) => setUser({ ...user, message: e.target.value })}
              cols="30"
              rows="10"
            />
          </div>
          <div className="send">
            <button type="submit" disabled={buttonDisabled || loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />

    </div>
  );
};

export default Footer;
