'use strict';

import React from 'react';
import ItemList from '../components/itemList.jsx';
import SearchBoxBody from '../components/searchBoxBody.jsx';

const Home = React.createClass({
  render() {
    return (
      <div className="body">
      	<SearchBoxBody/>
        <ItemList />
      </div>
    );
  }
});

export default Home;