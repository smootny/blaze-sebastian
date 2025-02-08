"use client"; 
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MacbookTerminal from "./macbookTerminal";

export default function Page() {
  const containerRef = useRef(null);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      socialIconsRef.current,
      { scale: 1, rotation: 0 },
      {
        scale: 1.2,
        rotation: 5,
        yoyo: true,
        repeat: 3,
        duration: 0.2,
        ease: "power1.inOut",
        stagger: 0.15,
      }
    );

    const sections = gsap.utils.toArray(".panel");

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current, 
        pin: true,
        scrub: 0.1,
        end: "+=3000",
      },
    });

    ["red", "gray", "purple", "green"].forEach((triggerClass, i) => {
      ScrollTrigger.create({
        trigger: "." + triggerClass,
        containerAnimation: scrollTween,
        start: "left 30%",
        end: i === 3 ? "right right" : "right 30%",
        markers: false,
        onToggle: (self) => {
          gsap.to(".marker-" + (i + 1), {
            duration: 0.25,
            autoAlpha: self.isActive ? 1 : 0,
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(sections);
    };
  }, []);

  return (
    <div>
      <div className="description">
        <div className="hero-section">
        <h1 className="font-orbitron">
            SEBASTIAN BLAZE
            <code className="font-alumni">FRONTEND DEVELOPER</code>
        </h1>
          <p className="phone-paragraph">
          I am an indie front-end developer trying to solve my daily problems with projects I build.
          </p>
        <div className="tech-stack flex items-center justify-center py-6" ref={socialIconsRef}>
  <a href="https://www.linkedin.com/in/sebastian-b%C5%82a%C5%BCejewski/" target="_blank" rel="noopener noreferrer">
    <Image 
      src="/assets/images/linkedin.png" 
      alt="LinkedIn Profile"
      width={40}
      height={40}
      className="tech-icon transition-transform hover:scale-110 animate-fadeInUp"
    />
  </a>

  <a href="https://github.com/smootny/" target="_blank" rel="noopener noreferrer">
    <Image 
      src="/assets/images/github.png" 
      alt="GitHub Profile" 
      width={40}
      height={40}
      className="tech-icon transition-transform hover:scale-110 animate-fadeInUp"
    />
  </a>

  <a href="https://x.com/blazejewski_dev" target="_blank" rel="noopener noreferrer">
    <Image 
      src="/assets/images/twitter.png" 
      alt="Twitter Profile"
      width={40}
      height={40}
      className="tech-icon transition-transform hover:scale-110 animate-fadeInUp"
    />
  </a>
      </div>
        </div>
      </div>
      <div className="container" ref={containerRef}>
      <div className="container" ref={containerRef}>
  <section className="panel project1 flex items-center justify-center p-10">
  <div className="flex flex-col md:flex-row items-center w-full max-w-5xl">
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:w-1/2 text-container">
      <h2 className="font-orbitron text-white text-4xl phone-font">Gaweloft Interiors</h2>
      <code className="font-alumni text-black text-2xl font-bold phone-description">
        Gaweloft - interior designer landing page for portfolio.
      </code>
      <div className="tech-stack flex items-center gap-4"> 
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
          alt="JavaScript"
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" 
          alt="HTML5" 
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" 
          alt="CSS3"
          width={40}
          height={40}
          className="tech-icon"
        />
      </div>
      <div className="flex justify-center items-center gap-4 py-6">
      <p className="font-orbitron">Source Code:</p> <a href="https://github.com/smootny/gaweloft" target="_blank" rel="noopener noreferrer">
      <Image className="code-img tech-icon transition-transform hover:scale-110" src="/images/code.png" alt="Code Button"  width={35}
          height={35}/></a>
      </div>    
    </div>
    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 phone-container">
      <Image
        src="/assets/gifs/gaweloft_page.gif"
        alt="Drugi projekt"
        width={350}
        height={300}
        className="rounded-lg shadow-lg border-gif"
      />
    </div>
  </div>
</section>
<section className="panel project2 flex items-center justify-center p-10">
  <div className="flex flex-col md:flex-row items-center w-full max-w-5xl">
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:w-1/2 text-container">
      <h2 className="font-orbitron text-white text-4xl phone-font">Who Pays?!</h2>
      <code className="font-alumni text-black text-2xl font-bold phone-description">
      Who Pays?! - a fun decision-making game.
      </code>
      <div className="tech-stack flex items-center gap-4">
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
          alt="React" 
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" 
          alt="HTML5" 
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" 
          alt="CSS3"
          width={40}
          height={40}
          className="tech-icon"
        />
      </div>
      <div className="flex justify-center items-center gap-4 py-6">
      <p className="font-orbitron">Source Code:</p> <a href="https://github.com/smootny/WhoPays" target="_blank" rel="noopener noreferrer">
      <Image className="code-img tech-icon transition-transform hover:scale-110" src="/assets/images/code.png" alt="Code Button"  width={35}
          height={35}/></a>
      </div>    
    </div>
    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 phone-container">
      <Image
        src="/assets/gifs/who_pays.gif"
        alt="Drugi projekt"
        width={350}
        height={300}
        className="rounded-lg shadow-lg border-gif"
      />
    </div>
  </div>
</section>
<section className="panel project3 flex items-center justify-center p-10">
  <div className="flex flex-col md:flex-row items-center w-full max-w-5xl">
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:w-1/2 text-container">
      <h2 className="font-orbitron text-white text-4xl phone-font">Trening Tools</h2>
      <code className="font-alumni text-black text-2xl font-bold phone-description">
      Trening Tools - simple tools for daily training and diet use.
      </code>
      <div className="tech-stack flex items-center gap-4">
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
          alt="Angular" 
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
          alt="HTML5" 
          width={40}
          height={40}
          className="tech-icon"
        />
         <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" 
          alt="HTML5" 
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" 
          alt="CSS3"
          width={40}
          height={40}
          className="tech-icon"
        />
      </div>
      <div className="flex justify-center items-center gap-4 py-6">
      <p className="font-orbitron">Source Code:</p> <a href="https://github.com/smootny/FlexFlowFreeze" target="_blank" rel="noopener noreferrer">
      <Image className="code-img tech-icon transition-transform hover:scale-110" src="/assets/images/code.png" alt="Code Button"  width={35}
          height={35}/></a>
      </div>    
    </div>
    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 phone-container">
      <Image
        src="/assets/gifs/flex_flow_freeze.gif"
        alt="Drugi projekt"
        width={350}
        height={300}
        className="rounded-lg shadow-lg border-gif"
      />
    </div>
  </div>
</section>
<section className="panel project4 flex items-center justify-center p-10">
  <div className="flex flex-col md:flex-row items-center w-full max-w-5xl">
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:w-1/2 text-container">
      <h2 className="font-orbitron text-white text-4xl phone-font">Trap Player</h2>
      <code className="font-alumni text-black text-2xl font-bold phone-description">
        Trap Player - Simple Ipod Classic design.
      </code>
      <div className="tech-stack flex items-center gap-4">
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
          alt="React" 
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" 
          alt="HTML5" 
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" 
          alt="CSS3"
          width={40}
          height={40}
          className="tech-icon"
        />
      </div>
      <div className="flex justify-center items-center gap-4 py-6">
      <p className="font-orbitron">Source Code:</p> <a href="https://github.com/smootny/TrapPlayer" target="_blank" rel="noopener noreferrer">
      <Image className="code-img tech-icon transition-transform hover:scale-110" src="/assets/images/code.png" alt="Code Button"  width={35}
          height={35}/></a>
      </div>    
    </div>
    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 phone-container">
      <Image
        src="/assets/gifs/trap_player.gif"
        alt="Drugi projekt"
        width={350}
        height={300}
        className="rounded-lg shadow-lg border-gif"
      />
    </div>
  </div>
</section>
</div>
</div>
      <div className="final flex flex-col items-end text-center gap-6 p-10">
  <div className="flex flex-col items-center text-center space-y-6 py-10 gap-6 skills-container">
  <h1 className="font-orbitron text-4xl text-white">My Skills?</h1>
  <div className="w-full max-w-4xl">
    <MacbookTerminal />
  </div>
 <div className="fixed top-4 left-4 z-50 flex items-center face-icon-container">
  <Image 
    src="/assets/images/face.svg"
    alt="Profile Icon"
    width={50}
    height={50}
    className="face-icon"
  />
  <div className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md bubble left">
          {isDownloaded ? (
            <p className="text-white font-semibold px-6 py-2">Thank you! 😊 🤙</p>
          ) : (
            <a href="/public/assets/files/sebastian_blazejewski.pdf" target="_blank" download onClick={() => setIsDownloaded(true)}>
              <button className="glass text-black border border-gray-800 px-4 py-2 uppercase rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r from-black to-black shadow-lg hover:text-white">
                Download CV 📄
              </button>
            </a>
          )}
        </div>
</div>
  <p>Feel free to reach me out, you can download my resume in the left top corner! See you! 🤞</p>
  <p className="font-alumni text-gray-400 py-4 text-md phone-copy-rights">
    &copy; 2025 Sebastian Blaze. <br />
    <code className="font-alumni">All rights reserved.</code>
  </p>
</div>
</div>
  </div>
  );
}
