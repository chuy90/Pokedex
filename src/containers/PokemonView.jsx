/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Divider, Slider } from '@mui/material';

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
        <div className="top-view">
          <div className="img-view-container">
            <img className="img-view" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="img" />
          </div>
          <div className="text-view-container">
            <h2>
              {currentPokemon.data ? currentPokemon.data.name : ''}
            </h2>
            <label>
              Height: .
              {currentPokemon.data ? currentPokemon.data.height : ''}
              M
            </label>
            <label>
              Weight:
              {' '}
              {currentPokemon.data ? currentPokemon.data.weight : ''}
              G
            </label>
          </div>
        </div>
        <Divider className="divider">STATS</Divider>
        <ul>
          {currentPokemon ? currentPokemon.data.stats.map((element) => (
            <li key={element.stat.name}>
              <label className="stat-name">{`${element.stat.name}: `}</label>
              <Slider
                width={100}
                max={120}
                defaultValue={element.base_stat}
                // disabled="true"
                sx={{
                  width: 300,
                  '& .MuiSlider-thumb': {
                    borderRadius: '1px',
                    width: '10%',
                    thumbColorPrimary: 'purple',
                  },
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
