import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Guests from './components/GuestsComponent';
import { CELEBS } from './shared/celebs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celebs: CELEBS
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">
                            REGNAcon! - culture-con fit for geek royalty </NavbarBrand>
                    </div>
                </Navbar>
                <Guests celebs={this.state.celebs} />
            </div>
        );
    }
}

export default App;
