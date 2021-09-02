import React from 'react';
import { Link } from 'react-router-dom';

const PokemonThumbnail = ({id, name, image}) => {
    return (
        <div className="cards col-md-4 p-2 mb-2 pokemon-cards">
            <div className="number">
                <small>{id}</small>
            </div>
            <Link to={`/pokemon/${id}`}>
                <img src={image} alt={name} />
            </Link>
            
            <div className="">
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default PokemonThumbnail