import React from 'react';

import {
  ImageTitle,
  TitleButton,
  TitleSpan,
  TitleText,
  TitleWrapper,
} from 'src/Main/Title/TitleSection.styled';
export const TitleSection = () => {
  return (
    <TitleWrapper>
      <ImageTitle />
      <TitleText>Юридическая помощь в Санкт-Петербурге и ЛО</TitleText>
      <TitleSpan>Бесплатная консультация по телефону или в чате</TitleSpan>
      <TitleButton>Получить консультацию</TitleButton>
    </TitleWrapper>
  );
};
