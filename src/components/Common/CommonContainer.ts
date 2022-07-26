import styled from "styled-components";

export const CommonContainer = styled.div`
  background: ${props => props.theme.colors.infoBlock};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: ${props => props.theme.content.borderRadius};
  padding: ${props => props.theme.content.defaultPadding};
  margin-bottom: ${props => props.theme.content.defaultPadding};
`;