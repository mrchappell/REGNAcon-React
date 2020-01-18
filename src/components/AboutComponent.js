import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media, } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


function PartnerList(props) {

    const partners = props.partners.partners.map(partner => {
        return (
            <Fade in key={partner.id}>
                <Media tag="li">
                <RenderPartner partner={partner} />
            </Media>
            </Fade>
        );
    }
    );
    if (props.partners.isLoading) {
        return (
            <Loading />
        );
    }
    if (props.partners.errMess) {
        return (
            <h4>{props.partners.errMess}</h4>
        );
    };
    return (
        <div className="col mt-4">
            <Media list>
                <Stagger in>
                {partners}
                </Stagger>
            </Media>
        </div>
    )

}

function About(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit dolor magna eget est lorem ipsum dolor. Volutpat consequat mauris nunc congue nisi vitae suscipit. Viverra justo nec ultrices dui sapien. Molestie at elementum eu facilisis sed odio morbi. A scelerisque purus semper eget duis at. Pharetra vel turpis nunc eget. Sed egestas egestas fringilla phasellus faucibus scelerisque. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Varius vel pharetra vel turpis nunc.</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Stats</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">March 3, 2018</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">9</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">"I used to be embarrassed because I was just a comic book writer while other people were building bridges or going on to medical careers. And then I began to realize: Entertainment is one of the most important things in people's lives. Without it, they might go off the deep end."</p>
                                <footer className="blockquote-footer">Stan Lee,{' '}
                                    <cite title="Source Title">1922 -
                                    2018</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Community Partners</h3>
                </div>
                <PartnerList partners={props.partners} />
            </div>
        </div>
    );
}
function RenderPartner({ partner }) {
    if (partner) {
        return (
            <React.Fragment>
                <Media object width="150" src={baseUrl + partner.image} alt={partner.name} />
                <Media body className="ml-5 mb-4">
                    <Media heading> {partner.name} </Media>
                    {partner.description}
                </Media>
            </React.Fragment>
        );
    }
    return (
        <div>
        </div>
    );
}


export default About;