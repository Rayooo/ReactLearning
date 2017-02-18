/**
 * Created by Ray on 16/8/2.
 */
import React from 'react';
import {RouteHandler} from 'react-router';
import Footer from './Footer';

class App extends React.Component{
    render(){
        return (
            <div>
                <RouteHandler />
                <Footer />
            </div>
        );
    }
}

export default App;