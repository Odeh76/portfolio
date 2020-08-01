import {css} from 'styled-components';

const sizes = {
    desktopXL: 1440,
    desktopL: 1200,
    desktop: 1000,
    laptop: 768,
    tablet: 600,
    phoneL: 480,
    phone: 376,
    phoneS: 330,
  };
  
  export const media = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  }, {});

  export default media