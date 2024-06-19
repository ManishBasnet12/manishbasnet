import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Preloader = () => {

    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() =>{
        const updateCounter = () => {
            if (currentValue === 100) {
              return;
            }
      
            setCurrentValue((prevValue) => {
              let newValue = prevValue + Math.floor(Math.random() * 14) + 1;
              return newValue > 100 ? 100 : newValue;
            });
      
            let delay = Math.floor(Math.random() * 200) + 250;
            setTimeout(updateCounter, delay);
          };
      
          const initialDelay = Math.floor(Math.random() * 1000); 
          setTimeout(updateCounter, initialDelay); 
        }, [currentValue]);

    useGSAP(() =>{
        gsap.from(".circles", {
            top: "-100%",
            ease: "elastic.out",
            duration: 2.75,
          });
      
          gsap.to(".inner-circle", {
            width: "4vw",
            height: "4vw",
            ease: "power4.inOut",
            duration: 0.75,
            delay: 0.75,
          });
      
          gsap.to(".circle-rotate", {
            scale: 1,
            ease: "power4.inOut",
            duration: 0.75,
            delay: 1,
          });
      
          gsap.to(".circles", {
            rotation: 360,
            ease: "power4.inOut",
            duration: 1,
            delay: 1.5,
          });
      
          gsap.to(".block", {
            display: "block",
            height: "20vw",
            ease: "power4.inOut",
            duration: 0.5,
            delay: 2.25,
          });
      
          gsap.to(".block", {
            width: "60vw",
            ease: "power4.inOut",
            duration: 0.75,
            delay: 2.5,
          });
      
          const textTimeline = gsap.timeline({});
          textTimeline
            .to(".text-line", {
              strokeDashoffset: 0,
              ease: "power4.inOut",
              duration: 0.75,
              delay: 3,
            })
            .to(".text-line text", {
              fillOpacity: 1,
              ease: "power4.inOut",
              duration: 0.75,
              delay: 3.05,
            });
      
          gsap.fromTo(
            ".main",
            {
              duration: 1.5,
              left: "100vw",
              height: "100vh",
              scale: 0.4,
              opacity: "0",
              ease: "power4.out",
              delay: 3.75,
            },
            {
              duration: 1.5,
              left: "0",
              height: "100vh",
              scale: 0.4,
              opacity: "1",
              x: "translate(-50%,-50%)",
              ease: "power4.out",
              delay: 3.75,
            }
          );
      
          gsap.to(".block", {
            width: "0px",
            ease: "power4.inOut",
            duration: 1,
            delay: 3.4,
          });
      
          gsap.to(".block", {
            height: "0px",
            ease: "power4.inOut",
            duration: 1,
            delay: 4.05,
          });
      
          gsap.to(".block", {
            opacity: "0",
            ease: "power4.inOut",
            duration: 1,
            delay: 4.05,
          });
      
          gsap.to(".circles", {
            rotation: 0,
            ease: "power4.inOut",
            duration: 1.5,
            delay: 4.2,
          });
      
          gsap.to(".pre-loader", {
            scale: 0,
            ease: "power4.inOut",
            duration: 2.5,
            delay: 5.1,
            onComplete: removePreloader,
          });
      
          function removePreloader() {
            let preLoader = document.querySelector(".pre-loader");
            if (preLoader) {
              preLoader.remove();
            }
          }
      
    })

  return (
    <>
      <div className="pre-loader">
        <div className="circles">
          <div className="circle outer-circle"></div>
          <div className="circle inner-circle"></div>
          <div className="circle-rotate"></div>
          <div className="block">
            <svg
              height="100%"
              stroke="#404040"
              stroke-width="2"
              className="text-line"
              width="100%"
            >
              <text
                x="50%"
                color="white"
                dominant-baseline="middle"
                text-anchor="middle"
                y="50%"
              >
                WELCOME
              </text>
            </svg>
          </div>
        </div>

        <h1 className="counter">{currentValue}%</h1>

        <div className="loader-container">
          <p>Use headphones for better experience</p>
        </div>
      </div>
    </>
  );
};

export default Preloader;
