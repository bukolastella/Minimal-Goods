import styled from "styled-components";

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
  background: ${({ theme }) => theme.body};
`;

const Pill = styled.div`
  color: ${({ theme }) => theme.text};
  width: max-content;
  padding: 6px 16px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.text};
  border-radius: 50px;
  font-size: 2.8125rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
