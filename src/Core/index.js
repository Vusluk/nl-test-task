import reducer from './reducer';

import { Input, Textarea, Button } from './Molecules';
import { Icon } from './Atoms';
import * as Pages from './Pages';
import * as Layouts from './Layouts';
import * as Widgets from './Widgets';

const Atoms = { Icon };
const Molecules = { Input, Textarea, Button };

export {
  reducer,
  Layouts,
  Widgets,
  Pages,
  Molecules,
  Atoms,
};
