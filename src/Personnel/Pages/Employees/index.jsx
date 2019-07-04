import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import * as Templates from './Templates';

const mapState = (state, ownProps) => ({
  employees: Object.values(state.personnel.employees),
  form: state.personnel.form,
  editorShow: state.personnel.editorShow,
});

const mapDispatch = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch)
});

class Employees extends React.Component {
  componentDidMount() {
    this.props.actions.init();
  }

  render() {
    const { platform = 'desktop', ...props } = this.props;
    const Template = Templates[platform];
    return (<Template {...props} />);
  }
}

const Container = connect(
  mapState,
  mapDispatch,
)(Employees);

export { Container }
