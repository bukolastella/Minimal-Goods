import styled from "styled-components";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Discover = () => {
  const app = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context>();

  useLayoutEffect(() => {
    ctx.current = gsap.context((self) => {
      if (!self.selector) return;
      const Texts = self.selector(`.text-wrapper > div`) as HTMLDivElement[];
      const tl = gsap.timeline({ defaults: { duration: 5 } });

      Texts.forEach((element) => {
        tl.to(element, {
          height: 0,
        }).to(element, { y: 100 }, "<");
      });

      ScrollTrigger.create({
        trigger: ".scroll-wrapper",
        start: "top 15%",
        end: "bottom 15%",
        pin: true,
        pinSpacing: false,
        scrub: 1,
        // markers: true,
        animation: tl,
      });
    }, app);

    return () => ctx.current?.revert();
  }, []);

  return (
    <Wrapper ref={app}>
      <ScrollWrapper className="scroll-wrapper">
        <TextWrapper className="text-wrapper">
          <Text>Discover</Text>
          <Spec>the best in</Spec>
          <Text>minimal</Text>
          <Text>design</Text>
        </TextWrapper>
      </ScrollWrapper>
    </Wrapper>
  );
};

export default Discover;

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 126px 30px;
`;

const ScrollWrapper = styled.div`
  width: 100%;
`;

const TextWrapper = styled.div``;

const Text = styled.div`
  width: 100%;
  font-size: 10.875rem;
  font-weight: bold;
  line-height: 8.75rem;
  text-align: center;
  overflow: hidden;
  background: ${({ theme }) => theme.body};
`;

const Spec = styled(Text)`
  font-weight: 400;
`;
