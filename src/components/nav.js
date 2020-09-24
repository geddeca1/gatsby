import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'

const Navigation = () => (

    <Nav activeKey="/"  > 
    
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link href="/page-2">Next Page</Nav.Link>
        </Nav.Item>
    

    </Nav>
)

export default Navigation

