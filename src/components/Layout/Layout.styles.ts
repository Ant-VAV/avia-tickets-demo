import styled from "styled-components";

export const BaseBackground = styled.div`
  background-color: ${props => props.theme.colors.background}`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.content.maxWidth};
`;