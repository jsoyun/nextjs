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
