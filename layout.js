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

  padding: 3rem;
`;

const surferLayoutStyle = css`
  margin: -2em;
`;

export const SlideLayout = ({ children, style }) => (
  <div css={slideLayoutStyle} style={style}>
    {children}
  </div>
)

export const SurferLayout = ({ children, style }) => (
  <div css={surferLayoutStyle} style={style}>
    {children}
  </div>
)
