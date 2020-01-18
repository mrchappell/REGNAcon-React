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
import { postComment, fetchCelebs, fetchComments, fetchPromotions, fetchPartners, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
    return {
        celebs: state.celebs,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};

const mapDispatchToProps = {
    postComment: (celebId, rating, author, text) => (postComment(celebId, rating, author, text)),
    fetchCelebs: () => (fetchCelebs()),
    resetFeedbackForm: () => (actions.reset('feedbackForm')),
    fetchComments: () => (fetchComments()),
    fetchPromotions: () => (fetchPromotions()),
    fetchPartners: () => (fetchPartners()),
    postFeedback: () => (postFeedback())
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchCelebs();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchPartners();
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    celeb={this.props.celebs.celebs.filter(celeb => celeb.featured)[0]}
                    celebsLoading={this.props.celebs.isLoading}
                    celebsErrMess={this.props.celebs.errMess}
                    partner={this.props.partners.partners.filter(partner => partner.featured)[0]}
                    partnersLoading={this.props.partners.isLoading}
                    partnersErrMess={this.props.partners.errMess}
                    promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                    promotionLoading={this.props.promotions.isLoading}
                    promotionErrMess={this.props.promotions.errMess}
                />
            );
        }


        const CelebWithId = ({ match }) => {
            return (
                <GuestInfo
                    celeb={this.props.celebs.celebs.filter(celeb => celeb.id === +match.params.celebId)[0]}
                    isLoading={this.props.celebs.isLoading}
                    errMess={this.props.celebs.errMess}
                    comments={this.props.comments.comments.filter(comment => comment.celebId === +match.params.celebId)}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                />
            );
        };

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/Guests' render={() => <Guests celebs={this.props.celebs} />} />
                            <Route path='/guests/:celebId' component={CelebWithId} />
                            <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                            <Route exact path='/aboutus' render={() => <About partners={this.props.partners} />} />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));