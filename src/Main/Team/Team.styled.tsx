import styled from 'styled-components';
import { device } from 'src/Global.styled';
import { Link } from 'react-router-dom';
import { LinkStyled } from 'src/Main/Cases/Cases.styled';

export const TeamWrapper = styled.section`
  @media ${device.mobileS} {
    width: 303px;
    height: 413px;
    margin-top: 25px;
  }
`;
export const TeamBoxTitle = styled.h2<{ left?: string; top?: string }>`
  @media ${device.mobileS} {
    margin-left: ${({ left }) => left || '15px'};
    margin-top: ${({ top }) => top || '15px'};
  }
`;
export const TeamLink = styled(Link)<LinkStyled>`
  text-decoration: ${({ decor }) => decor || 'none'};
  @media ${device.mobileS} {
    font-size: 14px;
    margin-left: 15px;
  }
`;
export const TeamFlexWrapper = styled.div`
  display: flex;
  @media ${device.mobileS} {
    overflow: scroll;
    margin-top: 20px;
    width: 630px;
    height: 375px;
  }
`;
export const TeamBoxWrapper = styled.div`
  -webkit-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  @media ${device.mobileS} {
    position: relative;
    width: 208px;
    height: 290px;
    margin-left: 10px;
  }
`;
export const TeamBoxImg = styled.img`
  @media ${device.mobileS} {
    width: 208px;
    height: 216px;
  }
`;
export const TeamBoxText = styled.p`
  @media ${device.mobileS} {
    //width: 115px;
    margin: 7px 0;
    //height: 95px;
    color: #161824;
    font-size: 14px;
    text-align: start;
  }
`;
