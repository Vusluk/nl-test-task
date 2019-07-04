import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import s from './index.styl';

import { Molecules, Widgets } from '../../../../../Core';
import { EmployeeEdit } from '../../../../Organisms';

const NotFound = () => (
  <div className={cn(s.block, s.notFound)}>Упс. Такого сотрудника у нас нет:( Попробуйте поискать в списке</div>
);

class Desktop extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }
  
  onModalOpen() {
    const { nameFirst, nameLast, position, description } = this.props.employee;
    this.props.actions.formFieldChange('nameFirst', nameFirst);
    this.props.actions.formFieldChange('nameLast', nameLast);
    this.props.actions.formFieldChange('position', position);
    this.props.actions.formFieldChange('description', description);
    this.props.actions.editorSwitch(true);
  }
  
  onModalClose() {
    this.props.actions.editorSwitch(false);
    this.props.actions.formReset();
  }
  
  render() {
    const { actions, employee = {}, editorShow, form } = this.props;
    
    if (!employee) return (<NotFound />);
    
    const { id, nameFirst, nameLast, position, description } = employee;
    
    return (
      <section className={s.root}>
        <div className={s.controls}>
          <Link to='/'><Molecules.Button>К списку</Molecules.Button></Link>
          <Molecules.Button onClick={this.onModalOpen}>Редактировать</Molecules.Button>
        </div>
        <div className={s.content}>
          <div className={s.left}>
            <div className={cn(s.block)}>{nameFirst}</div>
            <div className={cn(s.block)}>{nameLast}</div>
            <div className={cn(s.block)}>{position}</div>        
          </div>
          <div className={s.right}>
            <div className={cn(s.block, s.description)}>{description}</div>
          </div>
        </div>
        <Widgets.Modal show={editorShow} onClose={this.onModalClose}>
          <EmployeeEdit {...{ actions, form, mode: 'edit', id }}/>
        </Widgets.Modal>
      </section>
    );
  }
}
  
export { Desktop }
