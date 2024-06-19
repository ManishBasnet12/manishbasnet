"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
  const navItems = [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  useEffect(() => {
    if (isActive) {
      document.body.classList.add("body-fixed");
    } else {
      document.body.classList.remove("body-fixed");
    }

    return () => {
      document.body.classList.remove("body-fixed");
    };
  }, [isActive]);

  useEffect(() => {
    if (count > 0) {
      gsap.set(".tMenu", { height: "0vh" });
      gsap.set(".tPage p", { y: "120%" });
      gsap.set(".tline, .bline", { width: "0" });
      gsap.set(".rline, .lline", { height: "0" });
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
      });

      tl.to(".tMenu", {
        height: "100vh",
        duration: 0.4,
        ease: "power3.in",
      })
        .to(".tPage p", {
          y: "0",
          stagger: 0.035,
          delay: "-0.15",
        })
        .to(".tline", {
          width: "100%",
          duration: "0.4",
          delay: "-0.4",
        })
        .to(" .bline", {
          width: "60%",
          duration: "0.4",
          delay: "-0.4",
        })
        .to(".rline", {
          height: "10%",
          delay: "-0.4",
          duration: "0.4",
        })
        .to(".lline", {
          height: "100%",
          delay: "-0.4",
          duration: "0.4",
        });
      if (isActive === true) {
        tl.play();
      } else if (isActive === false) {
        tl.reverse({ duration: 0.8 });
      }
    }
  }, [isActive, count]);

  const clickMenu = () => {
    setIsActive(!isActive);
    setCount(count + 1);
  };

  const activeFunction = () => {
    setIsActive(false);
  };

  return (
    <>
      <header>
        <nav>
          <div className="nav-item">
            <div className="logo">
              <p className="copyright">©</p>
              <div className="name">
                <p className="codeBy">Code by</p>
                <p className="manish">Manish</p>
                <p className="basnet">Basnet</p>
              </div>
            </div>
          </div>
          <Link href="/home" className="nav-item" id="logo">
            <Image
              src="/mainlogo.png"
              width={80}
              height={80}
              className="main-logo"
              alt="main logo"
            />
          </Link>
          <div className="nav-item menu">
            <div
              onClick={clickMenu}
              className={`anchor-tag ${isActive ? "flexNormal" : ""}`}
              href="#"
            >
              <p className={`${!isActive ? "active" : ""}`}>
                {!isActive ? "Menu" : ""}
              </p>
              <p className={`${isActive ? "active" : ""}`}>
                {isActive ? "Close" : ""}
              </p>
              <span className="span"></span>
            </div>
            <div className="tMenu">
              <div className="tbody">
                <div className="tline"></div>
                <div className="bline"></div>
                <div className="lline"></div>
                <div className="rline"></div>
                <div className="tPages">
                  <div className="pPage">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      className="tPage"
                      href={item.href}
                      onClick={activeFunction}
                    >
                      
                        <p>
                          <span>0{index + 1}</span>
                          {item.title}
                        </p>
                     
                    </Link>
                  ))}
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
