import React, { Component } from 'react';
import Movie  from './movie';
import axios from 'axios';

class MovieList extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    
    }
    componentDidMount() {
        const itunes = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json'
        
        axios.get(itunes).then( (resp) => {
            console.log('Resp: ', resp);
            this.setState({
                movies: resp.data.feed.entry
            })
        })
    }

    
    render() { 
        console.log("current state: ", this.state)
        const movieList = this.state.movies.map((movieInfo, index)=>{
            return <Movie info={movieInfo} key={index}/>
        })

        return ( 
            <div>
                {movieList}
            </div> 
        );
    }
}


export default MovieList;