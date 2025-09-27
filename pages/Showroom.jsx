import React from "react";
import { useState, useEffect } from 'react';
import { Canvas,useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import SideMenu from "../components/SideMenu";
import ChangerButton from "../components/ChangerButton";

import CarModel from "../components/canvas/CarModel";
import Light from "../components/canvas/Light";
import Wall from "../components/canvas/Wall";

const modelMap = {
    levante: {
        modalPath: 'levante-lower-meshopt.glb',
        position: [0,-0.75,0],
        scale: [100,100,100],
        rotation: [0,(-Math.PI / 2) + 1.45, 0],
        lightpower: 10,
        defaultColor: '#DDDDDD'
    },
    cielo: {
        modalPath: 'cielo-preload-lower.glb',
        position: [0,-0.75,0],
        scale: [108,108,108],
        rotation: [0,(-Math.PI / 2) + 1.45, 0],
        lightpower: 10,
        defaultColor: '#a1a8af'
    }
}

function ResponsiveCamera() {
    const { camera } = useThree()

    useEffect(()=>{
        function cameraSetting() {
            camera.fov = window.innerWidth < 768 ? 92 : 50
            camera.updateProjectionMatrix()
        }
        cameraSetting();
    },[camera])

    return null
}

export default function Showroom({product,setCurrentLocation}) {
    const modalPath = modelMap[product] || modelMap['levante'];
    const LightPower = modelMap[product].lightpower || modelMap['levante'].lightpower;
    const [colors,setColors] = useState('#DDDDDD')
    const [windowState,setWindowState] = useState('/image/tree-background.jpg')
    const [calliper,setCalliper] = useState('#314aad')
    const [sideState,setSideState] = useState(true)
    useEffect(()=>{
        setColors(modalPath.defaultColor);
        setCurrentLocation(product);
    },[product])

    return (
        <section className="w-[100vw] h-[100vh]">
            <ChangerButton sideState={sideState} setSideState={setSideState}/>
            <Canvas shadows
            camera={{ position:[5,1,5], fov: 50 }}
            className="w-[100vw] h-[100vh]"
            >


                <CarModel
                    modalPath={modalPath}
                    colors={colors}
                    calliper={calliper}
                />


            </Canvas>


        </section>
    )
}