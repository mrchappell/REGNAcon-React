import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderCeleb({celeb}) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={celeb.image} alt={celeb.name} />
                    <CardBody>
                        <CardTitle>{celeb.name}</CardTitle>
                        <CardText>{celeb.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments}) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return (<div key={comment.id} > {comment.text}<br/>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}<br/><br/></div>);
                    }
                    )
                    }
                </div>
            );
        }
        return <div />;
    }


    function GuestInfo(props) {
        if (props.celeb) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCeleb celeb={props.celeb} />
                        <RenderComments comments={props.celeb.comments} />
                    </div>
                </div>
            );
        }
        return <div />;
    }



export default GuestInfo;