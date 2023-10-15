import React from 'react';
import {
  FormText,
  FormTitle,
  FormWrapper,
  FormBoxWrapper,
  FormInput,
  FormTextArea,
  FormLink,
} from 'src/Main/Form/Form.styled';
import { HeaderButton } from 'src/Header/Header.styled';

export const Form = () => {
  return (
    <FormWrapper>
      <FormTitle left='0' top='0'>
        Не нашли ответ на вопрос?
      </FormTitle>
      <FormText>
        Задайте его в форме ниже и получите консультацию бесплатно.
      </FormText>
      <FormBoxWrapper>
        <FormInput placeholder={'Как к вам обращаться?'} />
        <FormInput placeholder={'+7 999 999 9999'} />
        <FormTextArea />
        <HeaderButton left='5px' width='187px' height='37px'>
          Получить консультацию
        </HeaderButton>
      </FormBoxWrapper>
      <FormText>
        Данные передаются в зашифрованном виде <br />
        <FormLink to='*' decor='underline'>
          политика конфиденциальности
        </FormLink>
      </FormText>
    </FormWrapper>
  );
};
