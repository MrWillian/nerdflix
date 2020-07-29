import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: #000;
  }

  #root {
    min-height: calc(100vh - var(--bodyPaddingTop));
    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
  }

  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
  }

  @media (max-width: 800px) {
    body {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    }
  }
  
  :root {
    --accent: #ffa500;

    --primary: #091747;
    --secondary: #192775;
    --tertiary: #4A53BD;

    --black: #000;
    --blackLighter: #9E9E9E;
    --grayLight: #F5F5F5;
    --grayMedium: #e5e5e5; 
    --white: #FFFFFF;

    --frontEnd: #6BD1FF;
    --backEnd: #00C86F;
  }
`;
