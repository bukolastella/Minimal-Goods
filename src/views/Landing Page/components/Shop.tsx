import styled from "styled-components";
import Colors from "../../../styles/Colors";
import BG1 from "../../../assets/bg1.jpeg";

const Shop = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={BG1} alt="" />
      </ImgWrapper>
    </Wrapper>
  );
};

export default Shop;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${Colors.Black2e};
  color: ${Colors.CreamE8};
  padding: 126px 30px;
`;

const ImgWrapper = styled.div`
  width: 200px;
  height: 300px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;
