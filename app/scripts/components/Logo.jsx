'use strict';

import React from 'react';
import {addons} from 'react/addons';

const Logo = React.createClass({
	mixins: [addons.PureRenderMixin],
	render(){
		return (
                <a className="navbar-brand home" href="/">
                    <img src="images/logo.png" height="51" width="160" alt="Traze.es" className="hidden-xs hidden-sm" />
                    <img src="images/logo-small.png" height="51" width="50" alt="Traze.es" className="visible-xs visible-sm" />
                    <span className="sr-only">Traze</span>
                </a>
			);
	}
});

export default Logo;