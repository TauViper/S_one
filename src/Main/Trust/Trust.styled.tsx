import styled from 'styled-components';
import { device } from 'src/Global.styled';

export const TrustWrapper = styled.section`
  @media ${device.mobileS} {
    width: 320px;
    height: 240px;
    margin-top: 25px;
  }
`;
export const TrustBoxWrapper = styled.div`
  -webkit-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  @media ${device.mobileS} {
    position: relative;
    width: 208px;
    height: 160px;
  }
`;
export const TrustBoxImg = styled.img`
  @media ${device.mobileS} {
    position: absolute;
    right: 11px;
    top: 6px;
    height: 28px;
    width: 26px;
  }
`;
export const TrustBoxTitle = styled.h2`
  @media ${device.mobileS} {
    margin-left: 15px;
    margin-top: 15px;
  }
`;
export const TrustInBoxTitle = styled.h3`
  @media ${device.mobileS} {
    margin-left: 25px;
    margin-top: 15px;
  }
`;
export const TrustBoxText = styled.p`
  @media ${device.mobileS} {
    margin: 25px 25px;
    height: 51px;
    color: #161824;
    font-size: 14px;
    text-align: start;
  }
`;
export const TrustFlexWrapper = styled.div`
  display: flex;
  @media ${device.mobileS} {
    overflow: scroll;
    margin-top: 15px;
    //justify-content: space-around;
    width: 630px;
    height: 160px;
  }
`;
