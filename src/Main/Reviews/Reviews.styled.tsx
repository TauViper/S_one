import styled from 'styled-components';
import { device } from 'src/Global.styled';
import { Link } from 'react-router-dom';
import { LinkStyled } from 'src/Main/Cases/Cases.styled';

export const ReviewsWrapper = styled.section`
  @media ${device.mobileS} {
    width: 303px;
    //height: 413px;
    margin-top: 25px;
  }
`;
export const ReviewsFlexWrapper = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  @media ${device.mobileS} {
    margin-top: 20px;
  }
`;
export const ReviewsBoxWrapper = styled.div`
  -webkit-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  @media ${device.mobileS} {
    position: relative;
    width: 280px;
    height: 327px;
    margin-left: 10px;
    &:last-child {
      margin-bottom: 15px;
    }
  }
`;
export const ReviewsBoxTitle = styled.h2<{ left?: string; top?: string }>`
  @media ${device.mobileS} {
    margin-left: ${({ left }) => left || '15px'};
    margin-top: ${({ top }) => top || '15px'};
  }
`;
export const ReviewsBoxImg = styled.img`
  @media ${device.mobileS} {
    margin-left: 15px;
    width: 50px;
    height: 50px;
  }
`;
export const ReviewsBoxText = styled.p`
  @media ${device.mobileS} {
    width: 240px;
    margin: 10px auto;
    //height: 95px;
    color: #161824;
    font-size: 14px;
    text-align: start;
  }
`;
export const ReviewsLink = styled(Link)<LinkStyled>`
  text-decoration: ${({ decor }) => decor || 'none'};
  @media ${device.mobileS} {
    font-size: 14px;
    margin-left: 15px;
  }
`;
