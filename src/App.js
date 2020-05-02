import React, {useEffect} from 'react';
import './App.css';
import MyGallery from './Gallery/MyGallery';
import Header from './components/Header';

const App = props => {
  return (
    <div className="App">
      <Header />
      <MyGallery {...props} />
    </div>
  );
}


export default App
