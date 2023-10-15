import React from 'react';
import {
  TrustBoxImg,
  TrustBoxText,
  TrustBoxTitle,
  TrustBoxWrapper,
  TrustFlexWrapper,
  TrustInBoxTitle,
  TrustWrapper,
} from 'src/Main/Trust/Trust.styled';
import emblem from '../../assets/trust/Emblem.svg';
import man from '../../assets/trust/Man.svg';
import fingerUp from '../../assets/trust/FingerUp.svg';
interface TrustDataType {
  id: number;
  img: string;
  title: string;
  text: string;
}
const trustData: TrustDataType[] = [
  {
    id: 1,
    img: emblem,
    title: 'Full service',
    text: 'Наличие специалистов разных областей позволяет разрешать любые ситуации',
  },
  {
    id: 2,
    img: man,
    title: 'Люди',
    text: 'Мы работаем с профессионалами с высокой экспертизой',
  },
  {
    id: 3,
    img: fingerUp,
    title: 'Рекомендации',
    text: 'Большинство клиентов рекомендует нас друзьям. Это лучшая оценка нашей работы',
  },
];
export const Trust = () => {
  return (
    <TrustWrapper>
      <TrustBoxTitle>
        Нам доверились более <br />2 000 тысяч клиентов
      </TrustBoxTitle>
      <TrustFlexWrapper>
        {trustData.map((item) => (
          <TrustBoxWrapper key={item.id}>
            <TrustBoxImg src={item.img} />
            <TrustInBoxTitle>{item.title}</TrustInBoxTitle>
            <TrustBoxText>{item.text}</TrustBoxText>
          </TrustBoxWrapper>
        ))}
      </TrustFlexWrapper>
    </TrustWrapper>
  );
};
