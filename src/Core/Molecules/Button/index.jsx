import React from 'react';
import cn from 'classnames';
import s from './index.styl';

const Button = ({ children, className, ...props }) => (
  <button className={cn(s.root, className)} {...props}>
    {children}
  </button>
);

export { Button }
