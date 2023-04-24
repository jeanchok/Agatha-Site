import Sparticles from "sparticles";
import React, { useEffect } from "react";

const Particules = (props) => {
    useEffect(() => {
        let mySparticles = new Sparticles({ speed: props.speed, rotation: props.rotation, color: props.color, direction: props.direction, shape: props.shape, count: 10, imageUrl: props.imageUrl, yVariance: props.yVariance, drift: props.drift }, 400, 300);
    });
    return <></>;
}

export default Particules;

