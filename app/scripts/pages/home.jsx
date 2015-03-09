import React from 'react';
import ItemList from '../components/itemList.jsx';
import SearchBoxBody from '../components/searchBoxBody.jsx';

var Home = React.createClass({

  render() {
    return (
      <div>
      	<SearchBoxBody/>
        <ItemList />
      </div>
    );
  }

});

module.exports = Home;