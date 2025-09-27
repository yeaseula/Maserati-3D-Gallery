import styled, {keyframes} from "styled-components";


const fill = keyframes`
    0% { width: 0%; }
    100% { width: 100%; }
`;

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
    width: 0;
    animation: ${fill} 2s forwards;
`;

export default function LoadingPage({loadState}){

    return (
    <section
        className={`fixed w-screen h-screen bg-gray-50 flex justify-center items-center
            transition-all duration-800
            ${loadState ? 'opacity-0 z-[-1]' : 'opacity-100 z-[9999]'}
        `}
    >
        <div className="text-center">
            <img src="/image/load-text.svg" alt="당신만의 마세라티 지금 시작됩니다. 로딩을 기다려주세요." />

            <ProgressBarContainer>
                <Progress/>
            </ProgressBarContainer>
        </div>
    </section>
    )
}