import styled from "styled-components";
import { CommonContainer } from "../Common/CommonContainer";

export const Content = styled(CommonContainer)`
  padding: 0;
  display: flex;
`;

export const Button = styled.button`
  flex-grow: 1;
  background-color: ${props => props.theme.colors.brandColor};
  color: ${props => props.theme.colors.colorForDarkBack};
  padding: 15px;
  border: none;
  border-radius: inherit;

  &:active {
    background-color: ${props => props.theme.colors.activeInput};
  }
`;