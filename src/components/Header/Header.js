import React, { useState } from 'react';
import styles from "./Header.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import {
    Container, Nav, Navbar, NavDropdown, Offcanvas, Form, Button,
    InputGroup
} from 'react-bootstrap'

function Header() {

    const [canvasBody, setCanvasBody] = useState(styles.offcanvasBody);
    const [navBx, setNavBx] = useState(styles.navBx);

    const canvasHandleClick = () => {
        canvasBody === styles.offcanvasBody ? setCanvasBody(styles.offcanvasBodyToggle) :
            setCanvasBody(styles.offcanvasBody)
        navBx === styles.navBx ? setNavBx("") : setNavBx(styles.navBx)

    }

    return (
        <div className='Header fixed-top'>
            <Navbar expand='lg' className={styles.navBar} onToggle={canvasHandleClick}>
                <Container fluid>
                    <Navbar.Brand
                        className={styles.navbarBrand}
                        href='#home'>
                        My Logo
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvas"></Navbar.Toggle>
                    <Navbar.Offcanvas
                        id="offcanvas"
                        aria-labelledby="abc"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title >
                                <Navbar.Brand href='#home'>My Logo</Navbar.Brand>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className={navBx}>
                                <Nav>
                                    <Nav.Link className={canvasBody} href="#home">Home</Nav.Link>
                                    <Nav.Link className={canvasBody} href="#tvshow">TV show</Nav.Link>
                                    <Nav.Link className={canvasBody} href="#movie">Movie</Nav.Link>
                                    <Nav.Link className={canvasBody} href="#latest">Latest</Nav.Link>
                                    <Nav.Link className={canvasBody} href="#mylist">MyList</Nav.Link>
                                </Nav>
                            </div>
                            <div className={styles.searchBx}>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1" className={styles.input}>
                                        <i class="bi bi-search"></i>
                                    </InputGroup.Text>
                                    <Form.Control
                                        placeholder="write anything"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        className={styles.input}
                                    />
                                </InputGroup>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div >
    )
}

export default Header