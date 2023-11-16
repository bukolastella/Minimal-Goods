import styled from "styled-components";
import Discover from "./components/Discover";
import Hero from "./components/Hero";
import NavHeader from "./components/NavHeader";
import Display from "./components/Display";
import PillSection from "./components/PillSection";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <NavHeader />
      <Discover />
      <Display />
      <PillSection />
      <W />
    </>
  );
};

export default LandingPage;

const W = styled.div`
  height: 100vh;
  background-color: red;
`;
