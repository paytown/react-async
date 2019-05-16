import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const {
    name,
    status,
    species,
    image
  } = character;

  return (
    <div>
      <img src={image} />
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
    </div>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default Character;
