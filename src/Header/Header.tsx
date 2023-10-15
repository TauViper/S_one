import React from 'react';
import {
  HeaderButton,
  HeaderStyled,
  Image,
  Span,
  SpansWrapper,
} from 'src/Header/Header.styled';

import Logo from 'src/assets/Logo.svg';

export const Header = () => {
  return (
    <HeaderStyled>
      <Image src={Logo} />
      <SpansWrapper>
        <HeaderButton>
          <Span size={'35px'}>☰</Span>
        </HeaderButton>
      </SpansWrapper>
    </HeaderStyled>
  );
};
