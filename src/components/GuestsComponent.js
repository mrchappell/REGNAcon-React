import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Guests extends Component {
    constructor(props) {
        super(props);
        this.state = {
                selectedCelebs: null
        };
    }

    onCelebsSelect(celebs) {
        this.setState({selectedCelebs: celebs});
    }

    renderSelectedCelebs(celebs) {
        if (celebs) {
            return (
                <Card>
                    <CardImg top src={celebs.image} alt={celebs.name} />
                    <CardBody>
                        <CardTitle>{celebs.name}</CardTitle>
                        <CardText>{celebs.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const guests = this.props.celebs.map(celebs => {
            return (
                <div key={celebs.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCelebsSelect(celebs)}>
                        <CardImg width="100%" src={celebs.image} alt={celebs.name} />
                        <CardImgOverlay>
                            <CardTitle>{celebs.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });


        return (
            <div className="container">
                <div className="row">
                    {guests}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCelebs(this.state.selectedCelebs)}
                    </div>
                </div>
            </div>
        );
    }
}




export default Guests;