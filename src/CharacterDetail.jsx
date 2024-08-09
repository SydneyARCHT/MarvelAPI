import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetail = () => {
  const { id } = useParams(); 
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacterDetails = async () => {
    const publicKey = '22cb00e699f1a50a46f928ece562aa75';
    const hash = '5fd281a0e833a7951ad912f91e157216';
    const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${publicKey}&hash=${hash}`;

    try {
      const response = await axios.get(url);
      setCharacter(response.data.data.results[0]);
      setLoading(false);
    } catch (err) {
      setError('Error fetching details for character!');
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchCharacterDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!character) return <p>No character data available</p>;

  return (
    <div>
      <h1>{character.name}</h1>
      <p>{character.description || 'No description available'}</p>
      <h2>Comics:</h2>
      <ul>
        {character.comics.items.length > 0 ? (
          character.comics.items.map((comic) => (
            <li key={comic.resourceURI}>{comic.name}</li>
          ))
        ) : (
          <p>No comics available</p>
        )}
      </ul>
    </div>
  );
};

export default CharacterDetail;