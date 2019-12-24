import React, { Component } from 'react';
import Guests from './GuestsComponent';
import GuestInfo from './GuestInfoComponent';
import { CELEBS } from '../shared/celebs';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celebs: CELEBS,
            selectedCeleb: null
        };
    }

    onCelebSelect(celebId) {
        this.setState({ selectedCeleb: celebId });
    }

    render() {
        return (
            <div>
                <Header />
                <Guests celebs={this.state.celebs} onClick={celebId => this.onCelebSelect(celebId)} />
                <GuestInfo celeb={this.state.celebs.filter(celeb => celeb.id === this.state.selectedCeleb)[0]} />
                <Footer />
            </div>
        );
    };
}

export default Main;