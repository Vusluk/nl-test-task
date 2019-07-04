import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { Layouts } from './Core';
import { Pages as Personnel } from './Personnel';

export default ({ history }) => (
  <ConnectedRouter history={history}>
    <Layouts.Main>
      <Switch>
        <Route path="/" exact component={Personnel.Employees} />
        <Route path="/:employeeId" component={Personnel.Employee} />
      </Switch>
    </Layouts.Main>
  </ConnectedRouter>
);
