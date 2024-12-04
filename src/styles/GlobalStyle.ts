import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  body {
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Open Sans',
      'Helvetica Neue';
    font-size: 16px;
    height: 100dvh;
    margin: 0 auto;
    min-height: calc(100dvh - 106px);
    /* padding: 46px 0px 56px 0px; */

    // 터치 동작 최적화
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    // 스크롤 부드럽게
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    @media (min-width: 768px) {
      // 태블릿
      max-width: 768px;
      /* padding: 46px 0px 56px 0px; */
    }

    @media (min-width: 1024px) {
      // 데스크탑
      max-width: 1024px;
      /* padding: 46px 0px 56px 0px; */
    }
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  input,
  textarea {
    -webkit-appearance: none;
    appearance: none;
  }
`;
