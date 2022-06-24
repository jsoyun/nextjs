import styled from "styled-components";

const box = () => {
  return (
    <BoxContainer>
      <Text style={{ color: "red" }}>css테스트</Text>
    </BoxContainer>
  );
};

export default box;
const BoxContainer = styled.div`
  border: solid green 3px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  /* display: flex; */
`;
const Text = styled.p`
  /* display: flex; */
  border: solid 4px blue;
  background-color: red;
  color: blue;
`;
