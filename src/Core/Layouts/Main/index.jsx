import React from 'react';
import s from './index.styl';

import { Header, Footer } from '../../Organisms';

const Main = ({ children }) => (
  <div className={s.root}>
    <Header/>
    {children}
    <Footer/>
  </div>
);

export { Main }
