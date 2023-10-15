import React from 'react';
import {
  CaseBoxName,
  CaseLink,
  CaseLinkNotAbsolute,
  CasesBoxImg,
  CasesBoxText,
  CasesBoxTitle,
  CasesBoxWrapper,
  CasesFlexWrapper,
  CasesWrapper,
} from 'src/Main/Cases/Cases.styled';
import building from '../../assets/cases/building.png';
import women from '../../assets/cases/women.png';
import boxes from '../../assets/cases/boxes.png';
import hands from '../../assets/cases/hands.png';
interface caseDataType {
  id: number;
  img: string;
  box: string;
  text: string;
}
const caseData: caseDataType[] = [
  {
    id: 1,
    img: building,
    box: 'Взыскание неустойки',
    text: 'Юристы Бюро помогли взыскать неустойку собанкротившегося застройщика',
  },
  {
    id: 2,
    img: women,
    box: 'Защита прав потребителя',
    text: 'Юристы Бюро помогли в борьбе с недобросовестными "коллегами"',
  },
  {
    id: 3,
    img: boxes,
    box: 'Возврат денежных средств',
    text: 'Юристы Бюро помогли вернуть средства за непоставленный товар',
  },
  {
    id: 4,
    img: hands,
    box: 'Пенсионное право',
    text: 'Юристы Бюро помогли в борьбе с пенсионным фондом',
  },
];

export const Cases = () => {
  return (
    <CasesWrapper>
      <CasesBoxTitle>Кейсы “Атланта”</CasesBoxTitle>
      <CaseLinkNotAbsolute decor={'underline'} to='*'>
        Перейти к другим кейсам →
      </CaseLinkNotAbsolute>
      <CasesFlexWrapper>
        {caseData.map((item) => (
          <CasesBoxWrapper key={item.id}>
            <CasesBoxImg src={item.img} />
            <CaseBoxName>{item.box}</CaseBoxName>
            <CasesBoxText>{item.text}</CasesBoxText>
            <CaseLink to='*'>Подробнее</CaseLink>
          </CasesBoxWrapper>
        ))}
      </CasesFlexWrapper>
    </CasesWrapper>
  );
};
