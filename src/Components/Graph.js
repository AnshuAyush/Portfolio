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
            animationData:require('../animation/graph.json')

        })
    }, [])



    return (
        <div className="animation-two">
            <div className = "container" ref = {container}> </div>
        </div>

    )
}
