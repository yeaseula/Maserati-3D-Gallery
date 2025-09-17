import React from "react";
import { Suspense, useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, useHelper, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { SpotLight, SpotLightHelper } from 'three';
import { TextureLoader } from "three";
import { RGBELoader } from "three-stdlib";
import ColorChanger from "../components/ColorChanger";

const modelMap = {
    levante: {
        modalPath: '/src/assets/glb/levante.glb',
        position: [0,-0.75,0],
        scale:[100,100,100],
        rotation:[0,(-Math.PI / 2) + 1.45, 0],
        lightpower:10
    }
}

function ProductCall({modalPath,position,scale,rotation,colors}) {
    const gltf = useGLTF(modalPath);

    useMemo(() => {
        gltf.scene.traverse((child) => {
            if (!child.isMesh) return;
            console.log(child.name)
            const meshname = child.name.toLowerCase();
            if(meshname.includes('hood') || (meshname.includes('door') && meshname.includes('levante')) ||
            (meshname.includes('rear') && meshname.includes('004')) || (meshname.includes('frontkit') && meshname.includes('gts_001'))){
                child.material = new THREE.MeshPhysicalMaterial({
                    color:colors,
                    metalness: 0.2,
                    roughness: 0.1,
                    clearcoat: 1,
                    clearcoatRoughness: 0.03,
                    transmission: 0.2,
                    thickness: 0.8,
                    ior: 1.2,
                    reflectivity: 0.8
                });
            }

            child.castShadow = true;
            child.receiveShadow = false;
        });
    }, [gltf,colors]);

    return (
        <group scale={scale} position={position} rotation={rotation}>
            <primitive
            object={gltf.scene}
            castShadow
            ></primitive>
        </group>
    )
}

function MyScene({...props}) {
    const spotLightRef = useRef();
    useHelper(spotLightRef, SpotLightHelper, 'cyan'); // The third argument is the helper's color
    return (
        <spotLight
            ref={spotLightRef}
            angle={0.23}
            penumbra={0.8}
            distance={30}
            anglePower={4}
            attenuation={5}
            castShadow
            {...props}
        />
    );
}
function MyScene2({...props}) {
    const spotLightRef = useRef();
    useHelper(spotLightRef, SpotLightHelper, 'cyan'); // The third argument is the helper's color
    return (
        <spotLight
            ref={spotLightRef}
            angle={0.23}
            penumbra={0.8}
            distance={30}
            anglePower={10}
            attenuation={5}

            {...props}
        />
    );
}

function Window(){
    const treeTexture = useTexture('/src/assets/images/tree-background.jpg')
    return(
        <mesh rotation-y={(Math.PI / 2)} position={[-1.9,0.7,0]}>
            <planeGeometry args={[5,2]}/>
            <meshBasicMaterial map={treeTexture}/>
        </mesh>
    )
}

export default function Showroom({product}) {
    const modalPath = modelMap[product] || modelMap['levante'];
    const LightPower = modelMap[product].lightpower || modelMap['levante'].lightpower;
    const [colors,setColors] = useState('#021850')
    const [text,setText] = useState(`levante`)

    return (
        <div className="w-[100vw] h-[100vh]">
            <Canvas shadows
            camera={{ position:[5,1,5], fov:45 }}
            key={product}
            className="w-[100vw] h-[100vh]"
            >
                <color attach="background" args={['#fafafa']} />
                <ambientLight intensity={0.6} color={'0xffffff'}></ambientLight>
                <MyScene2 color="gold" position={[-5,5,-5]} intensity={120}></MyScene2>
                <MyScene color="gold" position={[4, 4, 4]} intensity={LightPower}></MyScene>
                <Suspense fallback={null}>
                    <ProductCall
                    modalPath={modalPath.modalPath}
                    position={modalPath.position}
                    scale={modalPath.scale}
                    rotation={modalPath.rotation}
                    colors={colors}
                    ></ProductCall>
                    <Environment
                        files="/src/assets/hdr/artist_workshop.hdr"
                        background={false}
                        path=""
                        preset={null}
                    />
                </Suspense>
                /* 옆면 벽 */
                <mesh rotation-x={Math.PI} rotation-y={(Math.PI / 2)} position={[-2,0.7,0]}>
                    <planeGeometry args={[6,3]}/>
                </mesh>
                <Window/>
                /* 뒷면 벽 */
                <mesh position={[0,0.7,-3]}>
                    <planeGeometry args={[4,3]}/>
                </mesh>
                <mesh rotation-x={-Math.PI / 2} position={[0,-0.8,0]} receiveShadow>
                    <planeGeometry args={[4, 6]} />
                    /* 하나의 메쉬에 하나의 머터리얼만 가능 */
                    <meshStandardMaterial color="#757575" roughness={0.01} metalness={0.3} />

                </mesh>
                <OrbitControls></OrbitControls>
            </Canvas>
            <ColorChanger selectedColor={setColors} product={product}/>
        </div>
    )
}