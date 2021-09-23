import React from 'react'
import me from '../images/standing.png'

import SampleVideo_yugen from './SampleVideo_yugen'
import SampleVideWoodNote from './SmapleVideWoodNote'
import Inure from './Inure';

export default function Aboutme() {
    return (
        <div className="container">
        <div className="my-5">

           <div className="text-about-me">
                <div className="mx-4">
                    <div className="project-tittle">
                    <h3>ABOUT ME</h3>
                    </div>
                </div>
            </div> 
        <div className="container">
            <div className="container">
            <div className="my-image">
                <img  width = "400" height = "600" src={me} class="rounded float-end"/>        
            </div>
            </div>
        

        </div>

        <div className="container">
        <div className="mx-2">
            <div className="myintro">
            <p>Hey Every one, I'm  <strong>Aster Bluem</strong> currently pursuing my B.Tech Degree from Kalinga Institute of
                    Insdustrial Technology I like to explore new things and Technology and I'm also passionate 
                    about Creative Visuals. I always loves to pick camera and cinematic visuals from very first, I
                    have a YouTube Channel named Aster Bluem  with a hundred plus family. Make sure you 
                    check that out.

                   
           
                </p>

                </div>
            </div>
            </div>
            </div>




    <div className="mywork">
            <div className="my-5">
            <div className="mx-4">
                
                <h2 className = "project-tittle" >VISUAL STORIES</h2> 
                </div>
                </div>
            
                <div className="container">
                <div className="yugen-main">
                    <SampleVideo_yugen/>
                </div>
                </div>

                <div className="container">
                <div className="woodnote-main">
                    <SampleVideWoodNote/>
                </div>
                </div>

                <div className="container">
                <div className="inure-main">
                    <Inure/>

                </div>
                </div>
                
                </div>
    </div>
    
    )
}
