import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import { Home } from '../Home/Home';

import 'antd/dist/antd.css'

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Home} />
    </div>
  );
}

export default App;
