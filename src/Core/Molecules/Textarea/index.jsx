import React from 'react';
import cn from 'classnames';
import s from './index.styl';

const Textarea = ({ field: { value = '', error }, placeholder, onChange, className }) => {
  const placeholderStyle = value ? { top: '-6px', left: '4px', fontSize: '12px', backgroundColor: 'white' } : {};
  return (
    <div className={cn(s.root, className)}>
      {placeholder ? <div style={placeholderStyle} className={s.placeholder}>{placeholder}</div> : null}
      <textarea {...{
        value,
        onChange: (e) => onChange(e.target.value),
        className: s.textarea,
      }}/>
    </div>
  );
};

export { Textarea }
