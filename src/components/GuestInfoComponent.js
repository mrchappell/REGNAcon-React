import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class GuestInfo extends Component {


    renderCelebs(celebs) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={celebs.image} alt={celebs.name} />
                    <CardBody>
                        <CardTitle>{celebs.name}</CardTitle>
                        <CardText>{celebs.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return (<div key={comment.id} > {comment.text}<br />-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}<br /><br /></div>);
                    }
                    )
                    }
                </div>
            );
        }
        return (
            <div>
            </div>
        )
    }


    render() {
        if (this.props.celebs) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderCelebs(this.props.celebs)}
                        {this.renderComments(this.props.celebs.comments)}
                    </div>
                </div>
            );
        }
        return (
            <div />
        );
    }
}


export default GuestInfo;