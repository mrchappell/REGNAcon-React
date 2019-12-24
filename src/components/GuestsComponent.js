import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import GuestInfo from './GuestInfoComponent';

class Guests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCeleb: null
        };
    };

    onCelebSelect(celeb) {
        this.setState({ selectedCeleb: celeb });
    }

    render() {
        const guests = this.props.celebs.map(celeb => {
            return (
                <div key={celeb.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCelebSelect(celeb)}>
                        <CardImg width="100%" src={celeb.image} alt={celeb.name} />
                        <CardImgOverlay>
                            <CardTitle>{celeb.name}</CardTitle>
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
                    <GuestInfo celeb={this.state.selectedCeleb}></GuestInfo>
            </div>
        );
    }
}

export default Guests;