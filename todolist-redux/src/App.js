import React from 'react';
import Header from './components/header';
import Posts from './components/posts';
import PostForm from './components/PostForm';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Provider store = {store}>
      <Header />
      <PostForm />
      <Posts />
      </Provider>
    </div>
  );
}

export default App;
