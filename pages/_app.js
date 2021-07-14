import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @keyframes voltaCor {
    0% {
      filter: grayscale(80%) sepia(15%) brightness(95%);
    }
    100% {
      filter: none;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    animation: 1.25s voltaCor;
  }

  body {
    background-color: #d9e6f6;
    font-family: sans-serif;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
