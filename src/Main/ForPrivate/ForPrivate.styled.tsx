import styled from 'styled-components';
import { device } from 'src/Global.styled';

export const ForPrivateWrapper = styled.section`
  @media ${device.mobileS} {
    position: relative;
    width: 320px;
    height: 240px;
    margin-top: 25px;
  }
`;
export const ForPrivateImg = styled.img`
  @media ${device.mobileS} {
    position: absolute;
    top: -15px;
    right: 30px;
    height: 28px;
    width: 26px;
  }
`;
export const ForPrivateTitle = styled.h2`
  @media ${device.mobileS} {
    margin-left: 15px;
    margin-top: 65px;
  }
`;
export const ForPrivateText = styled.p`
  @media ${device.mobileS} {
    margin: 25px 25px;
    height: 51px;
    color: #161824;
    font-size: 14px;
    text-align: start;
  }
`;
