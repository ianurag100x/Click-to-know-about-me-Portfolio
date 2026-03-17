import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const FONT_WEIGHTS = {
    title: { min: 100, max: 900, default: 400},
    subtitle: { min: 100, max: 400, default: 100}
}

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
    if(!container) return;

    const letters = container.querySelectorAll("span");
    const {min, max, default: base} = FONT_WEIGHTS[type];

    const animateLetter = (letter, weight, duration=0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`
        })
    }

    const handleMouseMove = (e) => {
        const {left} = container.getBoundingClientRect();
        
        const mouseX = e.clientX - left;

        letters.forEach((letter)=>{
            const {left: l, width: w} = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w/2));
            const intensity = Math.exp(-(distance**2)/2000);
            

            animateLetter(letter, min + (max-min)*intensity)
        })
    }

    container.addEventListener("mousemove", handleMouseMove);
}


const Welcome = () => {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  
  useGSAP(()=>{
    setupTextHover(titleRef.current, 'title');
    setupTextHover(subtitleRef.current, 'subtitle');
  }, []);

  return (
    <section id='welcome'>
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Anurag! Welcome to my",
          "text-3xl font-georama",
          100,
        )}
      </p>
      <h1 ref={titleRef} className='mt-7'>
        {renderText("Portfolio", "text-9xl italic font-georama")}
      </h1>

      <div className='small-screen'>
        <p>This portfolio is designed for desktop/tablet only</p>
      </div>
    </section>
  );
};

export default Welcome;
