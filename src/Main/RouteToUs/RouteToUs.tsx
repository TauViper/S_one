import React from 'react';
import {
  IframeRouteToUs,
  RouteToUsBoxImg,
  RouteToUsBoxTitle,
  RouteToUsWrapper,
} from 'src/Main/RouteToUs/RouteToUs.styled';
import play from '../../assets/routeToUs/Next.svg';

export const RouteToUs = () => {
  return (
    <RouteToUsWrapper>
      <RouteToUsBoxTitle>
        Посмотрите об удобном маршруте до нас
      </RouteToUsBoxTitle>
      <IframeRouteToUs>
        <RouteToUsBoxImg src={play} />
      </IframeRouteToUs>
    </RouteToUsWrapper>
  );
};
