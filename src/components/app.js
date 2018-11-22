import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import Macaron from './our_macorons';
import Gifts_Parties from './gifts_parties';
import Contact from './contact';

const App = () => {
    return (
        <div className="container">
            <Nav/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/our-macarons" component={Macaron}/>
            <Route path="/gifts-parties" component={Gifts_Parties}/>
            <Route path="/contact" component={Contact}/>
        </div>
    )
}

export default App;
