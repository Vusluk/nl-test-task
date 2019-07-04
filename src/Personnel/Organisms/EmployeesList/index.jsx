import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import s from './index.styl';

const Row = ({ id, nameFirst, nameLast, position }) => (
  <Link to={`/${id}`} className={cn(s.row, s.item)}>
    <span>{nameFirst}</span>
    <span>{nameLast}</span>
    <span>{position}</span>
  </Link>
);

const EmployeesList = ({ employees }) => (
  <div className={s.root}>
    <div className={cn(s.row, s.header)}>
      <span>Имя</span>
      <span>Фамилия</span>
      <span>Должность</span>      
    </div>
    {employees.map(employee => (<Row key={`EMPLOYEES_LIST_ROW_${employee.id}`} {...employee}/>))}
  </div>
);

export { EmployeesList }
