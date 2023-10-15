import React from 'react';
import blank from '../../assets/accomp/Blank.svg';
import findBlank from '../../assets/accomp/FindBlank.svg';
import findJudge from '../../assets/accomp/Judge.svg';
import collaborate from '../../assets/accomp/Collaborate.svg';
import {
  AccompanimentBlankImg,
  AccompanimentBlanks,
  AccompanimentBlankSpan,
  AccompanimentBlankWrapper,
  AccompanimentWrapper,
} from 'src/Main/Accompaniment/Accompaniment.styled';

const data: { id: number; img: string; text: string }[] = [
  {
    id: 1,
    img: blank,
    text: 'Подготовка документов',
  },
  {
    id: 2,
    img: findBlank,
    text: 'Досудебное разрешение споров',
  },
  {
    id: 3,
    img: collaborate,
    text: 'Консультации',
  },
  {
    id: 4,
    img: findJudge,
    text: 'Судебный процесс',
  },
];
export const Accompaniment = () => {
  return (
    <AccompanimentWrapper>
      <AccompanimentBlankWrapper>
        {data.map((item) => (
          <AccompanimentBlanks key={item.id}>
            <AccompanimentBlankImg src={item.img} />
            <AccompanimentBlankSpan>{item.text}</AccompanimentBlankSpan>
          </AccompanimentBlanks>
        ))}
      </AccompanimentBlankWrapper>
    </AccompanimentWrapper>
  );
};
