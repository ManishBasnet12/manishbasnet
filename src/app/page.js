"use client";

import { useEffect, useLayoutEffect, useState } from "react";

import { useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import Homeabout from "../../Components/Homeabout";
import Cube from "../../Components/Cube";
import HeroSectionContent from "../../Components/HeroSectionContent";
import Service from "../../Components/Service";
import Work from "../../Components/Work";
import Footer from "../../Components/Footer";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  let animationRunning = true;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: ".hero",
        scrub: 1,
        start: "top 100px",
        end: "bottom top",
        onUpdate: (e) => (direction = e.direction * -1),
        onLeave: () => {
          animationRunning = false; // Stop animation when .hero is out of view
        },
        onEnterBack: () => {
          animationRunning = true; // Resume animation when .hero comes back into view
        },
      },
      x: "-350px",
    });

    // Function to handle the animation
    const animate = () => {
      if (!firstText.current || !secondText.current) {
        return;
      }

      // Only animate if animationRunning is true
      if (animationRunning) {
        if (xPercent < -100) {
          xPercent = 0;
        } else if (xPercent > 0) {
          xPercent = -100;
        }

        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        xPercent += 0.08 * direction;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1.1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      wheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.set(".title h1", { y: "100%", opacity: 0 });
    gsap.set(".slider", { y: "150%" });
    gsap.set(".desc", { opacity: 0 });
    gsap.set(".heroimage", {
      scale: "1.3",
      transformOrigin: "center",
      opacity: "0",
    });

    const t1 = gsap.timeline({
      delay: 0.5,
      ease: "power2.out",
    });

    t1.to(".main", {
      overflowY: "unset",
      ease: "power4.inOut",
      duration: 0.1,
    })
      .to(".title h1,.desc, .slider", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.05,
        ease: "power4.out",
      })
      .to(".heroimage", {
        scale: "1",
        opacity: "1",
        duration: 1.5,
        delay: "-1",
        ease: "power4.out",
      });
  }, []);

  return (
    <>
      <main className="main">
        <section className="website-content">
          <div className="hero">
            {/* {isMobile ? (
              <div className="mblcube">
                <Image
                  src="/mblcube.jpg"
                  width={100}
                  height={100}
                  alt="mblcube"
                  unoptimized
                />
              </div>
            ) : (
              <></>
            )} */}
            <div className="heromainimg">
              <Image
                className="heroimage"
                src="/manish2.png"
                width={100}
                height={100}
                alt="manish2"
                unoptimized
              />
            </div>
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

export default Homepage;
