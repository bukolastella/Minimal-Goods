import { useLayoutEffect, useRef, useState } from "react";
import Discover from "./components/Discover";
import Hero from "./components/Hero";
import NavHeader from "./components/NavHeader";
import styled from "styled-components";
import gsap from "gsap";

const LandingPage = () => {
  const app = useRef<HTMLDivElement>(null);
  const [tl, setTl] = useState<GSAPTimeline>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const miniTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-wrapper",
          start: "top top",
          end: "+=5000",
          markers: true,
          // pin: true,
          scrub: 1,
        },
      });
      setTl(miniTl);
    }, app);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={app}>
      <ScrollWrapper className="scroll-wrapper">
        <Hero />
        {tl && (
          <>
            <NavHeader tl={tl} />
            <Discover tl={tl} />
          </>
        )}
      </ScrollWrapper>
    </div>
  );
};

export default LandingPage;

const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
