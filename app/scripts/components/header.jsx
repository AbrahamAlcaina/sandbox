import React from 'react';
import SearchboxHeader from './searchboxheader.jsx';
import Logo from './Logo.jsx';

var Header = React.createClass({

  render() {
    return (      
        <div className="navbar navbar-default navbar-fixed-top yamm" role="navigation" id="navbar">
            <div className="container">
                <div className="navbar-header">
                    <Logo />
                </div>
            </div>
            <SearchboxHeader />
        </div>      
    );
  }

});

module.exports = Header;