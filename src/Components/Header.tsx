import styled from "styled-components";

export const MyHeader = styled.header`
  background-color: darkgreen;
`;

export const MyHeaderLogo = styled.h3`
  color:White;
`;

export function Header() {
  return (
    <MyHeader>
      <h3>Vego Kassen</h3>
    </MyHeader>
  );
}