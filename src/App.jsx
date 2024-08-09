import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BrowseCharacters from './BrowseCharacters';
import CharacterDetail from './CharacterDetail';
import Comics from './Comics';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseCharacters />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;