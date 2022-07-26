import styled from "styled-components";

export const StyledButton = styled.button`
  position: absolute;
  top: 30%;
  left: 175px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${props => props.theme.colors.infoBlock};
  color: ${props => props.theme.colors.brandColor};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 2;

  &:hover {
    background-color: ${props => props.theme.colors.brandColor};
    color: ${props => props.theme.colors.colorForDarkBack};
  }

  &:active {
    background-color: ${props => props.theme.colors.activeInput};
  }
`;