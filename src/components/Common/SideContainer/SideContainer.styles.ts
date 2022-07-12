import styled from "styled-components";
import { CommonContainer } from "../CommonContainer";
import { UppedRarefiedText } from "../StyledText";

export const Container = styled(CommonContainer)`
  width: 232px;
`;

export const Header = styled(UppedRarefiedText)`
  margin-bottom: ${props => props.theme.content.defaultPadding};
`;