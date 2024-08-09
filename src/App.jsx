import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetail'; 
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);


  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="App">
      <CharacterList onCharacterSelect={handleCharacterSelect} />

      {selectedCharacter && (
        <CharacterDetails characterID={selectedCharacter.id} />
      )}
    </div>
  );
}

export default App;