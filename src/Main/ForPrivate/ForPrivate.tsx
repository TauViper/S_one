import React from 'react';
import {
  ForPrivateImg,
  ForPrivateText,
  ForPrivateTitle,
  ForPrivateWrapper,
} from 'src/Main/ForPrivate/ForPrivate.styled';
import man from '../../assets/forprivate/ForPrivate.svg';
import { HeaderButton } from 'src/Header/Header.styled';

export const ForPrivate = () => {
  return (
    <ForPrivateWrapper>
      <ForPrivateImg src={man} />
      <ForPrivateTitle>Для физических лиц</ForPrivateTitle>
      <ForPrivateText>
        Семейные, жилищные, автомобильные, наследственные, трудовые споры, долги
        и судебные приставы, защита прав потребителей
      </ForPrivateText>
      <HeaderButton left='15px' width='187px' height='37px'>
        Перейти к услугам
      </HeaderButton>
    </ForPrivateWrapper>
  );
};
