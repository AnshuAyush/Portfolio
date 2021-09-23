import React, {useEffect, useRef} from 'react'
import lottie from 'lottie-web';


export default function LottieOne() {

    const container = useRef(null);
    useEffect (() =>{
        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData:require('../animation/project-animation.json')

        })
    }, [])



    return (
        <div className="container">
        <div className="animation-one">
            <div className = "container" ref = {container}> </div>
        </div>
        </div>
    )
}
