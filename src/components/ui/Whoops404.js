/**
 * Created by User on 19.08.2019.
 */

import React from 'react';
import { Container, Alert } from "react-bootstrap";

const Whoops404 = ({ location }) =>
    <div style={{margin: "30px auto" }}>
        <Container>
            <Alert lg={8} variant="danger">
                Whoops cannot find resource at '{location.pathname}'
            </Alert>
        </Container>
    </div>

export default Whoops404