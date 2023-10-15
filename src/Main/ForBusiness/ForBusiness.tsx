import React from 'react';
import {
  ForBusinessImg,
  ForBusinessText,
  ForBusinessTitle,
  ForBusinessWrapper,
} from 'src/Main/ForBusiness/ForBusiness.styled';
import bag from '../../assets/forbusiness/bag.svg';
import { HeaderButton } from 'src/Header/Header.styled';

export const ForBusiness = () => {
  return (
    <ForBusinessWrapper>
      <ForBusinessImg src={bag} />
      <ForBusinessTitle>Для бизнеса</ForBusinessTitle>
      <ForBusinessText>
        Судебная защита, корпоративные споры, споры с государственными органами
      </ForBusinessText>
      <HeaderButton left='15px' width='187px' height='37px'>
        Перейти к услугам
      </HeaderButton>
    </ForBusinessWrapper>
  );
};
