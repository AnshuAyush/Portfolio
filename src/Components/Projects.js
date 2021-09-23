import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const projectOneClick = () => {
    window.location.href = "https://github.com/AnshuAyush/Email-Scheduler";
} 

const projectTwoClick = () => {
    window.location.href = "https://github.com/AnshuAyush/Water-Remainder-app";
}

const projectThreeClick = () => {
    window.location.href = "https://github.com/AnshuAyush/Musbea";
}

const projectFourClick = () => {
    window.location.href = "https://github.com/AnshuAyush/Stroke-Prediction";
}

export default function Projects() {
    return (
        <>
        <div className="m-5">
            <div className="project-tittle">
                <h1>PROJECTS I HAVE WORKED ON</h1> 
                <hr style = {{color: "blue"}}/>   
            </div>
        </div>
       
        <div className="project-one">
        
        <Card>
        <div className="project-one-back">
        <Card.Header as="h5">Email Scheduler</Card.Header>
        
        <Card.Body>
            
            
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
                
                <Button className = "project-one-btn" onClick = {projectOneClick}>CHECK OUT</Button>
            
                
        </Card.Body>
        </div>
        </Card>
        </div>


        
        <div className="my-4">
        <div className="project-two">
        
        <Card>
        <div className="project-one-back">
        <Card.Header as="h5">Water Reminder App</Card.Header>
        
        <Card.Body>
            
            
            <Card.Text>
            Reminds you to drink water.Application that takes care of your health
            </Card.Text>
                
                <Button className = "project-one-btn" onClick = {projectTwoClick} >CHECK OUT</Button>
            
                
        </Card.Body>
        </div>
        </Card>
        </div>

        </div>


        <div className="my-4">
        <div className="project-three">
        
        <Card>
        <div className="project-one-back">
        <Card.Header as="h5">Music App</Card.Header>
        
        <Card.Body>
            
            
            <Card.Text>
                Music App using using FireBase as a Database and Neon UI design 
            </Card.Text>
                
                <Button className = "project-one-btn" onClick = {projectThreeClick}>CHECK OUT</Button>
            
                
        </Card.Body>
        </div>
        </Card>
        </div>

        </div>
        

        <div className="my-4">
        <div className="project-four">
        
        <Card>
        <div className="project-one-back">
        <Card.Header as="h5">Stroke Prediction</Card.Header>
        
        <Card.Body>
            
            
            <Card.Text>
                Stroke Prediction using SVM machine learning Algorithm
            </Card.Text>
                
                <Button className = "project-one-btn" onClick = {projectFourClick}>CHECK OUT</Button>
            
                
        </Card.Body>
        </div>
        </Card>
        </div>

        </div>


        </>

    )
}
