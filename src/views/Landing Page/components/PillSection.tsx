import styled from "styled-components";
import Colors from "../../../styles/Colors";

const PillSection = () => {
  return (
    <Wrapper>
      <Pill>Travel</Pill>
      <Pill>Home</Pill>
      <Pill>Office</Pill>
      <Pill>Travel</Pill>
      <Pill>Kitchen</Pill>
      <Pill>Fashion</Pill>
      <Pill>Furniture</Pill>
      <Pill>Books</Pill>
      <Pill>Lighting</Pill>
      <Pill>Tech</Pill>
      <Pill>Decor</Pill>
      <Pill>Bath & Bed</Pill>
      <Pill>More</Pill>
    </Wrapper>
  );
};

export default PillSection;

const Wrapper = styled.div`
  padding: 126px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  background-color: ${Colors.Black2e};
`;

const Pill = styled.div`
  color: ${Colors.CreamE8};
  width: max-content;
  padding: 6px 16px;
  border: 1px solid ${Colors.CreamE8};
  border-radius: 50px;
  font-size: 2.8125rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
