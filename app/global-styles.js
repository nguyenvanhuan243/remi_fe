import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0 !important;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif !important;
    margin: 0 !important;
  }

  body.fontLoaded {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
  }

  #app {
    background-image: linear-gradient(to bottom, #ebeff2, #ebeff2 30%, #ebeff2);
    min-height: 100%;
    @media only screen and (max-width: 900px) {
      // width: 340px;
    }
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
