import React, { Component } from 'react';
import Guests from './GuestsComponent';
import GuestInfo from './GuestInfoComponent';
import { CELEBS } from '../shared/celebs';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celebs: CELEBS,
        };
    }


    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

         return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/guests' render={() => <Guests celebs={this.state.celebs} />} />
                    <Redirect to='/home' />
                </Switch>
                <Guests celebs={this.state.celebs} onClick={celebId => this.onCelebSelect(celebId)} />
                <GuestInfo celeb={this.state.celebs.filter(celeb => celeb.id === this.state.selectedCeleb)[0]} />
                <Footer />
            </div>
        );
    };
}

export default Main;