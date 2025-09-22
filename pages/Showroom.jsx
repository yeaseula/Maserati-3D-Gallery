import React from "react";
import { Suspense, useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, useHelper, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { SpotLight, SpotLightHelper, TextureLoader } from 'three';
import SideMenu from "../components/SideMenu";
import ChangerButton from "../components/ChangerButton";
import Light from "../components/canvas/Light";
import Wall from "../components/canvas/Wall";

const modelMap = {
    levante: {
        modalPath: '/src/assets/glb/optimized/levante.glb',
        position: [0,-0.75,0],
        scale: [100,100,100],
        rotation: [0,(-Math.PI / 2) + 1.45, 0],
        lightpower: 10,
        defaultColor: '#DDDDDD'
    },
    cielo: {
        modalPath: '/src/assets/glb/optimized/cielo.glb',
        position: [0,-0.75,0],
        scale: [108,108,108],
        rotation: [0,(-Math.PI / 2) + 1.45, 0],
        lightpower: 10,
        defaultColor: '#a1a8af'
    }
}
useGLTF.preload('/src/assets/glb/optimized/levante.glb');
useGLTF.preload('/src/assets/glb/optimized/cielo.glb');
function ProductCall({modalPath,position,scale,rotation,colors,calliper}) {
    const gltf = useGLTF(modalPath);

    useMemo(() => {
        gltf.scene.traverse((child) => {
            if (!child.isMesh) return;
            //console.log(child.name)
            const meshname = child.name.toLowerCase();
            if(meshname.includes('hood') || (meshname.includes('door') && meshname.includes('levante')) ||
            (meshname.includes('rear') && meshname.includes('004')) || (meshname.includes('frontkit') && meshname.includes('gts_001'))){
                child.material = new THREE.MeshStandardMaterial({
                    color:colors,
                    metalness: 0.2,
                    roughness: 0.1,
                });
            }
            if(meshname.includes('glass') || meshname.includes('window')){
                child.material = new THREE.MeshPhysicalMaterial({
                    color:'white',
                    metalness:0,
                    roughness:0,
                    clearcoat:1,
                    clearcoatRoughness:0.2,
                    transmission:1,
                    reflectivity:1,
                    opacity:0.25,
                    transparent:0,
                    thickness:0.3,
                    ior:1.15,
                })
            }
            //cielo 모델 추후 분리
            if(meshname.includes('lodabody')){
                child.material = new THREE.MeshStandardMaterial({
                    color:colors,
                    metalness: 0.2,
                    roughness: 0.1,
                });
            }
            if(meshname.includes('calliper') || meshname.includes('caliper')){
                child.material = new THREE.MeshStandardMaterial({
                    color:calliper
                })
            }

            child.castShadow = true;
            child.receiveShadow = false;
        });
    }, [gltf,colors,calliper]);

    return (
        <group scale={scale} position={position} rotation={rotation}>
            <primitive
            object={gltf.scene}
            castShadow
            ></primitive>
        </group>
    )
}


export default function Showroom({product,setCurrentLocation}) {
    const modalPath = modelMap[product] || modelMap['levante'];
    const LightPower = modelMap[product].lightpower || modelMap['levante'].lightpower;
    const [colors,setColors] = useState('#DDDDDD')
    const [window,setWindow] = useState('/src/assets/images/tree-background.jpg')
    const [calliper,setCalliper] = useState('#314aad')
    const [sideState,setSideState] = useState(true)

    useEffect(()=>{
        setColors(modalPath.defaultColor);
        setCurrentLocation(product);
    },[product])

    return (
        <div className="w-[100vw] h-[100vh]">
            <ChangerButton sideState={sideState} setSideState={setSideState}/>
            <Canvas shadows
            camera={{ position:[5,1,5], fov:50 }}
            className="w-[100vw] h-[100vh]"
            >
                <color attach="background" args={['#fafafa']} />
                <Light LightPower={LightPower}/>
                <Suspense fallback={null}>
                    <ProductCall
                    modalPath={modalPath.modalPath}
                    position={modalPath.position}
                    scale={modalPath.scale}
                    rotation={modalPath.rotation}
                    colors={colors}
                    calliper={calliper}
                    ></ProductCall>
                    <Environment
                        files="/src/assets/hdr/tree-background.hdr"
                        background={false}
                        path=""
                        preset={null}
                    />
                </Suspense>
                <Wall window={window} />
                <OrbitControls></OrbitControls>
            </Canvas>
            {sideState ? (
            <SideMenu
            selectedColor={setColors}
            product={product}
            selectedWindow={setWindow}
            selectedCalliper={setCalliper}/>
            ):('')}
        </div>
    )
}