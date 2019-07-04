import React from 'react';
import s from './index.styl';

import { Molecules } from '../../../Core';

const EmployeeEdit = ({ mode = 'edit', id, form, actions }) => (
  <div className={s.root}>
    <h1 className={s.title}>{mode === 'edit' ? 'Редактировать сотрудника' : 'Создать сотрудника'}</h1>
    <div className={s.inputs}>
      <Molecules.Input {...{
        placeholder: 'Имя',
        field: form.nameFirst,
        onChange: (val) => actions.formFieldChange('nameFirst', val),
        className: s.input,
      }}/>
      <Molecules.Input {...{
        placeholder: 'Фамилия',
        field: form.nameLast,
        onChange: (val) => actions.formFieldChange('nameLast', val),
        className: s.input,
      }}/>
      <Molecules.Input {...{
        placeholder: 'Должность',
        field: form.position,
        onChange: (val) => actions.formFieldChange('position', val),
        className: s.input,
      }}/>
      <Molecules.Textarea {...{
        placeholder: 'Описание',
        field: form.description,
        onChange: (val) => actions.formFieldChange('description', val),
        className: s.textarea,
      }}/>
    </div>
    <Molecules.Button
      className={s.button}
      onClick={mode === 'edit' ? () => actions.employeeEdit(id) : () => actions.employeeCreate()}
    >
      {mode === 'edit' ? 'Сохранить' : 'Создать'}
    </Molecules.Button>
  </div>
);

export { EmployeeEdit }
