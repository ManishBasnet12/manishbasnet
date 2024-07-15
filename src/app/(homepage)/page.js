"use client";

import { useEffect, useLayoutEffect } from "react";

import { useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import Preloader from "../../../Components/Preloader";
import Homeabout from "../../../Components/Homeabout";
import Cube from "../../../Components/Cube";
import HeroSectionContent from "../../../Components/HeroSectionContent";
import Service from "../../../Components/Service";
import Work from "../../../Components/Work";
import Footer from "../../../Components/Footer";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AnimationComponent = () => {
  // const container = useRef();
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
        scrub: 0.1,
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
      lerp: 0.05,
      duration: 0.4,
      wheelMultiplier: 2.5,
      infinite: false,
      easing: (t) => Math.min(1, 0.999 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    gsap.set("header", { y: -200, visibility: "hidden" });
    gsap.set(" .main-image, .sliderContainer, .hero h1, .hero .desc  ", {
      y: 200,
      opacity: 0,
    });

    gsap.set(".hero", { height: "0vh" });
    gsap.to(".main", {
      display: "block",
      background: "white",
      ease: "power3",
      duration: "0.5",
      delay: 3,
    });

    gsap.to(".main", {
      scale: 1,
      background: "white",
      ease: "power4.inOut",
      duration: 0.75,
      delay: 4.5,
    });

    gsap.to(".main", {
      height: "auto",
      background: "black",
      overflowY: "unset",
      ease: "power4.inOut",
      duration: 0.1,
      delay: 6.5,
    });

    

    const t1 = gsap.timeline({ delay: 1 });

    t1.to(".hero", {
      height: "calc(90vh - 20px)",
      ease: "power2.inOut",
      duration: 0.75,
      delay: 3.85,
    }).to("  .main-image, .sliderContainer,  .hero h1, .hero .desc ", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.04,
      ease: "power3.inOut",
      delay: "-0.75",
    });

    gsap.to("header", {
      visibility: "visible",
      delay: 3.75,
    });

    gsap.to("header", {
      y: 0,
      delay: 4.9,
      duration: 0.5,
      ease: "power4.inOut",
    });
  });

  return (
    <>
      <Preloader />
      <main className="main  page">
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
    </>
  );
};

export default AnimationComponent;
