import React from 'react'
import landing_image from '../images/landing_image.jpg';
import '../App.css'
import Typewriter from 'typewriter-effect'
import instaicon from '../icons/insta.png'
import gmail from '../icons/gmail.png'
import twitter from '../icons/twitter.png'


export default function My_image() {

    const type = (typewriter) =>{
        typewriter.pauseFor(500).typeString("Hello")
        .pauseFor(500)
        .deleteAll()
        .typeString("I'm a")
        .pause(500)
        .deleteAll()
        .typeString("Developer..")
        .start()
        .deleteAll()
        .typeString("Welcome...")
        .start()
    }
    const visitInstagram = ()=> {
        window.location.href = "https://www.instagram.com/aster_bluem/";
    }

    const VisitGmail = () =>{
        window.location.href = "https://www.google.com/gmail/";
    }
    return (

    <>

    <div className="container-fluid">
    <div className="images">

    <img width = "1240" height = "500" src={landing_image} className="rounded mx-auto d-block" alt="..."/>
        <div className="text-on-image">
            <Typewriter onInit = {type}/>
        </div>
        </div>
        </div>
        
        <div className="container-sm">
        <div className="insta-icon" onClick = {visitInstagram}>
            <img  src= {instaicon} />

        </div>
        </div>

        <div className="container-sm">
        <div className="gmail-icon" onClick = {VisitGmail}>
            <img  src= {gmail} />

        </div>
        </div>

        <div className="container-sm">
        <div className="twitter-icon" style = {{opacity: 1}} >
            <img  src= {twitter} />

        </div>
        </div>

    

        
    
       
       

    </>
        
    )
}

