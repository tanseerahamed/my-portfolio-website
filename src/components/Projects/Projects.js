import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect( () => {
    fetch('./projects.json')
    .then(res => res.json())
    .then(data => setProjects(data));
    },[])
    return (
        <div className='project-container'>
            {
                projects.map(project => <Project key={project.key} project ={project}></Project>)
            }
        </div>
    );
};

export default Projects;