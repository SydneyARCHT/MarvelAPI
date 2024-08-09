import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacters = async () => {
    const publicKey = '22cb00e699f1a50a46f928ece562aa75';
    const hash = '5fd281a0e833a7951ad912f91e157216';
    const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;

    try {
      setLoading(true);
      const response = await axios.get(url);
      const data = response.data.data.results;
      setCharacters(data);
      setError(null);
    } catch (err) {
      setError('Error fetching character list');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Marvel Characters</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;