import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const baseURL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(baseURL + '?limit=50');
        const pokemonList = response.data.results;

        const detailedPokemonList = await Promise.all(
          pokemonList.map(async (pokemon, index) => {
            const response = await axios.get(`${baseURL}/${index + 1}`);
            return response.data;
          })
        );

        setPokemons(detailedPokemonList);
      } catch (error) {
        console.error('No se ha podido recibir la información:', error);
      }
    };
    getData();
  }, []);

  

  return (
      <div className="container-pokemons">
      {pokemons.map((pokemon, index) => (
        <Link to={`/pokemon/${index + 1}`} key={index} className="card">
          <div>
            <img
              src={pokemon.sprites.other.home.front_default}
              alt={pokemon.name}
            />
            <p className='pokemon-id'>Nº {pokemon.id}</p>
            <h2 className='pokemon-name'>{pokemon.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PokemonList;
