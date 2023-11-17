import styled from "styled-components";
import BG3 from "../../../assets/bg3.jpeg";
import BG4 from "../../../assets/bg4.jpeg";
import BG5 from "../../../assets/bg5.jpeg";
import BG6 from "../../../assets/bg6.jpeg";
import { FC, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Props {
  NavApp: React.RefObject<HTMLDivElement>;
}

const Shop: FC<Props> = ({ NavApp }) => {
  const app = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context>();
  const [active, setActive] = useState(1);

  useLayoutEffect(() => {
    ctx.current = gsap.context((self) => {
      if (!self.selector) return;
      const grids = self.selector(".scroll-grid") as HTMLDivElement[];
      const imgs = self.selector(".img-grid ") as HTMLDivElement[];

      imgs.forEach((element, index) => {
        const random = gsap.utils.random(["-10%", "-30%", "-50%"], true);

        const tl = gsap.timeline().to(element.children, {
          y: () => {
            const temp = random();
            return temp;
          },
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top bottom",
          end: "bottom bottom",
          // markers: true,
          scrub: 1,
          animation: tl,
          onEnter: () => setActive(index + 1),
          onEnterBack: () => setActive(index + 1),
        });
      });

      grids.forEach((element, index) => {
        const setMode = (params: HTMLDivElement | null) => {
          return gsap.to(params, {
            background: (index + 1) % 2 ? "#2e2a27" : "#e8e2da",
            color: (index + 1) % 2 ? "#e8e2da" : "#2e2a27",
            duration: 1.5,
          });
        };

        const tl = gsap
          .timeline()
          .to(
            NavApp?.current,
            {
              duration: 4,
            },
            "<"
          )
          .add(setMode(NavApp?.current))
          .add(setMode(app?.current), "<");

        ScrollTrigger.create({
          trigger: element,
          start: "top bottom",
          end: "bottom bottom",
          // markers: true,
          scrub: 1,
          animation: tl,
          onEnter: () => setActive(index + 1),
          onEnterBack: () => setActive(index + 1),
        });
      });
    }, app);

    return () => ctx.current?.revert();
  }, [NavApp]);

  const labelData = ["Furniture", "Decor", "Office", "Tech"];

  return (
    <Wrapper ref={app}>
      <LabelWrapper className="label">
        <span>{labelData[active - 1]}</span>
      </LabelWrapper>

      <ScrollWrapper className="scroll-grid">
        <ImgGrid className="img-grid">
          <img src={BG3} alt="" />
          <img src={BG3} alt="" />
          <img src={BG3} alt="" />
          <img src={BG3} alt="" />
        </ImgGrid>
      </ScrollWrapper>

      <ScrollWrapper className="scroll-grid">
        <ImgGrid className="img-grid">
          <img src={BG4} alt="" />
          <img src={BG4} alt="" />
          <img src={BG4} alt="" />
          <img src={BG4} alt="" />
        </ImgGrid>
      </ScrollWrapper>

      <ScrollWrapper className="scroll-grid">
        <ImgGrid className="img-grid">
          <img src={BG5} alt="" />
          <img src={BG5} alt="" />
          <img src={BG5} alt="" />
          <img src={BG5} alt="" />
        </ImgGrid>
      </ScrollWrapper>

      <ScrollWrapper className="scroll-grid">
        <ImgGrid className="img-grid">
          <img src={BG6} alt="" />
          <img src={BG6} alt="" />
          <img src={BG6} alt="" />
          <img src={BG6} alt="" />
        </ImgGrid>
      </ScrollWrapper>
    </Wrapper>
  );
};

export default Shop;

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 126px 30px;
  position: relative;
`;

const ScrollWrapper = styled.div`
  width: 100%;
`;

const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  justify-content: space-between;

  & > img {
    z-index: 5;
  }

  & > img:nth-child(1) {
    width: 330px;
    height: 430px;
  }

  & > img:nth-child(2) {
    width: 245px;
    height: 320px;
    margin-top: 270px;
  }

  & > img:nth-child(3) {
    width: 160px;
    height: 210px;
    margin-top: 54px;
  }

  & > img:nth-child(4) {
    width: 416px;
    height: 545px;
    margin-top: 320px;
  }
`;

const LabelWrapper = styled.div`
  font-size: 19.6875rem;
  font-weight: 700;
  position: sticky;
  top: 60vh;
`;
