import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Liquidity from './components/Liquidity';
import * as serviceWorker from './serviceWorker';
import { Route, Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {createBrowserHistory} from 'history';
const store = configureStore();
export const history = createBrowserHistory();

const routing = (
  <Provider store={store}>
    <Router history={history}>
      <div className="bg">
        <Route path="/" component={App} exact={true}/>
        <Route path="/liquidity" component={Liquidity} />
      </div>
    </Router>
  </Provider> 
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
