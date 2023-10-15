import React from 'react';
import {
  TeamBoxImg,
  TeamBoxText,
  TeamBoxTitle,
  TeamBoxWrapper,
  TeamFlexWrapper,
  TeamLink,
  TeamWrapper,
} from 'src/Main/Team/Team.styled';
import yuliya from '../../assets/team/Yuliya.png';
import peter from '../../assets/team/Peter.png';
import irina from '../../assets/team/Irina.png';
import aleksey from '../../assets/team/Aleksey.png';
interface teamDataType {
  id: number;
  img: string;
  name: string;
  text: string;
}
const teamData: teamDataType[] = [
  {
    id: 1,
    img: yuliya,
    name: 'Юлия Васильева',
    text: 'Руководитель практики банкротства',
  },
  {
    id: 2,
    img: peter,
    name: 'Петр Симутин',
    text: 'Главный юристконсульт',
  },
  {
    id: 3,
    img: irina,
    name: 'Ирина Кузьмина',
    text: 'Старший юрист',
  },
  {
    id: 4,
    img: aleksey,
    name: 'Алексей Воронин',
    text: 'Юрист',
  },
];

export const Team = () => {
  return (
    <TeamWrapper>
      <TeamBoxTitle>Команда</TeamBoxTitle>
      <TeamLink to='*'>Узнать больше о наших специалистах →</TeamLink>
      <TeamFlexWrapper>
        {teamData.map((item) => (
          <TeamBoxWrapper key={item.id}>
            <TeamBoxImg src={item.img} />
            <TeamBoxTitle top='0' left='0'>
              {item.name}
            </TeamBoxTitle>
            <TeamBoxText>{item.text}</TeamBoxText>
          </TeamBoxWrapper>
        ))}
      </TeamFlexWrapper>
    </TeamWrapper>
  );
};
