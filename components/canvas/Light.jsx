import { Suspense, useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from "three";
import { SpotLight, SpotLightHelper } from 'three';

export default function Light({LightPower}){

    function SpotLightCunstom1({...props}) {
        const spotLightRef = useRef();
        //useHelper(spotLightRef, SpotLightHelper, 'cyan'); // The third argument is the helper's color
        return (
            <spotLight
                ref={spotLightRef}
                angle={0.23}
                penumbra={0.8}
                distance={8}
                anglePower={4}
                attenuation={5}
                castShadow
                {...props}
            />
        );
    }
    function SpotLightCunstom2({...props}) {
        const spotLightRef = useRef();
        //useHelper(spotLightRef, SpotLightHelper, 'red'); // The third argument is the helper's color
        return (
            <spotLight
                ref={spotLightRef}
                angle={0.23}
                penumbra={0.8}
                distance={8}
                anglePower={10}
                attenuation={5}
                {...props}
            />
        );
    }

    return (
        <>
            <ambientLight intensity={2} color={'white'}></ambientLight>
            <SpotLightCunstom1 color="#FFDDA0" position={[4, 4, 4]} intensity={LightPower}></SpotLightCunstom1>
            <SpotLightCunstom2 color="#FFDDA0" position={[-5,5,-5]} intensity={8}></SpotLightCunstom2>
            <directionalLight color="#ffffff" intensity={3} position={[5,10,3]} castShadow />
        </>
    )
}