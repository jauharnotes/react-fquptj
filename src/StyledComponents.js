import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: blue;
`;
const Paragraph = styled.p`
  color: red;
`;
const Wrapper = styled.div`
  text-align: center;
`;
export default function App() {
  return (
    <Wrapper>
      <Title>Hello Devsaurus</Title>
      <Paragraph>My Name is brachio</Paragraph>
    </Wrapper>
  );
}
