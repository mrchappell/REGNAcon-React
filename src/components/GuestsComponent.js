import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderGuestsItem({celeb}) {
    return (
        <Card>
            <CardImg width="100%" src={celeb.image} alt={celeb.name} />
            <CardImgOverlay>
                <CardTitle>{celeb.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
function Guests(props) {

    const guests = props.celebs.map(celeb => {
        return (
            <div key={celeb.id} className="col-md-5 m-1">
                <RenderGuestsItem celeb={celeb}/>
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

export default Guests;