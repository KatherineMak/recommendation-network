import React, {Component} from 'react';
import {Nav} from "react-bootstrap";

class Menu extends Component {
    render() {
        let login = "Login";
        if (this.props.userStatus.status) {
            login = "Logout";
        }
        return (
            <div>
                <Nav className="justify-content-end" activeKey="/">
                    <Nav.Item>
                        <Nav.Link href="/">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/login">{login}</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}
export default Menu