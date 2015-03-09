'use strict';

import React from 'react';

var SearchboxHeader = React.createClass({
	render(){
		return (
    		<form className="navbar-form navbar-left navbar-input-group visible-xs visible-sm">
            	<div className="form-group">
                	<input type="text" className="form-control"/>
            	</div>
            	<button type="submit" className="btn btn-default">
            		<i className="fa fa-search"></i>
            	</button>
        	</form>
			);
	}
});

module.exports = SearchboxHeader;