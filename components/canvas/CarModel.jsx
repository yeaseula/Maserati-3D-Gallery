
import { DRACOLoader } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Suspense, useMemo} from 'react';
import { Environment, Html } from "@react-three/drei";
import * as THREE from "three";
import { useLoader } from '@react-three/fiber';
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { useEffect } from "react";
import { useShowroom } from "../data/context";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
dracoLoader.setWorkerLimit(2);


export default function CarModel({modalPath,colors,calliper}) {

    const { setLoadState } = useShowroom()

    function ProductCall({modalPath,position,scale,rotation,colors,calliper}) {

        const gltf = useLoader(GLTFLoader, `/glb/optimized/${modalPath}`, loaders => {
            loaders.setDRACOLoader(dracoLoader)
            loaders.setMeshoptDecoder(MeshoptDecoder)
        })

        useEffect(()=>{
            if(!gltf) return;
            setLoadState(true)
        },[gltf])

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
                //cielo 모델
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
                />
            </group>
        )
    }

    return (
        <>
            <Suspense fallback={
                <Html className="flex items-center justify-center flex-col h-full">
                    <div className="flex space-x-2">
                        <div className="w-6 h-6 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <p className="text-white text-2xl mt-4 font-semibold text-shadow-yellow-800">Loading..</p>
                </Html>
            }>
                <ProductCall
                modalPath={modalPath.modalPath}
                position={modalPath.position}
                scale={modalPath.scale}
                rotation={modalPath.rotation}
                colors={colors}
                calliper={calliper}
                />
                <Environment
                    files="/hdr/tree-hdr.hdr"
                    background={false}
                    path=""
                    preset={null}
                />
            </Suspense>
        </>
    )
}