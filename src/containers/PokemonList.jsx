import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonThumbnail from '../components/PokemonThumbnail';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  const getPokemons = () => {
    axios.get(currentPage)
      .then((res) => {
        Promise.all(res.data.results.map((pokemon) => axios.get(pokemon.url)))
          .then((response) => {
            const listOfPokemons = [];
            response.forEach((pokemon) => {
              listOfPokemons.push(pokemon.data);
            });
            setPokemons(listOfPokemons);
          });
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const goToNextPage = () => {
    setCurrentPage(nextPage);
  };

  const goToPreviousPage = () => {
    setCurrentPage(prevPage);
  };

  useEffect(() => {
    getPokemons();
  }, [currentPage]);

  return (

    <div className="pkmn-list">
      <div className="container">
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
                    <button type="button" className="pokemon-btns btns-containter-left" onClick={goToPreviousPage}>Previous</button>
                    <button type="button" className="pokemon-btns btns-containter-right" onClick={goToNextPage}>Next</button>
                  </div>
                </div>
                )
            }

    </div>
  );
};

export default PokemonList;
