import React from 'react';

var Header = React.createClass({

  render() {
    return (
      <header className="clearfix">
          <div class="navbar navbar-default navbar-fixed-top yamm" role="navigation" id="navbar">
              <div class="container">
                  <div class="navbar-header">
                      <a class="navbar-brand home" href="/">
                          <img src="images/logo.png" height="51" width="160" alt="Traze.es" class="hidden-xs hidden-sm" />
                          <img src="images/logo-small.png" height="51" width="50" alt="Traze.es" class="visible-xs visible-sm" />
                          <span class="sr-only">Traze</span>
                      </a>
                  </div>
              </div>
          </div>
      </header>
    );
  }

});

module.exports = Header;