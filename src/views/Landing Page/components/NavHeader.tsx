import styled from "styled-components";
import Colors from "../../../styles/Colors";
import Logo from "./Logo";
import { FC, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  tl: GSAPTimeline;
}

const NavHeader: FC<Props> = ({ tl }) => {
  const app = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context>();

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {
      // gsap.timeline({ paused: false })

      tl.fromTo(
        ".middle",
        {
          width: "100%",
          translate: "0 -90%",
        },
        {
          width: "12%",
          translate: "0 0%",
          ease: "power3.out",
        }
      );
    }, app);

    return () => ctx.current?.revert();
  }, [tl]);

  return (
    <Wrapper ref={app}>
      <MiniWrapper>
        <Nav>
          <LeftSide>
            <div>ARTICLES</div>
            <div>SHOP</div>
            <div>SUBMIT</div>
          </LeftSide>
          <MiddleSide className="middle">
            <Logo />
          </MiddleSide>
          <RightSide>(2021), ALL RIGHTS RESERVED</RightSide>
        </Nav>
      </MiniWrapper>
    </Wrapper>
  );
};

export default NavHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 85.4px;
  background-color: ${Colors.Black2e};
  padding: 0 30px;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 20;
`;

const MiniWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Nav = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${Colors.CreamE8};
  border-bottom: 1px solid ${Colors.CreamE8};
  position: absolute;
  left: 0;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

const MiddleSide = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  /* width: 100%;
  transform: translate(0px, -90%); */
  /* width: 12.2476%;
  transform: translate(0px, 0%); */

  svg {
    color: ${Colors.CreamE8};
  }
`;

const RightSide = styled.div`
  white-space: nowrap;
`;