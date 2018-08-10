import React from 'react';
import ReactDOM from 'react-dom';
// Router
import { Router, Route, BrowserRouter, IndexRoute } from 'react-router-dom';
// Container Components
import { App } from 'containers';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import { ParallaxProvider } from 'react-scroll-parallax';

const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <ParallaxProvider>
      <BrowserRouter>
        <Route path="/" component={App}/>
      </BrowserRouter>
    </ParallaxProvider>
  </Provider>, rootElement
);
