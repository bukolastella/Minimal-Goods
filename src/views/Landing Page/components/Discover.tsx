import styled from "styled-components";
import Colors from "../../../styles/Colors";
import { FC, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  tl: GSAPTimeline;
}

const Discover: FC<Props> = ({ tl }) => {
  const app = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context>();

  useLayoutEffect(() => {
    ctx.current = gsap.context((self) => {
      if (!self.selector) return;
      const Texts = self.selector(`.text-wrapper > div`) as HTMLDivElement[];
      // const tl = gsap.timeline({ defaults: { duration: 5 } });
      Texts.forEach((element) => {
        tl.to(element, {
          height: 0,
        }).to(element, { y: 50 }, "<");
      });
    }, app);

    return () => ctx.current?.revert();
  }, [tl]);

  return (
    <Wrapper ref={app}>
      <TextWrapper className="text-wrapper">
        <Text>Discover</Text>
        <Spec>the best in</Spec>
        <Text>minimal</Text>
        <Text>design</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default Discover;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${Colors.Black2e};
  color: ${Colors.CreamE8};
  padding: 126px 30px;
`;

const TextWrapper = styled.div``;

const Text = styled.div`
  width: 100%;
  font-size: 10.875rem;
  font-weight: bold;
  line-height: 8.75rem;
  text-align: center;
  overflow: hidden;
`;

const Spec = styled(Text)`
  font-weight: 400;
`;
