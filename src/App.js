import React,{memo} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {InitRouter} from './routers';

export default memo(function APP() {
  return (
    <Router>
      <InitRouter/>
    </Router>
  );
})
