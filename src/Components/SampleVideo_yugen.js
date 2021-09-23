import React from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import me from '../images/yugen.png'


export default function SampleVideo() {
    return (
        <>
        <div className="mx-4">
            
            <Card style={{ width: '18rem', backgroundColor:"black" }}>

            <Card.Img className = "yugen-image" variant="top" src = {me}  />
            <Card.Body>
                <Card.Title className = "yugen">YUGEN</Card.Title>
                
                <Card.Text className = "yugen-tittle">
                    YUGEN CINEMATIC VIDEO
                </Card.Text>
                
                <Button className = "yugen_btn"href="https://www.youtube.com/watch?v=JqF9KjFSC9I"
                >Check Out 
                </Button>

            </Card.Body>
            </Card>
        </div>

        </>
    )
}
