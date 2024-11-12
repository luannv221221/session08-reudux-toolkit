import React from 'react'
import Header from './Header'
import { Col, Container, Row } from 'react-bootstrap'

const ProductSearch = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div class="card">
                            <img class="card-img-top" src="holder.js/100x180/" alt="Title" />
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Text</p>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductSearch