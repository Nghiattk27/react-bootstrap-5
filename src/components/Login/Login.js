import React from 'react';
import styles from './Login.module.css';
import userImg from '../../images/userImg.png';
import login from '../../images/loginNew.jpg';
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

function Login() {
    return (
        <div className='Login'>
            <Container className='mt-5'>
                <Row>
                    <Col lg={4} md={6} sm={12}
                        className="text-center p-3"
                    >
                        <img className='iconImg w-25 border rounded-circle p-1 mb-3' src={userImg} />
                        <Form>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Control type='email' placeholder='Enter email'
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Control type='password' placeholder='Enter password'>
                                </Form.Control>
                            </Form.Group>

                            <div class="d-grid">
                                <Button className={styles.customButton} variant='primary' type='submit'>
                                    Login
                                </Button>
                            </div>

                            <div className='mt-3'>
                                <a href='#'>
                                    <small className='reset'>
                                        Password Reset
                                    </small>
                                </a>

                                <a href='#' className='reset ms-2'>
                                    <small>
                                        Quick Recover
                                    </small>
                                </a>
                            </div>
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12} className="text-center">
                        <img className='w-75' src={login} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login