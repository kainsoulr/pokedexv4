import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css';

export const PokemonStats = () => {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = response.data;
        console.log(pokemonData);
        setPokemon(pokemonData);
      } catch (error) {
        console.error('No se ha podido recibir la información:', error);
      }
    };
    getPokemon();
  }, [id]);

  return (
    <div className="pokemon-info">
      {pokemon.stats ? (
          <img className="card-image-large" alt={`imagen de ${pokemon.name}`} src={pokemon.sprites.other.home.front_default}/>
        ) : (
          <p>Cargando imagen...</p>
        )}
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <div className="info-section">
        <h3>Stats</h3>
        {pokemon.stats ? (
          <ul className="stats-list">
            {pokemon.stats.map((stats, index) => (
              <li key={index} className="stat-item">
                <strong>{stats.stat.name}:</strong> {stats.base_stat}
              </li>
            ))}
          </ul>
        ) : (
          <p>Cargando stats...</p>
        )}
      </div>
      <div className="info-section">
        <h3>Types</h3>
        {pokemon.types ? (
          <ul className="types-list">
            {pokemon.types.map((type, index) => (
              <li key={index} className="type-item">
                {type.type.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>Cargando tipos...</p>
        )}
      </div>
      <div className="info-section">
        <h3>Height</h3>
        <p className="pokemon-height">{pokemon.height} m</p>
      </div>
    </div>
  );
};

export default PokemonStats;
