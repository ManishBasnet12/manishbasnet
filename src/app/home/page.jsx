"use client";

import { useEffect, useLayoutEffect } from "react";

import { useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import Homeabout from "../../../Components/Homeabout";
import Cube from "../../../Components/Cube";
import HeroSectionContent from "../../../Components/HeroSectionContent";
import Service from "../../../Components/Service";
import Work from "../../../Components/Work";
import Footer from "../../../Components/Footer";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const container = useRef();
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 1,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-300px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (!firstText.current || !secondText.current) {
      return;
    }
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.08 * direction;
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 0.9999 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useGSAP(() => {
    gsap.set(".title h1", { y: "150%", opacity: 0 });
    gsap.set(".slider", { y: "150%" });
    gsap.set("canvas", { y: "20%", opacity: 0 });
    gsap.set(".desc", { opacity: 0 });

    const t1 = gsap.timeline({
      delay: 0.5,
      ease: "power2.out",
    });

    t1.to(".main", {
      overflowY: "unset",
      ease: "power4.inOut",
      duration: 0.1,
    })
      .to(".title h1, .slider,.desc", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
      })
      .to("canvas", {
        opacity: 1,
        duration: 0.5,
        y: 0,
        delay: "-1",
      });
  }, []);

  return (
    <div ref={container}>
      <main className="main">
        <section className="website-content">
          <div className="hero">
            <Cube />
            <HeroSectionContent />
            <motion.div className="sliderContainer">
              <div ref={slider} className="slider">
                <p ref={firstText}>Frontend Developer -</p>
                <p ref={secondText}>Frontend Developer -</p>
              </div>
            </motion.div>
          </div>
        </section>
        <Homeabout />
        <Work />
        <Service />
        <Footer />
      </main>
    </div>
  );
};

export default Homepage;
