import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
    }
    `;
const size = {
  mobileS: '320px',
  mobileL: '580px',
  tablet: '768px',
  laptop: '1024px',
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};
