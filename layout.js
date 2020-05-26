import React from 'react';
import { css } from '@emotion/core'

const slideLayoutStyle = css`
  h1,h2,h3,h4,h5,h6 {
    margin-block-start: 0;
    margin-block-end: 32px;
  }

  h4,h5,h6 {
    color: #ffffff;
  }
`;

const surferLayoutStyle = css`
  margin: -2em;
`;

export const SlideLayout = ({ children }) => (
  <div css={slideLayoutStyle}>
    {children}
  </div>
)

export const SurferLayout = ({ children }) => (
  <div css={surferLayoutStyle}>
    {children}
  </div>
)
