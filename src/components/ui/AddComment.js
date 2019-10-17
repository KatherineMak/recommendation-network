import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {Card, Form, Button, Alert} from "react-bootstrap";

class AddComment extends Component {
    render() {
        var alert;
        var button = <Button variant="primary" type="submit" style={{marginRight: "5px", float: "right"}}>
            Submit
        </Button>;
        const submit = e => {
            fetch('http://smktesting.herokuapp.com/api/reviews/'+this.props.activeKey, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+this.props.userStatus.token,
                },
                body: JSON.stringify({
                    text: e.target.elements.addComment.value,
                    rate: e.target.elements.rateProduct.value,
                })
            })
            .then(response => response.json())
            .then((jsonData) => {
                 if (!jsonData.success) {
                     console.log("Error");
                 }
            });
        };
        if (!this.props.userStatus.status) {
            alert =
                <Alert className="comment-alert" key={1} variant="danger">
                    <p>Please, login to add your review.</p>
                </Alert>;

            button = <Button variant="primary" type="submit" style={{marginRight: "5px", float: "right"}} disabled>
                Submit
            </Button>;
        }
        return (
            <div>
                {alert}
                <Card md={5} sm={5} style={{ marginBottom: '20px', padding: "10px"}}>

                    <Form onSubmit={submit}>
                        <Form.Group controlId="addComment">
                            <Form.Label>Your review</Form.Label>
                            <Form.Control required as="textarea" rows="3" />
                        </Form.Group>
                        <Form.Group controlId="rateProduct">
                            <Form.Label>Rate product</Form.Label>
                            <Form.Control as="select">
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </Form.Control>
                        </Form.Group>
                        {button}
                    </Form>
                </Card>
            </div>
        );
    }
}

AddComment.propTypes = {
    userStatus: PropTypes.object.isRequired
};

export default AddComment