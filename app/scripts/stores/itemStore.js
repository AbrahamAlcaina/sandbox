'use strict';

import Reflux from 'reflux';
import request from 'superagent';
import ItemActions from '../actions/itemActions';
import searchActions from '../actions/searchActions';

const ItemStore = Reflux.createStore({

    init() {
            this.items = [];
            this.listenTo(ItemActions.loadItems, this.loadItems);
            this.listenTo(ItemActions.loadItemsSuccess, this.loadItemsSuccess);
            this.listenTo(ItemActions.loadItemsError, this.loadItemsError);
            this.listenTo(searchActions.search, this.onSearch)
        },

        onSearch(query) {
            const url  = '//traze.es/api/search?text=' + query 
            request
                .get(url)
                .end((res)=>{
                    console.debug(res);
                    this.trigger({
                        items: res
                    });
                });
        }

});

export default ItemStore;
