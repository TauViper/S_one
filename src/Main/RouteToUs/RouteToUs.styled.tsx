import styled from 'styled-components';
import { device } from 'src/Global.styled';

export const RouteToUsWrapper = styled.section`
  @media ${device.mobileS} {
    width: 303px;
    margin-top: 25px;
  }
`;
export const RouteToUsBoxTitle = styled.h2<{ left?: string; top?: string }>`
  @media ${device.mobileS} {
    margin-left: ${({ left }) => left || '15px'};
    margin-top: ${({ top }) => top || '15px'};
    height: 44px;
    width: 227px;
    font-size: 18px;
  }
`;
export const IframeRouteToUs = styled.div`
  @media ${device.mobileS} {
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 15px;
    width: 319px;
    height: 319px;
  }
`;

export const RouteToUsBoxImg = styled.img`
  @media ${device.mobileS} {
    width: 46px;
    height: 96px;
  }
`;
