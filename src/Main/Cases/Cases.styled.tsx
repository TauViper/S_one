import styled from 'styled-components';
import { device } from 'src/Global.styled';
import { Link } from 'react-router-dom';

export interface LinkStyled {
  decor?: string;
}
export const CasesWrapper = styled.section`
  @media ${device.mobileS} {
    width: 303px;
    height: 475px;
    margin-top: 25px;
  }
`;
export const CasesBoxTitle = styled.h2`
  @media ${device.mobileS} {
    margin-left: 15px;
    margin-top: 15px;
  }
`;
export const CaseLink = styled(Link)<LinkStyled>`
  text-decoration: ${({ decor }) => decor || 'none'};
  @media ${device.mobileS} {
    position: absolute;
    font-size: 14px;
    bottom: 25px;
    left: 15px;
  }
`;
export const CasesFlexWrapper = styled.div`
  display: flex;
  @media ${device.mobileS} {
    overflow: scroll;
    margin-top: 20px;
    width: 630px;
    height: 420px;
  }
`;
export const CasesBoxWrapper = styled.div`
  -webkit-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  @media ${device.mobileS} {
    position: relative;
    width: 208px;
    height: 413px;
    margin-left: 10px;
  }
`;
export const CasesBoxImg = styled.img`
  @media ${device.mobileS} {
    width: 208px;
    height: 200px;
  }
`;
export const CaseBoxName = styled.h2`
  @media ${device.mobileS} {
    margin-left: 15px;
    font-size: 16px;
    width: 175px;
    margin-top: 15px;
  }
`;
export const CasesBoxText = styled.p`
  @media ${device.mobileS} {
    width: 115px;
    margin: 7px 15px;
    height: 95px;
    color: #161824;
    font-size: 14px;
    text-align: start;
  }
`;
export const CaseLinkNotAbsolute = styled(Link)<LinkStyled>`
  text-decoration: ${({ decor }) => decor || 'none'};
  @media ${device.mobileS} {
    font-size: 14px;
    margin-top: 20px;
    margin-left: 15px;
  }
`;
