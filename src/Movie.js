import React from 'react';
//import PropTypes from 'prop-types';

function movie() {
    return <h1></h1>
}

function Movie({id, title,year,summary,poster}){
    return <h1>title</h1>
}

Movie.propTypes =  {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.number.isRequired,
    summary: propTypes.number.isRequired,
    poster: propTypes.number.isRequired,
    
    
};

export default Movie;