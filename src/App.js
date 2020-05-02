import React from 'react';
import './App.css';
import MyGallery from './Gallery/MyGallery';
import Header from './components/Header';



function App() {

  return (
    <div className="App">
      <Header />
      <MyGallery />
    </div>
  );
}

export default App;
