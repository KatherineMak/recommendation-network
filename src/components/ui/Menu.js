import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Nav} from "react-bootstrap";

class Menu extends Component {
    render() {
        let login = "Login";
        if (this.props.userStatus.status) {
            login = "Logout";
        }
        return (
            <div>
                <Nav className="app-menu justify-content-end" variant="pills" activeKey={this.props.activeTab}
                     defaultActiveKey="/"
                     onSelect={selectedKey => this.props.changeActiveTab(selectedKey)}>
                    <Nav.Item>
                        <Nav.Link href="/">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/login" eventKey="/login" >{login}</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

Menu.propTypes = {
    userStatus: PropTypes.object.isRequired,
    changeActiveTab: PropTypes.func
};

export default Menu