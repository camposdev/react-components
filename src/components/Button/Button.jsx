import React from "react";
// import styled from "styled-components";

// const WrapButton = styled.button`
//   background: pink;
//   color: red;
//   border: 0;
//   padding: 10px;
// `;

function Button(props) {
  return (
    <button>{props.children}</button>
  )
}

export default Button;