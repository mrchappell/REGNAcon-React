import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media, } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <Media tag="li" key={partner.id}>
                <RenderPartner partner={partner} />
            </Media>
        );
    }
    );

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
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">March 3, 2018</dd>
                                   <dt className="col-6">Employees</dt>
                                <dd className="col-6">42</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.</p>
                                <footer className="blockquote-footer">Muriel Strode,{' '}
                                    <cite title="Source Title">"Wind-Wafted Wild Flowers" -
                                    The Open Court, 1903</cite>
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
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    );
}

function RenderPartner({ partner }) {
    if (partner) {
        return (
            <React.Fragment>
                <Media object width="150" src={partner.image} alt={partner.name} />
                <Media body className="ml-5 mb-4">
                    <Media heading> {partner.name} </Media>
                    {partner.description}
                </Media>
            </React.Fragment>
        );
    }
    return <div />
}


export default About;