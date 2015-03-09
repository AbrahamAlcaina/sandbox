import React from 'react';
import SearchboxHeader from './searchboxheader.jsx';
var Header = React.createClass({

  render() {
    return (      
        <div className="navbar navbar-default navbar-fixed-top yamm" role="navigation" id="navbar">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand home" href="/">
                        <img src="images/logo.png" height="51" width="160" alt="Traze.es" className="hidden-xs hidden-sm" />
                        <img src="images/logo-small.png" height="51" width="50" alt="Traze.es" className="visible-xs visible-sm" />
                        <span className="sr-only">Traze</span>
                    </a>
                </div>
            </div>
            <SearchboxHeader />
        </div>      
    );
  }

});

module.exports = Header;