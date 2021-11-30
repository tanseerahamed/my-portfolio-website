import React from 'react';
// import { Link } from 'react-router-dom';
import './Project.css';

const Project = (props) => {
    const {name, description, img, website} = props.project;
    return (
        <div className="single-project">
            <img src={img} alt="" fluid />
            <h4>{name}</h4>
            <p>{description}</p>
            
            <button className="btn btn-warning m-3 p-2"> <a className="text-decoration-none fw-bolder text-dark" href={website}
            rel="noreferrer" target="_blank" >Watch Full Project</a></button>
        </div>
    );
};

export default Project;