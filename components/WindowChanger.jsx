import React, { useState } from "react";

export default function WindowChanger({selectedWindow}) {
    const background = [
        {
            id:1,
            title: '배경1',
            src: '/src/assets/images/tree-background.jpg',
            des: '단풍으로 물든 숲 속',
            default: true
        },
        {
            id:2,
            title: '배경2',
            src: '/src/assets/images/tree-background2.jpg',
            des: '푸른 녹음이 가득한 여름날',
            default: false
        },
        {
            id:3,
            title: '배경3',
            src: '/src/assets/images/city.jpg',
            des: '야경 속 강변 드라이브',
            default: false
        },
        {
            id:4,
            title: '배경4',
            src: '/src/assets/images/city2.jpg',
            des: '도시의 불빛',
            default: false
        },
    ]

    const [windowState,setWindowState] = useState(
        background.find(ele=>ele.default)?.src || background[0].src
    )

    const onhandleBackImg = (src) => {
        selectedWindow(src);
        setWindowState(src);
    }

    return (
        <>
            <div className="mt-6 pt-6 border-t-1 border-gray-300 window-changer">
                <p className="mb-4 text-center text-lg font-semibold">배경</p>
                <ul className="flex justify-center gap-3 rounded-full bg-gray-200 pr-4 pl-4 pt-1.5 pb-1.5">
                    {background.map(ele=>(
                        <li data-target={ele.src} data-des={ele.des} key={ele.id}
                        onClick={()=>onhandleBackImg(ele.src)}
                        className={`w-8 h-8 rounded-full overflow-hidden shadow-2xl shadow-gray-300/30 ${windowState == ele.src ? 'border-3 border-yellow-700' : ""} `}>
                            <img src={ele.src} alt="" className="w-full h-full object-cover" />
                        </li>
                    ))}
                </ul>
                <p className="window-descript mt-4 text-center text-sm font-semibold">
                    {windowState.find(ele=>ele.src == windowState)?.des}
                </p>
            </div>
        </>
    )
}