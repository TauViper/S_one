import React from 'react';
import { IframeMap, IframeWrapper } from 'src/Main/Iframe/Iframe.styled';

export const Iframe = () => {
  return (
    <IframeWrapper>
      <IframeMap
        src='https://yandex.ru/map-widget/v1/?ll=30.367536%2C59.930545&mode=poi&poi%5Bpoint%5D=30.367476%2C59.930646&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D235685619050&z=20.26'
        width='320'
        height='320'
      />
    </IframeWrapper>
  );
};
