import styled from "styled-components";
import BG1 from "../../../assets/bg1.jpeg";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Shop = () => {
  const app = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context>();
  const [active, setActive] = useState(1);

  useLayoutEffect(() => {
    ctx.current = gsap.context((self) => {
      if (!self.selector) return;
      const grids = self.selector(".scroll-grid") as HTMLDivElement[];

      grids.forEach((element, index) => {
        const random = gsap.utils.random(["-10%", "-30%", "-50%"], true);

        ScrollTrigger.create({
          trigger: element,
          start: "top bottom",
          end: "bottom bottom",
          markers: true,
          scrub: 1,
          animation: gsap.to(element.children[0].children, {
            y: random(),
          }),
          onEnter: () => setActive(index + 1),
          onEnterBack: () => setActive(index + 1),
        });
      });
    }, app);

    return () => ctx.current?.revert();
  }, []);

  const labelData = ["Furniture", "Decor", "Office", "Tech"];

  return (
    <Wrapper ref={app}>
      <LabelWrapper className="label">
        <span>{labelData[active - 1]}</span>
      </LabelWrapper>

      <ScrollWrapper className="scroll-grid">
        <ImgGrid className="img-grid">
          <img src={BG1} alt="" />
          <img src={BG1} alt="" />
          <img src={BG1} alt="" />
          <img src={BG1} alt="" />
        </ImgGrid>
      </ScrollWrapper>

      <ScrollWrapper className="scroll-grid">
        <ImgGrid className="img-grid">
          <img src={BG1} alt="" />
          <img src={BG1} alt="" />
          <img src={BG1} alt="" />
          <img src={BG1} alt="" />
        </ImgGrid>
      </ScrollWrapper>

      <ScrollWrapper className="scroll-grid">
        <ImgGrid className="img-grid">
          <img src={BG1} alt="" />
          <img src={BG1} alt="" />
          <img src={BG1} alt="" />
          <img src={BG1} alt="" />
        </ImgGrid>
      </ScrollWrapper>

      <ScrollWrapper className="scroll-grid">
        <ImgGrid className="img-grid">
          <img src={BG1} alt="" />
          <img src={BG1} alt="" />
          <img src={BG1} alt="" />
          <img src={BG1} alt="" />
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
  /* height: 100%; */
`;

const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  justify-content: space-between;
  /* background-color: red; */

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
