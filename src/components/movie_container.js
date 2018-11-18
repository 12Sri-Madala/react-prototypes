import React, { Component } from 'react';
import Movie  from './movie';
import axios from 'axios';

class MovieList extends Component {
    render() { 
        return ( 
            <div>
                <h2>Movie Container</h2>
                <Movie/>
            </div> 
        );
    }
}


export default MovieList;