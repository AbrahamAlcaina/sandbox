import React from 'react';

const SearchboxBody = React.createClass( {
	render(){
		return (
		<div className="col-md-12">
		    <div className="row">
		        <div className="box text-center">
		            <div className="row">
		                <div className="col-sm-10 col-sm-offset-1">
		                    <form novalidate>
		                        <div className="input-group hidden-xs hidden-sm">
		                            <input type="text" className="input-lg form-control" />
		                            <span className="input-group-btn">
		                                <button type="submit" className="btn btn-default input-lg">
		                                	<i className="fa fa-search" value="Submit"></i>
		                                </button>
		                            </span>
		                        </div>
		                    </form>
		                    <h2 className="hidden-xs hidden-sm capitalize-initial">LEMA</h2>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		);
	}
});
module.exports = SearchboxBody;