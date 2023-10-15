import styled from 'styled-components';
import { device } from 'src/Global.styled';

export const AccompanimentWrapper = styled.section`
  @media ${device.mobileS} {
    width: 320px;
    height: 240px;
    margin-top: 25px;
  }
`;
export const AccompanimentBlankWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  @media ${device.mobileS} {
    justify-content: center;
  }
`;
export const AccompanimentBlanks = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    align-items: center;
    text-align: center;
    height: 120px;
    width: 160px;
  }
`;
export const AccompanimentBlankImg = styled.img`
  @media ${device.mobileS} {
    margin-top: 15px;
    height: 26px;
    width: 20px;
  }
`;
export const AccompanimentBlankSpan = styled.span`
  @media ${device.mobileS} {
    margin-top: 15px;
    width: 84px;
    height: 34px;
    color: #484848;
  }
`;
