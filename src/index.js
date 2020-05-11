import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//스토어 생성 및 리덕스 적용
import {createStore} from 'redux'
import rootReducer from './modules'

//Provider로 App 컴포넌트를 감싸서 컴포넌트에서 스토어를 사용
import {Provider} from 'react-redux'

//redux dev tool 적용
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools())

//store를 props로 전달
ReactDOM.render(
  <Provider store = {store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
