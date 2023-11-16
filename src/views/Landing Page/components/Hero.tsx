import styled from "styled-components";
import BG1 from "../../../assets/bg1.jpeg";

const Hero = () => {
  return (
    <>
      <Wrapper>
        <img src={BG1} alt="" />
      </Wrapper>
    </>
  );
};

export default Hero;

const Wrapper = styled.div`
  height: 100vh;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
