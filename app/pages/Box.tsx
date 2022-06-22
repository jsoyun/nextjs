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
  /* display: flex; */
`;
const Text = styled.div`
  /* display: flex; */
`;
