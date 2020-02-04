import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  border: 1px solid $brandGreen;
`;

export default function Button({ href, text }: Props) {
  return <Wrapper href={href}>{text}</Wrapper>;
}
