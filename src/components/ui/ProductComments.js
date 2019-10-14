import React, { Component }  from 'react';
import {Card} from "react-bootstrap";

class ProductComments extends Component {

    render() {

        if (this.props.commentsHasErrored) {
            return <Card md={6} sm={6} style={{ marginLeft: '50px'}}>
                Sorry! There was an error loading the comments
            </Card>;
        }

        if (this.props.commentsIsLoading) {
            return <Card md={6} sm={6} style={{ marginLeft: '50px'}}>
                Loading…
            </Card>;
        }

        return (
        <div>
            <Card md={5} sm={5}>
                <h4 style={{ margin: '10px'}}> Reviews: </h4>

                {this.props.comments.slice(0).reverse().map(comment =>
                    <Card style={{width: 'auto', margin: '10px'}} key={comment.id}>
                        <Card.Body>
                            <Card.Title>{comment.created_by.username}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">At {comment.created_at}</Card.Subtitle>
                            <Card.Text>
                                Rate: {comment.rate}<br />
                                Comment: {comment.text}<br />
                                Product id: {comment.product}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </Card>
        </div>
        );
    }
}
export default ProductComments