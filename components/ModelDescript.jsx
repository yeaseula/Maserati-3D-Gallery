import React, { useState } from "react";

const Model = {
    cielo : {
        mainTitle: '하늘을 품은 슈퍼카 MX20 Cielo',
        subTitle: `투명 글라스 루프와 \n 강력한 퍼포먼스가 선사하는 자유`,
        model: '• 차종: 스파이더 (컨버터블)',
        engine: '• 엔진: 3.0L V6 Nettuno 트윈터보',
        output: '• 최고출력: 630마력',
        speed: '• 가속: 0 → 100km/h 약 3.0초',
        maxSpeed: '• 최고속도: 320km/h+',
        desc: '• 특징: 전동식 폴딩 글라스 루프, 카본파이버 섀시'
    },
    levante : {
        mainTitle: '럭셔리 SUV의 퍼포먼스 아이콘',
        subTitle: '마세라티 감성을 담은 고성능 SUV',
        model: '• 차종: 럭셔리 SUV',
        engine: '• 엔진: 3.8L V8 트윈터보 (페라리 개발)',
        output: '• 최고출력: 550마력',
        speed: '• 가속: 0 → 100km/h 약 4.2초',
        maxSpeed: '• 최고속도: 290km/h+',
        desc: '• 특징: Q4 사륜구동, 고급 인테리어, 스포츠 서스펜션'
    },
}


export default function ModelDescript({product}) {
    const [isClose,setIsClose] = useState(true)

    const handleDescription = () => {
        setIsClose(!isClose)
    }

    return (
        <>
        <div className="mt-6">
            <button
            onClick={handleDescription}
            className="w-[100%] bg-yellow-400 hover:bg-yellow-600 text-white transition p-2 rounded font-semibold">
                {isClose ? '설명 보기' : '설명 닫기'}
            </button>
            {!isClose &&
            <div
            className="mt-7 bg-white rounded overflow-hidden transition">
                <h2 className="mb-2 font-semibold">{Model[product].mainTitle}</h2>
                <p className="mb-2 text-sm font-semibold">
                    {Model[product].subTitle.split('\n').map((line,i)=>(
                        <React.Fragment key={i}>
                        {line}
                        <br />
                        </React.Fragment>
                    ))}
                    </p>
                <ul className="text-xs">
                    <li>{Model[product].model}</li>
                    <li>{Model[product].engine}</li>
                    <li>{Model[product].output}</li>
                    <li>{Model[product].speed}</li>
                    <li>{Model[product].maxSpeed}</li>
                    <li>{Model[product].desc}</li>
                </ul>
            </div>
            }
        </div>
        </>
    )
}