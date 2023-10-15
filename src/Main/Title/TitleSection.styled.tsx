import styled from 'styled-components';
import { device } from 'src/Global.styled';
import TitleBackground from 'src/assets/title.jpg';

export const ImageTitle = styled.div`
  background-image: url(${TitleBackground});
  @media ${device.mobileS} {
    width: 315px;
    height: 400px;
    margin: auto;
  }
`;
export const TitleWrapper = styled.section`
  @media ${device.mobileS} {
    position: relative;
    text-align: center;
    width: 320px;
    height: 400px;
    margin: auto;
  }
`;
export const TitleText = styled.h1`
  @media ${device.mobileS} {
    position: absolute;
    color: #ffffff;
    font-size: 20px;
    width: 257px;
    height: 48px;
    top: 160px;
    left: 31px;
  }
`;
export const TitleSpan = styled.span`
  @media ${device.mobileS} {
    position: absolute;
    color: #ffffff;
    font-size: 16px;
    width: 209px;
    height: 38px;
    top: 224px;
    left: 56px;
    align-items: center;
  }
`;
export const TitleButton = styled.button`
  background-color: #0024ff;
  border: none;
  color: #ffffff;
  @media ${device.mobileS} {
    position: absolute;
    width: 187px;
    height: 37px;
    top: 286px;
    left: 66px;
    padding: 10px 10px;
  }
`;
