import React, { Component } from 'react';
import Guests from './GuestsComponent';
import GuestInfo from './GuestInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CELEBS } from '../shared/celebs';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celebs: CELEBS,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }


    render() {

        const HomePage = () => {
            return (
                <Home
                    celeb={this.state.celebs.filter(celeb => celeb.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const CelebWithId = ({ match }) => {
            return (
                <GuestInfo
                    celeb={this.state.celebs.filter(celeb => celeb.id === +match.params.celebId)[0]}
                    comments={this.state.comments.filter(comment => comment.celebId === +match.params.celebId)}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/Guests' render={() => <Guests celebs={this.state.celebs} />} />
                    <Route path='/Guests/:celebId' component={CelebWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;