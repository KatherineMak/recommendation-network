import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Nav} from "react-bootstrap";
import {Comments} from '../containers';
import {AddCommentForm} from '../containers';

class ProductList extends Component {
    componentDidMount() {
        this.props.fetchData('http://smktesting.herokuapp.com/api/products/?format=json');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div>
                <Container>
                    <Row style={{margin: "30px auto" }}>
                        <Col md={3}>
                            <Nav variant="pills" activeKey={this.props.activeKey}
                                 onSelect={(selectedKey) => {
                                    this.props.setActiveKey(selectedKey);
                                    this.props.fetchComments('http://smktesting.herokuapp.com/api/reviews/'+selectedKey+'?format=json');
                                 }
                                } className="flex-column">
                                {this.props.items.map((item) => (
                                    <Nav.Item key={item.id}>
                                        <Nav.Link eventKey={item.id}>
                                            {item.title}
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Col>

                        {(this.props.items.filter(x => x.id == this.props.activeKey)).map(product =>
                            <Col md={4} sm={4}  key={product.id}>
                                <Card style={{
                                    width: 'auto',
                                    backgroundColor: "#AFEEEE"

                                }}>
                                    <Card.Img style={{margin: "10px 0 10px 0" }} variant="top" src={'http://smktesting.herokuapp.com/static/' + product.img} alt={product.title}/>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            Product description: <br />
                                            {product.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                        <Col md={5} sm={5}>
                            <AddCommentForm/>
                            <Comments {...this.props} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

ProductList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};
export default ProductList