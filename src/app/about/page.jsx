"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import SpotifyMusic from "../../../Components/SpotifyMusic";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Footer from "../../../Components/Footer";
import { BsArrowRight } from "react-icons/bs";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const Aboutpage = () => {
  const aboutsec = useRef(null);
  const afirstText = useRef(null);
  const asecondText = useRef(null);
  const aslider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  let animationRunning = true; 

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(aslider.current, {
      scrollTrigger: {
        trigger: ".about",
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
      if (!afirstText.current || !asecondText.current) {
        return;
      }

      // Only animate if animationRunning is true
      if (animationRunning) {
        if (xPercent < -100) {
          xPercent = 0;
        } else if (xPercent > 0) {
          xPercent = -100;
        }

        gsap.set(afirstText.current, { xPercent: xPercent });
        gsap.set(asecondText.current, { xPercent: xPercent });
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

  useLayoutEffect(() => {
    const aboutsecElement = aboutsec.current;

    if (aboutsecElement) {
      gsap.set(".aboutImage", {
        scale: "1.2",
        transformOrigin: "center",
        opacity: "0",
      });

      gsap.set(".aboutOverlay", { y: "100%", opacity: 0 });
      const t1 = gsap.timeline({ delay: 0.5 });

      t1.to(".aboutOverlay", {
        y: "0",
        opacity: 1,
        duration: 1.25,
        ease: "power4.out",
      });
      t1.to(".aboutImage", {
        scale: "1",
        opacity: "1",
        duration: 1.5,
        delay: "-1",
        ease: "power4.out",
      });
    }
  }, []);

  return (
    <>
      <div ref={aboutsec}>
        <div className="about">
          <div className="aboutme">
            <div className="aboutImage">
              <div className="mimage">
                <Image
                  unoptimized
                  src="/manish.png"
                  width={100}
                  height={100}
                  alt="manish"
                />
              </div>
            </div>
            <motion.div className="aboutOverlay">
              <div ref={aslider} className="aslider">
                <p ref={afirstText}> About Me</p>
                <p ref={asecondText}> About Me</p>
              </div>
              {/* <div className="acircle">
              <BsArrowRight />
            </div> */}
            </motion.div>
          </div>
        </div>
        <div className="intro">
          <p>
            Hey, I'm Manish Basnet, a front-end developer fascinated by the
            intersection of design and technology. With a focus on user
            experience and a passion for responsive design, I strive to deliver
            intuitive and visually stunning websites. Let's craft compelling
            digital experiences together!
          </p>
        </div>

        <div className="aboutService">
          <div className="asheading">
            <h2>I can help you with...</h2>
          </div>
          <div className="ascards">
            <div className="ascard">
              <div className="astitle">
                <h2>Design</h2>
              </div>
              <div className="asdesc">
                <p>
                  Combining my expertise in website design with a focus on
                  user-friendliness, I deliver visually appealing and intuitive
                  digital experiences.
                </p>
                <p>
                  <BsArrowRight />
                </p>
              </div>
            </div>
            <div className="ascard">
              <div className="astitle">
                <h2>Development</h2>
              </div>
              <div className="asdesc">
                <p>
                  Building fast, secure, and scalable websites using modern
                  technologies like React.js. Ensuring optimal performance,
                  cross-browser compatibility, and efficient version control.
                </p>
                <p>
                  <BsArrowRight />
                </p>
              </div>
            </div>
            <div className="ascard">
              <div className="astitle">
                <h2>Product</h2>
              </div>
              <div className="asdesc">
                <p>
                  Turning ideas into successful products by developing a clear
                  strategy, conducting thorough user research, and ensuring a
                  smooth product launch with ongoing support.
                </p>
                <p>
                  <BsArrowRight />
                </p>
              </div>
            </div>
          </div>
        </div>

        <SpotifyMusic />
        <Footer />
      </div>
    </>
  );
};

export default Aboutpage;
