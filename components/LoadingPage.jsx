import styled from "styled-components";
import { useProgress } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useShowroom } from "./data/context";

const ProgressBarContainer = styled.div`
    margin-top: 50px;
    width: 300px;
    height: 8px;
    background-color: #f5f5dc;
    border-radius: 4px;
    overflow: hidden;
`;

const Progress = styled.div`
    height: 100%;
    background-color: #facc15;
    width: ${(p)=>Number(p.$width)}%;
    transition: all 0.3s;
`;

export default function LoadingPage(){

    const { loadState } = useShowroom()
    const progressRef = useRef(0)
    const { progress } = useProgress()

    useEffect(()=>{
        progressRef.current = progress
    },[progress])

    return (
    <section
        className={`fixed w-screen h-screen bg-gray-50 flex justify-center items-center
            transition-all duration-800
            ${loadState ? 'opacity-0 z-[-1]' : 'opacity-100 z-[9999999999]'}
        `}
        aria-hidden={!loadState}
    >
        <div className="text-center">
            <img src="/image/load-text.svg"
            alt="당신만의 마세라티 지금 시작됩니다. 로딩을 기다려주세요."
            />

            <ProgressBarContainer>
                <Progress $width={progressRef.current}/>
            </ProgressBarContainer>
            <p className="mt-4 font-medium">{Math.floor(progressRef.current)}%</p>
        </div>
    </section>
    )
}