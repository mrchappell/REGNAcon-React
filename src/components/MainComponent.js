import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Guests from './GuestsComponent';
import GuestInfo from './GuestInfoComponent';
import { CELEBS } from '../shared/celebs';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celebs: CELEBS,
            selectedCeleb: null
        };
    }

    onCelebSelect(celebId) {
        this.setState({selectedCeleb: celebId});
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">REGNAcon!</NavbarBrand>
                    </div>
                </Navbar>
                <Guests celebs={this.state.celebs} onClick={celebId => this.onCelebSelect(celebId)}/>
                <GuestInfo celeb={this.state.celebs.filter(celeb => celeb.id === this.state.selectedCeleb)[0]} />
            </div>
        );
    };
}

export default Main;