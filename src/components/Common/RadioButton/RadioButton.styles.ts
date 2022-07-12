import styled from "styled-components";

export const Label = styled.label`
  display: block;
  position: relative;
  font-size: 13px;
  padding: 10px ${props => props.theme.content.defaultPadding};
  margin: 0 -${props => props.theme.content.defaultPadding};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.hoverBackground};
  }
`;

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

export const InnerCircle = styled.div`
  position: absolute;
  left: 17%;
  top: 17%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.price};
`;

export const StyledCheckbox = styled.div<{ checked?: boolean; }>`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid ${props => props.theme.colors.price};
  border-radius: 50%;
  margin-right: 10px;
  box-sizing: border-box;
  text-align: center;

  ${HiddenInput}:active + & {
    box-shadow: 0 0 3px 1px ${props => props.theme.colors.activeInput};
  }

  ${HiddenInput}:focus + & {
    box-shadow: 0 0 3px 1px ${props => props.theme.colors.focusInput};
  }

  ${InnerCircle} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")}
  }
`;

export const Text = styled.span`
  position: absolute;
  top: 30%;
`;