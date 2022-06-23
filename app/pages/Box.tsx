import styled from "styled-components";

const box = () => {
  return (
    <>
      <BoxContainer>
        <Container>
          <Text>css테스트</Text>
        </Container>
      </BoxContainer>
    </>
  );
};

export default box;
const BoxContainer = styled.div``;
const Container = styled.div`
  display: flex;
  justify-content: center;
  /* display: flex; */
`;
const Text = styled.div`
  /* display: flex; */
  border: solid 4px blue;
  background-color: red;
`;
