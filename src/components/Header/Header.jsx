import React from 'react';
import { Col, Container, Navbar, Row, Dropdown, } from 'react-bootstrap';
import styled from 'styled-components'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Styledh1 = styled.h1`
    color: red;
`

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container fluid className='ps-0 pe-0'>
                <Row >
                    <Col xs={12} className='pe-0'>
                        <Navbar expand='lg' variant='dark' bg='dark' fixed = 'top'>
                            <Dropdown className='pe-4'>
                                <Dropdown.Toggle >
                                    <FontAwesomeIcon icon={faBars} />

                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Hello there!</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Navbar.Brand href='#'> {this.props.name}</Navbar.Brand>
                        </Navbar>
                    </Col>
                    {/* <Col xs={3} className='ps-0 pe-0 d-flex justify-content-center align-items-center menu-desplegable' >
                    </Col> */}
                </Row>
            </Container>
        );
    }
}

export default Header;