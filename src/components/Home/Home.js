import React from 'react';
import { Card, CardGroup} from 'react-bootstrap';
// import banner from "../../images/banner/banner.png";
import firstImage from "../../images/image-1.png";
import secondImage from "../../images/image-2.png";
import thirdImage from "../../images/image-3.png";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <h2 className='text-primary fw-bold mb-2 mt-2'>My Top Projects</h2>
        <CardGroup>
        <Card>
            <Card.Img className="w-100" variant="top" src={firstImage} />
            <Card.Body>
            <Card.Title className="text-primary fw-bolder fs-3 p-2">BIKESMITH - A Niche Product Website</Card.Title>
            <Card.Text>
            Features: <br/>
            •	Focus: focused on bicycle related services. This is a full-stack website using React, firebase, react router, node, express, mongo dB etc. <br/>

            •	You will get various cycles directly from our website. <br/>
            •	An Admin can add & remove products, manage orders.

            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={secondImage}/>
            <Card.Body>
            <Card.Title className="text-primary fw-bolder fs-3 p-2">SHEBA - A Delivery Service-Related Website</Card.Title>
            <Card.Text>
            
            Features: <br/>
            •	Focus: focused on delivery related services. This is a full-stack website using React, firebase, react router, node, express, mongo dB etc. <br/>

            •	You will get various house-related services directly from our website. <br/>
            •	An Admin can add & remove products, manage orders.

            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={thirdImage} />
            <Card.Body>
            <Card.Title className="text-primary fw-bolder fs-3 p-2">LIFESPRING – Mental Health Care Related Website</Card.Title>
            <Card.Text>
            Features: <br/>
            •	Focus: focused on mental health care related services. This is a full-stack website using React, firebase, react router, node, express, mongodb etc. <br/>

            •	You will get various mental health care related services directly from our website. <br/>
            •	Find Mental Health care related services from home at ease.

            </Card.Text>
            </Card.Body>
        </Card>
        </CardGroup>
        <button className="btn btn-info m-3 p-2"><Link className="text-decoration-none fw-bolder text-dark" to='/projects'>Please Explore my all Projects</Link></button>

        


        </>
    );
};

export default Home;