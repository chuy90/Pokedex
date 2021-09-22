import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokemonThumbnail = ({ id, name, image }) => {
  PokemonThumbnail.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
  return (
    <Link className="card-link" to={`/pokemon/${id}`}>
      <div className="pokemon-cards">
        <img className="card-img" src={image} alt={name} />
        <h3 className="card-name">{name}</h3>
      </div>
    </Link>
  );
};

export default PokemonThumbnail;
