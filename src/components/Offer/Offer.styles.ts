import styled from "styled-components";
import { CommonContainer } from "../Common/CommonContainer";

export const Container = styled(CommonContainer)`
  max-width: 502px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  &:first-child {
    margin-bottom: 20px;
  }
`;

export const Price = styled.div`
  font-size: 24px;
  color: ${props => props.theme.colors.price};
`;

export const AirCompanyLogo = styled.div`
  width: 110px;
  height: 36px;
  background-image: url("/resources/S7 Logo.png");
  background-image: image-set(url("/resources/S7 Logo.png") 1x,
  url("/resources/S7 Logo@2x.png") 2x);
`;