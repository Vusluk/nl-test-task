import * as validators from './validators';
import {
  EMPLOYEES_LOADED, EMPLOYEE_ADD, EMPLOYEE_CHANGE,
  FORM_FIELD_CHANGE, FORM_FIELD_VALIDATE, FORM_RESET,
  EDITOR_SWITCH,
} from './actionTypes';

const arrToMap = (arr, keyField = 'id') => {
  if (!arr[0][keyField]) {
    console.warn(`PERSONNEL_REDUCER_arrToMap: array elements doesn't contain '${keyField}' key`);
    return {};
  }
  return arr.reduce((acc, val) => ({ ...acc, [val[keyField]]: val }), {});
};

const initialState = {
  employees: {},
  employeeSelected: null,
  editorShow: false,
  form: {
    nameFirst: { value: '', type: 'name', valid: false },
    nameLast: { value: '', type: 'name', valid: false },
    position: { value: '', type: 'position', valid: false },
    description: { value: '', type: 'description', valid: false },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED:
      return {
        ...state,
        employees: arrToMap(action.employees),
      };

    case EMPLOYEE_ADD:
      return {
        ...state,
        employees: {
          ...state.employees,
          [action.employee.id]: action.employee,
        },
      };

    case EMPLOYEE_CHANGE:
      return {
        ...state,
        employees: {
          ...state.employees,
          [action.employee.id]: {
            ...state.employees[action.employee.id],
            ...action.employee,
          },
        },
      };

    case FORM_FIELD_CHANGE:
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: {
            ...state.form[action.field],
            value: action.value,
          },
        },
      };

    case FORM_FIELD_VALIDATE:
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: {
            ...state.form[action.field],
            valid: validators[state.form[action.field].type](state.form[action.field].value),
          },
        },
      };

    case FORM_RESET:
      return {
        ...state,
        form: initialState.form,
      };

    case EDITOR_SWITCH:
      return {
        ...state,
        editorShow: action.status,
      };


    default:
      return state;
  }
};
