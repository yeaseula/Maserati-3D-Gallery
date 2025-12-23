import { useState, useEffect } from 'react';
import { Canvas,useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SideMenu from "../components/SideMenu";
import ChangerButton from "../components/ChangerButton";

import CarModel from "../components/canvas/CarModel";
import Light from "../components/canvas/Light";
import Wall from "../components/canvas/Wall";

import { useShowroom } from '../components/data/context';
import { useLocation } from 'react-router-dom';
import { modelMap } from "../components/data/carData"

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

export default function Showroom() {
    const location = useLocation()
    const {
        loadState,
        setCurrentProduct,
        colors, setColors,
        windowState,
        calliper } = useShowroom();

    const product = location.pathname === '/levante' ? 'levante' : 'cielo';
    const modalPath = modelMap[product] || modelMap['levante'];
    const LightPower = modelMap[product].lightpower || modelMap['levante'].lightpower;

    const [sideState,setSideState] = useState(true)

    useEffect(()=>{
        setColors(modalPath.defaultColor); //모델 변경 시 해당 모델의 default 컬러로 전환
        setCurrentProduct(product);
    },[product])

    return (
        <section className="w-[100vw] h-[100vh] z-100">
            <h2 className="sr-only">마세라티 3D 전시장 - {product} 모델</h2>
            <div className={`${loadState ? 'opacity-100' : 'opacity-0'}`}>
                <ChangerButton
                sideState={sideState}
                setSideState={setSideState}/>
                <SideMenu
                sideState={sideState}
                />
            </div>
            <Canvas shadows
            camera={{ position:[5,1,5], fov: 50 }}
            className="w-[100vw] h-[100vh]"
            >
                <ResponsiveCamera/>
                <color attach="background" args={['#fafafa']} />
                <Light LightPower={LightPower}/>
                <CarModel
                    modalPath={modalPath}
                    colors={colors}
                    calliper={calliper}
                />
                <Wall window={windowState} />
                <OrbitControls />
            </Canvas>
        </section>
    )
}