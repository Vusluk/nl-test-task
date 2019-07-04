import * as api from '../api';
import {
  EMPLOYEES_LOADED, EMPLOYEE_ADD, EMPLOYEE_CHANGE,
  FORM_FIELD_CHANGE, FORM_FIELD_VALIDATE, FORM_RESET,
  EDITOR_SWITCH,
} from './actionTypes';

const normalizeForm = (form = {}) => Object.entries(form)
  .reduce((acc, [key, val]) => ({ ...acc, [key]: val.value }), {});

export const init = () => dispatch => {
  dispatch(employeesLoad());
};


export const employeesLoad = () => dispatch => {
  api.get('/employees').then(res => dispatch(employeesLoaded(res)));
};

export const employeeCreate = () => (dispatch, getState) => {
  const employee = normalizeForm(getState().personnel.form);
  api.post('/employee', employee).then(res => {
    if (res.error) {
      console.warn('PERSONNEL MODULE => ACTIONS => employeeCreate: ', res.error);
    } else {
      dispatch(editorSwitch(false));
      dispatch(employeeAdd(res));
      dispatch(formReset());
    }
  });
};

export const employeeEdit = (id) => (dispatch, getState) => {
  const employee = normalizeForm(getState().personnel.form);
  api.patch('/employee', { ...employee, id }).then(res => {
    if (res.error) {
      console.warn('PERSONNEL MODULE => ACTIONS => employeeEdit: ', res.error);
    } else {
      dispatch(editorSwitch(false));
      dispatch(employeeChange(res));
      dispatch(formReset());
    }
  });
};

export const employeesLoaded = (employees = []) => ({
  type: EMPLOYEES_LOADED,
  employees,
});

export const employeeAdd = (employee = {}) => ({
  type: EMPLOYEE_ADD,
  employee,
});

export const employeeChange = (employee = {}) => ({
  type: EMPLOYEE_CHANGE,
  employee,
});

export const formFieldChange = (field, value) => ({
  type: FORM_FIELD_CHANGE,
  field,
  value,
});

export const formFieldValidate = field => ({
  type: FORM_FIELD_VALIDATE,
  field,
});

export const formReset = () => ({
  type: FORM_RESET,
});


export const editorSwitch = status => ({
  type: EDITOR_SWITCH,
  status,
});
