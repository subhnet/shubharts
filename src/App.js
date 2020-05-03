import React, {useEffect} from 'react';
import './App.css';
import MyGallery from './Gallery/MyGallery';
import Header from './components/Header';
import ReactGa from 'react-ga';

const App = props => {

  useEffect(() => {
    ReactGa.initialize('UA-133689721-1');
    
    //report page view
    ReactGa.pageview('/shubharts')
  }, [])

  return (
    <div className="App">
      <Header />
      <MyGallery {...props} />
    </div>
  );
}


export default App
