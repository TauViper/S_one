import styled from 'styled-components';
import { device } from 'src/Global.styled';
import { Link } from 'react-router-dom';
import { LinkStyled } from 'src/Main/Cases/Cases.styled';

export const ContactsWrapper = styled.section`
  @media ${device.mobileS} {
    width: 303px;
    margin-top: 25px;
  }
`;
export const ContactsBoxTitle = styled.h2<{ left?: string; top?: string }>`
  @media ${device.mobileS} {
    margin-left: ${({ left }) => left || '15px'};
    margin-top: ${({ top }) => top || '15px'};
    font-size: 18px;
  }
`;
export const ContactsFlexWrapper = styled.div`
  display: flex;
  @media ${device.mobileS} {
    margin-top: 20px;
    margin-left: 15px;
    width: 173px;
    //height: 375px;
  }
`;
export const ContactsBoxImg = styled.img`
  @media ${device.mobileS} {
    width: 26px;
    height: 26px;
  }
`;
export const ContactsLink = styled(Link)<LinkStyled>`
  text-decoration: ${({ decor }) => decor || 'none'};
  @media ${device.mobileS} {
    font-size: 14px;
    margin-left: 15px;
    color: #161824;
  }
`;
