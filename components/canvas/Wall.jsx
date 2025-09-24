import React from "react";
import { useTexture } from "@react-three/drei";

export default function Wall({window}) {

    useTexture.preload('/src/assets/images/tree-background.jpg');
    useTexture.preload('/src/assets/images/tree-background2.jpg');
    useTexture.preload('/src/assets/images/city.jpg');
    useTexture.preload('/src/assets/images/city2.jpg');

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


    function Window({window}){
        const treeTexture = useTexture(window)
        return(
            <mesh rotation-y={(Math.PI / 2)} position={[-1.9,0.7,0]}>
                <planeGeometry args={[5.6,2.6]}/>
                <meshBasicMaterial map={treeTexture} color={'white'}/>
            </mesh>
        )
    }

    return (
        <>
            {/* 옆면 벽 */}
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
            {/* 뒷면 벽 */}
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
                {/* 하나의 메쉬에 하나의 머터리얼만 가능 */}
                <meshStandardMaterial color="#E6D8AD" roughness={0.01} metalness={0.3} />

            </mesh>
        </>
    )
}