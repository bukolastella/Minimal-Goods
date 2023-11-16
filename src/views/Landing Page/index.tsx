import styled from "styled-components";
import Discover from "./components/Discover";
import Hero from "./components/Hero";
import NavHeader from "./components/NavHeader";
import Display from "./components/Display";
import PillSection from "./components/PillSection";
import Shop from "./components/Shop";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <NavHeader />
      <Discover />
      <Display />
      <PillSection />
      <Shop />
      <W />
    </>
  );
};

export default LandingPage;

const W = styled.div`
  height: 100vh;
  background-color: red;
`;
