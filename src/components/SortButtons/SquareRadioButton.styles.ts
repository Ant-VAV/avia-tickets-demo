import styled from "styled-components";
import { UppedRarefiedText } from "../Common/StyledText";

export const HiddenInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Label = styled.label<{ checked?: boolean; }>`
  display: inline-block;
  flex-grow: 1;
  position: relative;
  cursor: pointer;
  border: 1px solid #DFE5EC;

  ${props => props.checked ? `background-color: ${props.theme.colors.price};
  color: ${props.theme.colors.colorForDarkBack};` : ""};

  &:nth-of-type(2) {
    margin: 0 -1px;
  }

  &:nth-of-type(1) {
    border-radius: ${props => props.theme.content.borderRadius} 0 0 ${props => props.theme.content.borderRadius};
  }

  &:nth-of-type(3) {
    border-radius: 0 ${props => props.theme.content.borderRadius} ${props => props.theme.content.borderRadius} 0;
  }

  &:hover {
    ${props => !props.checked ? `background-color: ${props.theme.colors.hoverBackground};` : ""};
  }

  &:active {
    z-index: 1;
    box-shadow: 0 0 3px 1px ${props => props.theme.colors.focusInput};
    border-color: ${props => props.theme.colors.focusInput}
  }
`;

export const Text = styled(UppedRarefiedText)`
  padding: 15px;
  text-align: center;
`;