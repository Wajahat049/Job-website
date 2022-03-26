import React from 'react';
import '../App.css'
import { Col, Row } from "react-bootstrap";
import { BiSearchAlt } from 'react-icons/bi';
import { RiWallet2Fill } from 'react-icons/ri';
import { GiGlobe } from 'react-icons/gi';


const About = () => {

    const style = { color: "#ff9902", fontSize: "300%" }

    return (
        <div className='Container'>
            <header>
                <div className='HeaderText'>
                    <div>
                        <h1>ABOUT</h1>
                        <p>Find your dream jobs with our powerful <b>JOB SEARCH WEB</b> </p>
                        </div>
                </div>
            </header>
            <div>
                <h1 className='about-heading'>ABOUT US</h1>
            </div>
            <div>
                <h3 className='descr-heading'> How Jobworld Works for You </h3>
            </div>
            <Row className='about-desc-row'>
                <Col className='col-heading'>Perfect Search Tool</Col>
                <Col className='col-heading'>Highly Paid Jobs</Col>
                <Col className='col-heading'>5757 Companies</Col>
            </Row>
            <Row className='about-desc-row'>
                <Col>
                    <BiSearchAlt style={style} className="icons" /></Col>
                <Col>
                    <RiWallet2Fill style={style} className="icons" /></Col>
                <Col>
                    <GiGlobe style={style} className="icons" /></Col>
            </Row>
            <Row className='about-desc-row'>
                <Col className='about-desc-col'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum corporis officia sapiente magni quo dolorem numquam,
                    accusamus esse excepturi, asperiores necessitatibus molestias aliquam eveniet?
                    Pariatur ducimus perferendis dolorem omnis consequuntur. </Col>

                <Col className='about-desc-col'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum corporis officia sapiente magni quo dolorem numquam,
                    accusamus esse excepturi, asperiores necessitatibus molestias aliquam eveniet?
                    Pariatur ducimus perferendis dolorem omnis consequuntur. </Col>

                <Col className='about-desc-col'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum corporis officia sapiente magni quo dolorem numquam,
                    accusamus esse excepturi, asperiores necessitatibus molestias aliquam eveniet?
                    Pariatur ducimus perferendis dolorem omnis consequuntur. </Col>
            </Row>

        </div>
    )
}

export default About;
