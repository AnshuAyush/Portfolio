import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';
import inure from '../images/inure.png';


export default function Inure() {
    return (
        <>
        <div className="mx-4">    
            <Card style={{width: '21rem', backgroundColor:"black" }}>

            <Card.Img height = "290" className = "yugen-image" src = {inure}/>
            <Card.Body>
                <Card.Title className = "yugen">INURE</Card.Title>
                
                <Card.Text className = "yugen-tittle">
                    INURE CINEMATIC VIDEO
                </Card.Text>
                
                <Button className = "yugen_btn"href="https://www.youtube.com/watch?v=9zElvqiQhgM"
                >Check Out 
                </Button>

            </Card.Body>
            </Card>
        </div>
        </>
    )
}
