import styled from "styled-components";

interface Props extends React.ComponentPropsWithRef<"button"> {
  buttonType?: "active" | "inactive";
}

export const Button = ({ buttonType }: Props) => {
  return <Btn>fgfg</Btn>;
};

const Btn = styled.button<Props>`
  background-color: red;
`;

//집에서 맥북들고 회사일하는 여자
//왜 컴포넌트 적용이 안되고 있니 여기서
