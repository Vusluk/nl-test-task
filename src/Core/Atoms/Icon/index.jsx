import * as React from 'react';
import cn from 'classnames';

import { ICONS_TYPES, ICON_COMPS } from './constants';

import s from './index.styl';

const ICONS_TYPES_ARR = Object.values(ICONS_TYPES);

const Icon = ({ type, className, ...props }) => {
  if (!ICONS_TYPES_ARR.includes(type)) {
    console.warn('Wrong icon type. Must be one of ', ICONS_TYPES_ARR.join(', '));
    return null;
  };
  return (
    <div className={cn(s.root, className)}>{React.createElement(ICON_COMPS[type], props)}</div>
  );
};

export { Icon };
