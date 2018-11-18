import React from 'react';
import MovieList from './movie_container'

const App = () => {
    return (
        <div className="container">
            <h1 className="text-center">Axios Demo</h1>
            <MovieList/>
        </div>
    )
}

export default App;