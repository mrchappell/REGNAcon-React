import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, ModalHeader, Modal, ModalBody, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isModalOpen: false
        };
    }

    handleSubmit(values) {
        this.toggleModal();
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>

                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-lg" />Submit a Question for a Featured Guest!
                                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Question for a Guest!</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className="group">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text className="form-control" model=".author" id="author" name="author"
                                    validators={{
                                        required,
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />

                            </div>
                            <div className="group">
                                <Label htmlFor="comment">Question</Label>

                                <Control.textarea className="form-control" model=".text" id="text" name="text"
                                    rows="6"
                                />

                            </div>
                            <div className="group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}



function RenderCeleb({ celeb }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={celeb.image} alt={celeb.name} />
                <CardBody>
                    <CardText>{celeb.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Questions</h4>
                {comments.map(comment => {
                    return (<div key={comment.id} > {comment.text}<br />
                        -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}<br />
                        <br />
                    </div>);
                })}
                <CommentForm />
            </div>

        );
    }
    return (
        <div>
        </div>
    )
}


function GuestInfo(props) {
    if (props.celeb) {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/Guests">Guests</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.celeb.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.celeb.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCeleb celeb={props.celeb} />
                    <RenderComments comments={props.comments} />
                </div>
            </div >
        );
    }
    return (
        <div>
        </div>
    );
}


export default GuestInfo;