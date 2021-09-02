import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PokemonView = ({ match }) => {

    const [pokemonDetails, setPokemonDetails] = useState();

    const id = match.params.id;

    const getPokemon = (id) => {
        const details = getPokemonData(id);
        setPokemonDetails(details.data);
        }

    const getPokemonData = (id) => {
        const res = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(id);
    }, [])

    return (
        <div>
            <div className="cards align-center col-sm-3 p-2 mb-2 pokemon-cards">
            <div className="number">
                <small>#{id}</small>
            </div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={''} />
        </div>
                       
        </div>
    )
}

export default PokemonView