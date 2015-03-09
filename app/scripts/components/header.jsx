import React from 'react';
import Logo from './Logo.jsx'
var Header = React.createClass({

  render() {
    return (      
        <div className="navbar navbar-default navbar-fixed-top yamm" role="navigation" id="navbar">
            <div className="container">
                <div className="navbar-header">
                    <Logo />
                </div>
            </div>
        </div>      
    );
  }

});

module.exports = Header;