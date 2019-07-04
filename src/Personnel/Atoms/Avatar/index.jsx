import React from 'react';
import cn from 'classnames';
import s from './index.styl';

const Avatar = ({ src, className }) => {
  const rootStyle = src ? {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {
  };
  return (
    <div className={cn(s.root, className)} style={rootStyle}>
      <img className={s.avatarDefault} src='/avatar.png' alt='Avatar' />
    </div>
  );
};
export { Avatar }
