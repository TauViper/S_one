import React, { ReactNode } from 'react';
import { MainStyled } from 'src/Main/Main.styled';

interface StyledProps {
  children?: ReactNode;
}
export const Main = ({ children }: StyledProps) => (
  <MainStyled>{children}</MainStyled>
);
