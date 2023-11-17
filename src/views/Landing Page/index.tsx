import Discover from "./components/Discover";
import Hero from "./components/Hero";
import NavHeader from "./components/NavHeader";
import Display from "./components/Display";
import PillSection from "./components/PillSection";
import Shop from "./components/Shop";
import { useRef } from "react";

const LandingPage = () => {
  const NavApp = useRef<HTMLDivElement>(null);

  return (
    <>
      <Hero />
      <NavHeader NavApp={NavApp} />
      <Discover />
      <Display NavApp={NavApp} />
      <PillSection />
      <Shop NavApp={NavApp} />
    </>
  );
};

export default LandingPage;

// const W = styled.div`
//   height: 100vh;
//   background-color: red;
// `;
