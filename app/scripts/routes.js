import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Product from './pages/product.jsx';
import NotFound from './pages/notFound.jsx';

const routes = (
  <Route name="app" path="/" handler={ App }>
    <Route name="product" handler={ Product } />
    <Route name="home" handler={ Home } />
    <DefaultRoute handler={ Home } />
    <NotFoundRoute handler={ NotFound } />
  </Route>
);

module.exports =  routes;