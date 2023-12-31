import styled from "styled-components";
import BG2 from "../../../assets/bg2.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useLayoutEffect, useRef } from "react";
import { modeStore } from "../../../store/mode";
gsap.registerPlugin(ScrollTrigger);

interface Props {
  NavApp: React.RefObject<HTMLDivElement>;
}

const Display: FC<Props> = ({ NavApp }) => {
  const app = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context>();

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { duration: 10 } })
        .to(NavApp?.current, {
          background: "#e8e2da",
          color: "#2e2a27",
        })
        .to(
          app.current,
          {
            background: "#e8e2da",
            color: "#2e2a27",
          },
          "<"
        )
        .to(
          ".image",
          {
            borderRadius: 0,
            width: "100%",
            height: "100%",
          },
          "<"
        );

      ScrollTrigger.create({
        trigger: ".scroll-wrapper",
        start: "top 15%",
        end: "bottom 15%",
        pin: true,
        scrub: 1,
        // markers: true,
        animation: tl,
        onLeave: () => (modeStore.isDark = false),
        onEnterBack: () => (modeStore.isDark = true),
      });
    }, app);

    return () => ctx.current?.revert();
  }, [NavApp]);

  return (
    <Wrapper ref={app}>
      <ScrollWrapper className="scroll-wrapper">
        <MinWrapper>
          <ImgWrapper className="image">
            <img src={BG2} alt="" />
          </ImgWrapper>
        </MinWrapper>
      </ScrollWrapper>
    </Wrapper>
  );
};

export default Display;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.body};
  padding: 0 30px;
`;

const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MinWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  border-radius: 35em;
  height: 35em;
  width: 35em;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    /* max-width: none; */
    min-height: 100vh;
    min-width: 100vw;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;
