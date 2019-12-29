import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

function RenderGuestsItem({ celeb }) {
    return (
        <Card>
            <Link to={`/guests/${celeb.id}`}>
            <CardImg width="100%" src={baseUrl + celeb.image} alt={celeb.name} />
                <CardImgOverlay>
                    <CardTitle>{celeb.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}



function Guests(props) {

    const guests = props.celebs.celebs.map(celeb => {
        return (
            <div key={celeb.id} className="col-md-5 m-1">
                <RenderGuestsItem celeb={celeb} />
            </div>
        );
    });

    if (props.celebs.isLoading) {
        return (
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.celebs.errMess) {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col">
                        <h4>{props.celebs.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    } 

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