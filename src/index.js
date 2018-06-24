import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CommentsBlock from './comments-components/comments-block';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CommentsBlock />, document.getElementById('comments-block'));
registerServiceWorker();
