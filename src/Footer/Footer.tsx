import React from 'react';
import { FooterImg, FooterSpan, StyledFooter } from 'src/Footer/Footer.styled';
import footerLogo from '../assets/footer/FooterLogo.png';
export const Footer = () => {
  return (
    <StyledFooter>
      <FooterImg src={footerLogo} />
      <FooterSpan top={'25px'}>Юридическое бюро Атлант 2016-2021</FooterSpan>
      <FooterSpan>© All Rights Reserved.</FooterSpan>
    </StyledFooter>
  );
};
