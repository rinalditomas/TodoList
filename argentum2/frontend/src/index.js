import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,Route} from "react-router-dom";
import { Provider } from "react-redux";
import Main from './container/main'
import store from "./state/store";

ReactDOM.render(
  <React.StrictMode>
  <Provider store ={store}>
  <Router>
    <Route path='/' component={Main} />
  </Router>
  </Provider> 
  </React.StrictMode>
  , 

  document.getElementById('root')
);

