import React from 'react';
import {
  ReviewsBoxImg,
  ReviewsBoxText,
  ReviewsBoxTitle,
  ReviewsBoxWrapper,
  ReviewsFlexWrapper,
  ReviewsLink,
  ReviewsWrapper,
} from 'src/Main/Reviews/Reviews.styled';
import anna from '../../assets/reviews/Anna.png';
import irina from '../../assets/reviews/Irina.png';
import victory from '../../assets/reviews/Victory.png';

interface reviewsDataType {
  id: number;
  img: string;
  name: string;
  text: string;
}

const reviewsData: reviewsDataType[] = [
  {
    id: 1,
    img: anna,
    name: 'Анна',
    text: 'Обратившись с очень сложным делом в Атлант, в короткий срок получила квалифицированную помощь юриста. Очень благодарна Сабине и Исламу за оказанную всестороннюю помощь в деле. Сотрудники Атлант с большим терпением и ответственно отнеслись к нашему делу. Моя безмерная благодарность и пожелания успеха компании в дальнейших делах.',
  },
  {
    id: 2,
    img: irina,
    name: 'Ирина',
    text: 'Отличная юридическая компания! Созвонились, назначили встречу, все четко и по делу. Большой респект и благодарность Сабине, на все вопросы ответила подробно и доходчиво, теперь знаем, что делать. 100% рекомендация. Успехов вам "Атлант" и процветания !',
  },
  {
    id: 3,
    img: victory,
    name: 'Виктория',
    text: 'От всего сердца хочу поблагодарить юристов компании за их грамотную и профессиональную работу. За их поддержку на каждом этапе. У меня была очень сложная ситуация: фактически мы с ребенком и матерью-инвалидом оставались на улице. Сотрудники “Атланта” не только помогли, но и чисто почеловечески поддержали нас в этот тяжелый период. Большое спасибо вам.',
  },
];

export const Reviews = () => {
  return (
    <ReviewsWrapper>
      <ReviewsBoxTitle>Отзывы о нашей работе</ReviewsBoxTitle>
      <ReviewsFlexWrapper>
        {reviewsData.map((item) => (
          <ReviewsBoxWrapper key={item.id}>
            <ReviewsFlexWrapper direction={'row'}>
              <ReviewsBoxImg src={item.img} />
              <ReviewsBoxTitle>{item.name}</ReviewsBoxTitle>
            </ReviewsFlexWrapper>
            <ReviewsBoxText>{item.text}</ReviewsBoxText>
          </ReviewsBoxWrapper>
        ))}
      </ReviewsFlexWrapper>
      <ReviewsLink to='*' decor='underline'>
        Больше отзывов в 2ГИС и Яндекс →
      </ReviewsLink>
    </ReviewsWrapper>
  );
};
