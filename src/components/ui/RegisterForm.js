import React, { Component }  from 'react';
import {Form, Button, Row, Col, Container, Alert} from "react-bootstrap";

class RegisterForm extends Component {
    render() {
        const submit = e => {
            e.preventDefault();
            const data = new FormData(e.target);
            fetch('http://smktesting.herokuapp.com/api/register/', {
                method: 'POST',
                body: data,
            })
            .then(response => response.json())
            .then((jsonData) => {
                if (jsonData.success) {
                    this.props.addUserStatus(jsonData.success, "ok", jsonData.token);
                    this.props.history.push(`/`);
                } else {
                    this.props.addUserStatus(jsonData.success, jsonData.message, "");
                }
            });
        };

        let alert;
        if ((this.props.userStatus.status === false) && (this.props.userStatus.message !== "logout")) {
            alert =
                <Alert key={1} variant="danger">
                    {this.props.userStatus.message}
                </Alert>;
        }

        return (
            <div>
                <Container>
                    <Row style={{margin: "10px 30px"}} className="justify-content-md-center">
                        <p>Registration form</p>
                    </Row>
                    <Row style={{margin: "10px 30px"}} className="justify-content-md-center">
                        {alert}
                    </Row>
                    <Row style={{margin: "30px"}} className="justify-content-md-center">
                        <Form onSubmit={submit} style={{padding: "20px", border: "4px ridge #D0D0D0"}}>

                            <Form.Group as={Row} controlId="username">
                                <Form.Label column sm={3}>
                                    Username
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        required
                                        name="username"
                                        type="text"
                                        placeholder="Username"
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="password">
                                <Form.Label column sm={3}>
                                    Password
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        required
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Col>
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{marginRight: "5px", float: "right"}}>
                                Submit
                            </Button>
                        </Form>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default RegisterForm