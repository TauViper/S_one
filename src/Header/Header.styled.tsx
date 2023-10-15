import styled from 'styled-components';
import { device } from 'src/Global.styled';
import { NavLink } from 'react-router-dom';

interface StyledSpanProps {
  upperStyle?: string;
  size?: string;
  marginLeft?: string;
}
interface StyledButtonProps {
  width?: string;
  height?: string;
  left?: string;
}
export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${device.mobileS} {
    max-width: 320px;
    height: 60px;
    margin: auto;
  }
`;
export const Image = styled.img`
  @media ${device.mobileS} {
    width: 158px;
    height: 60px;
    padding: 10px 10px;
  }
`;
export const SpansWrapper = styled.div`
  flex-direction: row;
  @media ${device.mobileS} {
    //margin-left: 1px;
    display: flex;
  }
`;
export const Span = styled.span<StyledSpanProps>`
  @media ${device.mobileS} {
    margin-left: ${({ marginLeft }) => marginLeft};
    text-transform: ${({ upperStyle }) => upperStyle || 'uppercase'};
    font-size: ${({ size }) => size || '12px'};
    text-decoration: none;
  }
`;
export const LinkElem = styled(NavLink)`
  text-decoration: none;
`;
export const HeaderButton = styled.button<StyledButtonProps>`
  border: none;
  background-color: #0024ff;
  @media ${device.mobileS} {
    width: ${({ width }) => width || '160px'};
    height: ${({ height }) => height || '60px'};
    color: white;
    font-size: 12px;
    text-align: center;
    padding: 0 4px;
    margin-left: ${({ left }) => left || '0'};
  }
`;
