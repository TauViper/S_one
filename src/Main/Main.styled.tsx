import styled from 'styled-components';
import { device } from 'src/Global.styled';

export const MainStyled = styled.main`
  @media ${device.mobileS} {
    align-items: center;
    max-width: 320px;
    margin: auto;
  }
`;
