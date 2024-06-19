"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Footer from "../../../Components/Footer";
import Selectedwork from "../../../Components/Selectedwork";
import "./style.css";

const Workpage = () => {
  const worksec = useRef(null);

  useLayoutEffect(() => {
    const worksecElement = worksec.current;

    if (worksecElement) {
      const firstSwork = document.querySelector(".swork");

      gsap.set(".htitle h2", { y: "250%" });
      gsap.set(firstSwork, { width: "0%" });
      gsap.set(firstSwork.querySelector(".sworkcontent"), { opacity: "0" });
      gsap.set(firstSwork.querySelector(".sworkimage"), { opacity: "0" });

      const t1 = gsap.timeline({ delay: 0.5 });
      const t2 = gsap.timeline({ delay: 0.5 });

      t1.to(".htitle h2", {
        stagger: 0.25,
        y: 0,
        duration: 0.95,
        ease: "power3.out",
      });
      t2.to(firstSwork, {
        width: "100%",
        duration: 1.5,
        ease: "power4.out",
      }).to(
        [
          firstSwork.querySelector(".sworkcontent"),
          firstSwork.querySelector(".sworkimage"),
        ],
        {
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
          delay: -1,
        }
      );
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 0.99 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div ref={worksec}>
        <div className="hwork">
          <div className="hbgoverlay"></div>
          <div className="htitle">
            <h2>Our Work</h2>
            <h2>Take a look at our showcase projects </h2>
          </div>
        </div>
        <Selectedwork />
        <div className="worktog">
          <h2>Let's work together</h2>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Workpage;
