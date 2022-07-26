import styled from "styled-components";

export const StyledInput = styled.input`
  height: 60px;
  width: 187px;
  padding: 20px 15px;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.buttonBorder};
  flex-grow: 1;

  &:nth-of-type(1) {
    border-radius: ${props => props.theme.content.borderRadius} 0 0 ${props => props.theme.content.borderRadius};
  }

  &:last-of-type {
    border-radius: 0 ${props => props.theme.content.borderRadius} ${props => props.theme.content.borderRadius} 0;
  }

  &:focus,
  &:active {
    z-index: 1;
  }
`;