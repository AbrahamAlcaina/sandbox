'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../components/header.jsx';

const App = React.createClass({  
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <RouteHandler/>
        </div>
      </div>
    );
  }  
});

export default App;