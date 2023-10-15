import React from 'react';
import {
  ContactsBoxImg,
  ContactsBoxTitle,
  ContactsFlexWrapper,
  ContactsLink,
  ContactsWrapper,
} from 'src/Main/Contacts/Contacts.styled';
import clock from '../../assets/contacts/Clock.svg';
import phone from '../../assets/contacts/Phone.svg';
import mail from '../../assets/contacts/Mail.svg';
import point from '../../assets/contacts/Point.svg';

interface contactsDataType {
  id: number;
  img: string;
  to: string;
  link: string;
}
const contactsData: contactsDataType[] = [
  {
    id: 1,
    img: clock,
    to: 'time',
    link: '9:00 - 22:00',
  },
  {
    id: 2,
    img: phone,
    to: 'tel:+7 812 509-22-73',
    link: '+7 812 509-22-73',
  },
  {
    id: 3,
    img: mail,
    to: 'info@atlant-zakon.ru',
    link: 'info@atlant-zakon.ru',
  },
  {
    id: 4,
    img: point,
    to: 'https://www.google.com/maps/place/%D0%AE%D1%80%D0%B8%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5+%D0%B1%D1%8E%D1%80%D0%BE+%D0%90%D0%A2%D0%9B%D0%90%D0%9D%D0%A2/@59.930325,30.367227,15z/data=!4m14!1m7!3m6!1s0x469631bb84be07ad:0x3ac169fe85946e6e!2z0K7RgNC40LTQuNGH0LXRgdC60L7QtSDQsdGO0YDQviDQkNCi0JvQkNCd0KI!8m2!3d59.930325!4d30.367227!16s%2Fg%2F11nx000sk5!3m5!1s0x469631bb84be07ad:0x3ac169fe85946e6e!8m2!3d59.930325!4d30.367227!16s%2Fg%2F11nx000sk5?entry=ttu',
    link: 'Санкт-Петербург\n' + 'Невский проспект 132Б,\n' + 'оф. 64',
  },
];

export const Contacts = () => {
  return (
    <ContactsWrapper>
      <ContactsBoxTitle>Звоните и приезжайте к нам</ContactsBoxTitle>
      {contactsData.map((item) => (
        <ContactsFlexWrapper key={item.id}>
          <ContactsBoxImg src={item.img} />
          <ContactsLink to={item.to}>{item.link}</ContactsLink>
        </ContactsFlexWrapper>
      ))}
    </ContactsWrapper>
  );
};
