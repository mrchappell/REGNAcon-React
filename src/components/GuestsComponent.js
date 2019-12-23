import React, { Component } from 'react';
import '../App.css';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import GuestInfo from './GuestInfoComponent';

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


    render() {
        const guests = this.props.celebs.map(celebs => {
            return (
                <div key={celebs.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(celebs.id)}>
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
            </div>
        );
    }
}




export default Guests;