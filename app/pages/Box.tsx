import styled from "styled-components";

const box = () => {
  return (
    <BoxContainer>
      <Center>
        {" "}
        <Text style={{ color: "red" }}>css테스트근데 왜 컴포넌트안먹는거지?</Text>
      </Center>
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
const Center = styled.div`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  left: 0;
  top: 0;
`;
