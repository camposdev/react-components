import React from "react";
import styled from "styled-components";

const WrapButton = styled.button`
  background: pink;
  color: red;
  border: 0;
  padding: 10px;
`;

const Button = props => {
  return (
    <WrapButton>{props.children}</WrapButton>
  )
}

export default Button;