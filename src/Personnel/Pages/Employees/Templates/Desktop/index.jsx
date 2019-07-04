import React from 'react';
import s from './index.styl';

import { Molecules, Widgets } from '../../../../../Core';
import { EmployeesList, EmployeeEdit } from '../../../../Organisms';

const Desktop = ({ actions, employees, editorShow, form }) => (
  <div className={s.root}>
    <div className={s.controls}>
      <Molecules.Button onClick={() => actions.editorSwitch(true)}>Добавить</Molecules.Button>
    </div>
    <EmployeesList {...{ employees }}/>
    <Widgets.Modal show={editorShow} onClose={() => actions.editorSwitch(false)}>
      <EmployeeEdit {...{ actions, form, mode: 'create' }}/>
    </Widgets.Modal>
  </div>
);

export { Desktop }
