/* eslint-disable react/prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import PokemonThumbnail from '../components/PokemonThumbnail';

const PokemonList = ({
  nextPage, prevPage, setCurrentPage, pokemons,
}) => {
  const goToNextPage = () => {
    setCurrentPage(nextPage);
  };

  const goToPreviousPage = () => {
    setCurrentPage(prevPage);
  };

  return (

    <div className="container">
      <div className="pkmn-list">
        {
                            pokemons.map((pokemon) => (
                              <PokemonThumbnail
                                key={pokemon.id}
                                id={pokemon.id}
                                name={pokemon.name}
                                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                              />
                            ))
                    }
      </div>

      {
                pokemons.length !== 0 && (
                <div className="">
                  <div className="btns-containter">
                    <button type="button" data-cy="left-button" className="pokemon-btns btns-containter-left" onClick={goToPreviousPage}>Previous</button>
                    <button type="button" data-cy="right-button" className="pokemon-btns btns-containter-right" onClick={goToNextPage}>Next</button>
                  </div>
                </div>
                )
            }

    </div>
  );
};

PokemonList.propTypes = {
  nextPage: PropTypes.string.isRequired,
  prevPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.string.isRequired,
};
export default PokemonList;
