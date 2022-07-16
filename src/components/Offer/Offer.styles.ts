import styled from "styled-components";
import { CommonContainer } from "../Common/CommonContainer";
import { pngRemover } from "../../helpers/textFormatters";

export const Container = styled(CommonContainer)`
  max-width: 420px;
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
  color: ${props => props.theme.colors.brandColor};
`;

export const AirCompanyLogo = styled.div<{ companyLogo: string }>`
  width: 110px;
  height: 36px;
  background-image: url("/resources/${props => pngRemover(props.companyLogo)}.png");
  background-image: image-set(url("/resources/${props => pngRemover(props.companyLogo)}.png") 1x,
  url("/resources/${props => pngRemover(props.companyLogo)}@2x.png") 2x);
`;