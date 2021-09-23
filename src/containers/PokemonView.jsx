import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const PokemonView = () => {
  const { id } = useParams();
  const [currentPokemon, setCurrentPokemon] = useState('');

  const getPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        setCurrentPokemon(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(async () => {
    if (id) {
      getPokemon();
    }
  }, [id]);

  return (

    <div className="container">
      <div className="pokemon-cards-view">
        <h2>
          {currentPokemon.data ? currentPokemon.data.name : ''}
        </h2>
        <div>
          <img className="img-view" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="img" />
        </div>
        <ul>
          {currentPokemon ? currentPokemon.data.stats.map((element) => (
            <li key={element.stat.name}>
              {`${element.stat.name}: `}
              { element.base_stat }
              <div style={{
                height: '13px', width: `${element.base_stat}px`, display: 'inline-block', background: 'rgb(141, 28, 28)',
              }}
              />
            </li>
          )) : '' }
        </ul>
        <Link to="/">
          <button type="button" className="pokemon-btns">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonView;
