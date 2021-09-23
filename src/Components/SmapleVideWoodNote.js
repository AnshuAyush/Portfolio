import React from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import woodnote from '../images/woodnote.png'

export default function SmapleVideWoodNote() {
    return (
        <>
        <div className="container">
        <div className="mx-2">    
            <Card style={{width: '22rem', backgroundColor:"black" }}>

            <Card.Img height = "290" className = "woodnote-image" src = {woodnote}/>
            <Card.Body>
                <Card.Title className = "yugen">WOODNOTE</Card.Title>
                
                <Card.Text className = "yugen-tittle">
                    WOODNOTE CINEMATIC VIDEO
                </Card.Text>
                
                <Button className = "yugen_btn"href="https://www.youtube.com/watch?v=x__iuB-iUjE"
                >Check Out 
                </Button>

            </Card.Body>
            </Card>
            </div>
        </div>
        </>
    )
}
