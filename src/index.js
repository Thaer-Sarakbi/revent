import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'
import rootReducer from './app/reducers/rootReducer';
import { Provider } from 'react-redux'
import ScrollToTop from './app/common/util/scrollToTop'

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

const rootEl = document.getElementById('root')
const store = createStore(rootReducer)

let render = () => {
  ReactDOM.render(
    <BrowserRouter>
     <Provider store={store}>
      <ScrollToTop>
       <App />
      </ScrollToTop>
     </Provider>
    </BrowserRouter>, rootEl)
}
render()

serviceWorker.unregister();