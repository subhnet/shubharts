// src/App.jsx
import React from 'react';
import Gallery from './gallery';
import Header from './Header';

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <Gallery />
        </div>
    );
}

export default App;
