'use strict';

import React from 'react';
import ItemStore from '../stores/itemStore';

const ItemList = React.createClass({

  getInitialState() {
    return {
      items : [],
      loading : false,
      error : false
    };
  },

  componentDidMount() {
    this.unsubscribe = ItemStore.listen(this.onStatusChange);    
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  onStatusChange(state) {
    this.setState(state);
  },

  render() {
    var items = this.state.items.map((item, itemIndex) => <li key={ item }>{ item }</li>),
      loading = this.state.loading ? <div>Loading...</div> : '';

    return (
      <div>
        { loading }
        <ul>
          {items}
        </ul>
      </div>
    );
  }                       
});

export default ItemList;