import styled from 'styled-components';
import { device } from 'src/Global.styled';

export const StyledFooter = styled.footer<{ direction?: string }>`
  background-color: #0024ff;
  flex-direction: ${({ direction }) => direction || 'column'};
  @media ${device.mobileS} {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 320px;
    height: 200px;
    margin: auto;
  }
`;
export const FooterImg = styled.img`
  @media ${device.mobileS} {
    width: 200px;
    height: 69px;
  }
`;
export const FooterSpan = styled.span<{ top?: string }>`
  @media ${device.mobileS} {
    width: 248px;
    color: #ffffff;
    font-size: 14px;
    margin-top: ${({ top }) => top || '0'};
    text-align: center;
  }
`;
