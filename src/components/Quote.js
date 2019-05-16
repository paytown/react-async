import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote }) {
  return (
    <div>
      <img src={quote.image} />
      <p>{quote.character}</p>
      <p>{quote.quote}</p>
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.shape({
    image: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  })
};

export default Quote;
