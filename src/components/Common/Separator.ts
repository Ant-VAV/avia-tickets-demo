import styled from "styled-components";

export const Separator = styled.hr`
  height: 1px;
  border: none;
  background-color: #DADADA;

  margin-bottom: ${props => props.theme.content.defaultPadding};
`;
