import styled from "styled-components";

export const Label = styled.label`
  display: block;
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

export const StyledCheckbox = styled.div<{ checked?: boolean; }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid ${props => props.theme.colors.brandColor};
  border-radius: 2px;
  box-sizing: border-box;
  text-align: center;
  margin-right: 10px;

  ${HiddenInput}:focus + & {
    box-shadow: 0 0 3px 1px ${props => props.theme.colors.focusInput};
  }

  ${HiddenInput}:active + & {
    box-shadow: 0 0 3px 1px ${props => props.theme.colors.activeInput};
  }
;
}

svg {
  visibility: ${(props) => (props.checked ? "visible" : "hidden")}
}
`;