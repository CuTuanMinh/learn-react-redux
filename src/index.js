import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import TrackList from '../src/components/TrackList';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import allReducers from '../src/reducers/index';
import {Provider} from 'react-redux';

const store = createStore(allReducers);

const tracks = [
  {
    id: 1,
    title: 'Em của ngày hôm qua'
  },
  {
    id: 2,
    title: 'Cơn mưa ngang qua'
  },
  {
    id: 3,
    title: 'Người âm phủ'
  }
]
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
ReactDOM.render(<TrackList tracks={tracks}/>, document.getElementById('root2'));
registerServiceWorker();
