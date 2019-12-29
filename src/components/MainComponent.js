import React, { Component } from 'react';
import Guests from './GuestsComponent';
import GuestInfo from './GuestInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addComment, fetchCelebs } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


const mapStateToProps = state => {
    return {
        celebs: state.celebs,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};

const mapDispatchToProps = {
    addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text)),
    fetchCelebs: () => (fetchCelebs()),
    resetFeedbackForm: () => (actions.reset('feedbackForm'))
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchCelebs();
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    celeb={this.props.celebs.celebs.filter(celeb => celeb.featured)[0]}
                    celebsLoading={this.props.celebs.isLoading}
                    celebsErrMess={this.props.celebs.errMess}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const CelebWithId = ({match}) => {
            return (
                <GuestInfo 
                    celeb={this.props.celebs.celebs.filter(celeb => celeb.id === +match.params.celebId)[0]}
                    isLoading={this.props.celebs.isLoading}
                    errMess={this.props.celebs.errMess}
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
                    <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} /> } />
                    <Route exact path='/aboutus' render={() => <About partners={this.props.partners} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));