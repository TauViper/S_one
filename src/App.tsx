import React from 'react';
import { Header } from 'src/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { TitleSection } from 'src/Main/Title/TitleSection';
import { Main } from 'src/Main/Main';
import { Accompaniment } from 'src/Main/Accompaniment/Accompaniment';
import { ForBusiness } from 'src/Main/ForBusiness/ForBusiness';
import { ForPrivate } from 'src/Main/ForPrivate/ForPrivate';
import { Trust } from 'src/Main/Trust/Trust';
import { Cases } from 'src/Main/Cases/Cases';
import { Team } from 'src/Main/Team/Team';
import { Reviews } from 'src/Main/Reviews/Reviews';
import { Contacts } from 'src/Main/Contacts/Contacts';
import { Iframe } from 'src/Main/Iframe/Iframe';
import { RouteToUs } from 'src/Main/RouteToUs/RouteToUs';
import { Form } from 'src/Main/Form/Form';
import { Footer } from 'src/Footer/Footer';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <TitleSection />
        <Accompaniment />
        <ForBusiness />
        <ForPrivate />
        <Trust />
        <Cases />
        <Team />
        <Reviews />
        <Contacts />
        <Iframe />
        <RouteToUs />
        <Form />
      </Main>
      <Footer />
    </BrowserRouter>
  );
};
