import React, { Component } from 'react';
import Guests from './GuestsComponent';
import GuestInfo from './GuestInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { CELEBS } from '../shared/celebs';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        celebs: state.celebs,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};

const mapDispatchToProps = {
    addComment: (celebId, rating, author, text) => (addComment(celebId, rating, author, text))
};

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
                    celeb={this.props.celebs.filter(celeb => celeb.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
        };

        const CelebWithId = ({ match }) => {
            return (
                <GuestInfo 
                celeb={this.props.celebs.filter(celeb => celeb.id === +match.params.celebId)[0]} 
                comments={this.props.comments.filter(comment => comment.celebId === +match.params.celebId)}
                addComment={this.props.addComment}
            />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/Guests' render={() => <Guests celebs={this.props.celebs} />} />
                    <Route path='/guests/:celebId' component={CelebWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About partners={this.props.partners} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));