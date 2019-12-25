import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderGuestsItem({ celeb }) {
    return (
        <Card>
            <Link to={`/guests/${celeb.id}`}>
            <CardImg width="100%" src={celeb.image} alt={celeb.name} />
                <CardImgOverlay>
                    <CardTitle>{celeb.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}



function Guests(props) {

    const guests = props.celebs.map(celeb => {
        return (
            <div key={celeb.id} className="col-md-5 m-1">
                <RenderGuestsItem celeb={celeb} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Guests</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Guests</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {guests}
            </div>
        </div>
    );
}
export default Guests;