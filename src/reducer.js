import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as core } from './Core';
import { reducer as personnel } from './Personnel';

export default history => combineReducers({
  core,
  personnel,

  router: connectRouter(history),
});
