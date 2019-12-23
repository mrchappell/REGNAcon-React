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
            selectedCelebs: null
        };
    }

    onCelebsSelect(celebsId) {
        this.setState({selectedCelebs: celebsId});
    }

    render() {
        return (
            <div>
                <Navbar dark color="success">
                    <div className="container">
                        <NavbarBrand href="/">REGNAcon! culture-con fit for geek royalty</NavbarBrand>
                    </div>
                </Navbar>
                <Guests celebs={this.state.celebs} onClick={celebsId => this.onCelebsSelect(celebsId)}/>
                <GuestInfo celebs={this.state.celebs.filter(celebs => celebs.id === this.state.selectedCelebs)[0]} />
            </div>
        );
    };
}

export default Main;