import React from 'react';

const PokemonThumbnail = ({id, name, image}) => {
    return (
        <div className="card col-md-3 mb-2">
            <div className="number">
                <small>{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className="">
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default PokemonThumbnail