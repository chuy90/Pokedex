import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar';

const pokeApi = 'https://pokeapi.co/api/v2/pokemon?limit=21&offset=0';
const PokemonsView = () => {
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [pokemons, setPokemons] = useState([]);
  //   const [currentSearchValue, setCurrentSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(pokeApi);

  const getPokemons = () => {
    axios.get(currentPage)
      .then((res) => {
        console.log(res);
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
        setPokemons([]);
        console.error(err);
      });
  };

  useEffect(() => {
    getPokemons();
    // // eslint-disable-next-line max-len
    // setFilteredPokemon(pokemons.filter((pkmn) =>
    // pkmn.name.toLowerCase().includes(search.toLowerCase())));
  }, [currentPage]);
  return (
    <div className="container">
      <SearchBar
        onChangeValue={
            (value) => {
              console.log(pokemons);
              const filterPokemons = pokemons.filter((pokemon) => pokemon.name.includes(value));
              setPokemons(filterPokemons);
              if (value === '') {
                getPokemons();
              }
            }
        }
      />
      <PokemonList
        nextPage={nextPage}
        prevPage={prevPage}
        pokemons={pokemons}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PokemonsView;
