import React from 'react';

export default ({
  viewBox = '0 0 24 24',
}) => (
  <svg viewBox={viewBox}>
    <polygon points='3,2 9,2 9,22 3,22'/>
    <polygon points='15,2 21,2 21,22 15,22'/>
  </svg>
)
