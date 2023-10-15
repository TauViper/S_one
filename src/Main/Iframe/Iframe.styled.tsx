import styled from 'styled-components';
import { device } from 'src/Global.styled';

export const IframeWrapper = styled.section`
  @media ${device.mobileS} {
    width: 319px;
    height: 319px;
    margin-top: 25px;
  }
`;
export const IframeMap = styled.iframe`
  @media ${device.mobileS} {
    width: 319px;
    height: 319px;
  }
`;
