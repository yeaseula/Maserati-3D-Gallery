import React from "react";
import { Suspense, useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, useHelper, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { SpotLight, SpotLightHelper, TextureLoader } from 'three';
import ChangerMenu from "../components/ChangerMenu";
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const modelMap = {
    levante: {
        modalPath: '/src/assets/glb/optimized/levante.glb',
        position: [0,-0.75,0],
        scale:[100,100,100],
        rotation:[0,(-Math.PI / 2) + 1.45, 0],
        lightpower:17
    },
    cielo: {
        modalPath: '/src/assets/glb/optimized/cielo.glb',
        position: [0,-0.75,0],
        scale:[108,108,108],
        rotation:[0,(-Math.PI / 2) + 1.45, 0],
        lightpower:20
    }
}

function ProductCall({modalPath,position,scale,rotation,colors,calliper}) {
    const gltf = useGLTF(modalPath);

    useMemo(() => {
        gltf.scene.traverse((child) => {
            if (!child.isMesh) return;
            // console.log(child.name)
            const meshname = child.name.toLowerCase();
            if(meshname.includes('hood') || (meshname.includes('door') && meshname.includes('levante')) ||
            (meshname.includes('rear') && meshname.includes('004')) || (meshname.includes('frontkit') && meshname.includes('gts_001'))){
                child.material = new THREE.MeshStandardMaterial({
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
            if(meshname.includes('glass') || meshname.includes('window')){
                child.material = new THREE.MeshPhysicalMaterial({
                    color:'white',
                    metalness:0,
                    clearcoat:1,
                    clearcoatRoughness:0.2,
                    transmission:1,
                    reflectivity:0.5,
                    opacity:0.3,
                    transparent:0,
                    thickness:0.3,
                    ior:1.2,
                })
            }
            //cielo 모델 추후 분리
            if(meshname.includes('lodabody')){
                child.material = new THREE.MeshStandardMaterial({
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

function MyScene({...props}) {
    const spotLightRef = useRef();
    //useHelper(spotLightRef, SpotLightHelper, 'cyan'); // The third argument is the helper's color
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
    //useHelper(spotLightRef, SpotLightHelper, 'red'); // The third argument is the helper's color
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

useTexture.preload('/src/assets/images/tree-background.jpg');
useTexture.preload('/src/assets/images/tree-background2.jpg');
useTexture.preload('/src/assets/images/city.jpg');
useTexture.preload('/src/assets/images/city2.jpg');

function Window({window}){
    const treeTexture = useTexture(window)
    return(
        <mesh rotation-y={(Math.PI / 2)} position={[-1.9,0.7,0]}>
            <planeGeometry args={[5.6,2.6]}/>
            <meshBasicMaterial map={treeTexture} color={'white'}/>
        </mesh>
    )
}

function LogoWall() {
    const logoImage = useTexture('/src/assets/images/maserati-logo.png')
    const aspect = logoImage.image.width / logoImage.image.height;
    return (
        <mesh position={[0,1,-2.8]}>
            <planeGeometry args={[1.4 * aspect,1.4]}></planeGeometry>
            <meshBasicMaterial map={logoImage} color={'white'} transparent/>
        </mesh>
    )
}

export default function Showroom({product,setCurrentLocation}) {
    const modalPath = modelMap[product] || modelMap['levante'];
    const LightPower = modelMap[product].lightpower || modelMap['levante'].lightpower;
    const [colors,setColors] = useState('#898384')
    const [window,setWindow] = useState('/src/assets/images/tree-background.jpg')
    const [calliper,setCalliper] = useState('#314aad')

    useEffect(()=>{
        setCurrentLocation(product)
    },[product])

    return (
        <div className="w-[100vw] h-[100vh]">
            <Canvas shadows
            camera={{ position:[5,1,5], fov:50 }}
            key={product}
            className="w-[100vw] h-[100vh]"
            >
                <color attach="background" args={['#fafafa']} />
                <ambientLight intensity={2} color={'white'}></ambientLight>
                <MyScene2 color="#FFDDA0" position={[-5,5,-5]} intensity={50}></MyScene2>
                <MyScene color="#FFDDA0" position={[4, 4, 4]} intensity={LightPower}></MyScene>
                <directionalLight color="#ffffff" intensity={1} position={[5,10,3]} castShadow />
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
                /* 옆면 벽 */
                <mesh rotation-x={Math.PI} rotation-y={(Math.PI / 2)} position={[-2,0.7,0]}>
                    <planeGeometry args={[6,3]}/>
                    <meshStandardMaterial
                        color={'#F5EAD7'}
                        metalness={0.6}
                    />
                </mesh>
                <Window window={window}/>
                <mesh rotation-y={(Math.PI / 2)} position={[-1.87,0.7,0]}>
                    <boxGeometry args={[5.6,2.6,0]} />
                    <meshPhysicalMaterial
                        color="white"
                        transparent
                        opacity={0.15}
                        transmission={1}
                        metalness={0.3}
                        roughness={0.05}
                        reflectivity={1}
                        clearcoat={1}
                        clearcoatRoughness={0}
                        ior={1.5}
                        thickness={0.05}
                    />
                </mesh>
                <mesh rotation-y={(Math.PI / 2)} position={[-1.88,0.7,2.8]}>
                    <boxGeometry args={[0.12,2.6,0.04]}/>
                    <meshStandardMaterial
                        color="#bdbdbd"
                        metalness={1}
                        roughness={0.5}
                    />
                </mesh>
                <mesh rotation-y={(Math.PI / 2)} position={[-1.88,0.7,-2.8]}>
                    <boxGeometry args={[0.12,2.6,0.04]}/>
                    <meshStandardMaterial
                        color="#bdbdbd"
                        metalness={1}
                        roughness={0.5}
                    />
                </mesh>
                <mesh rotation-y={(Math.PI / 2)} position={[-1.88,-0.6,0]}>
                    <boxGeometry args={[5.72,0.12,0.04]}/>
                    <meshStandardMaterial
                        color="#bdbdbd"
                        metalness={1}
                        roughness={0.5}
                    />
                </mesh>
                <mesh rotation-y={(Math.PI / 2)} position={[-1.88,2,0]}>
                    <boxGeometry args={[5.72,0.12,0.04]}/>
                    <meshStandardMaterial
                        color="#bdbdbd"
                        metalness={1}
                        roughness={0.5}
                    />
                </mesh>
                /* 뒷면 벽 */
                <LogoWall/>
                <mesh position={[0,0.7,-3]}>
                    <planeGeometry args={[4,3]}/>
                    <meshStandardMaterial
                        color={'#F5EAD7'}
                        metalness={0}
                    />
                </mesh>
                <mesh rotation-x={-Math.PI / 2} position={[0,-0.8,0]} receiveShadow>
                    <planeGeometry args={[4, 6]} />
                    /* 하나의 메쉬에 하나의 머터리얼만 가능 */
                    <meshStandardMaterial color="#E6D8AD" roughness={0.01} metalness={0.3} />

                </mesh>
                <OrbitControls></OrbitControls>
            </Canvas>
            <ChangerMenu
            selectedColor={setColors}
            product={product}
            selectedWindow={setWindow}
            selectedCalliper={setCalliper}/>
        </div>
    )
}