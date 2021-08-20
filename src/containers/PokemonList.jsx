import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonThumbnail from '../components/PokemonThumbnail';
import logo from '../assets/pokelogo.png'

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
        // console.log(listOfPokemons);

        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
    })
    .catch((err) => {
        console.error(err);
    })

};


const goToNextPage = () => {
    setCurrentPage(nextPage);
}

const goToPreviousPage = () => {
    setCurrentPage(prevPage);
}

useEffect(() => {
    getPokemons();
}, [currentPage])

  return (
     
    <div>
        <nav className="navbar">
            <img src={logo} className="nav-logo" alt="pokemon logo"/>
        </nav>
        
        <div className="show-main-pokemon">
            {
                <div className="container"> 
                    <div className="row">
                        {
                            pokemons.map((pokemon, index) => (
                                <PokemonThumbnail
                                    key={pokemon.id}
                                    id={pokemon.id}
                                    name={pokemon.name}
                                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                    />
                                    ))
                    }
                    </div>
                </div>
                
            }
        
            {
                pokemons.length !== 0 && (
                    <div className="show-pokemon-btn">
                        
                        <div>
                            <button className="pokemon-list-btns"  onClick={goToPreviousPage}>Previous</button>
                            <button className="pokemon-list-btns"  onClick={goToNextPage}>Next</button>
                        </div>
                    </div>
                )
            }
        <div>
                
            </div>
        </div>
    </div>
  );
}

export default PokemonList;
