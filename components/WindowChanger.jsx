import React from "react";
import * as THREE from "three";

export default function WindowChanger({selectedWindow}) {
    const background = [
        {
            id:1,
            title: '배경1',
            src: '/src/assets/images/tree-background.jpg',
            des: '단풍잎으로 물든 숲 속',
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
            des: '반짝이는 야경',
            default: false
        },
        {
            id:4,
            title: '배경4',
            src: '/src/assets/images/city2.jpg',
            des: '유럽 도시',
            default: false
        },
    ]

    const defaultsText = '단풍잎'

    const onhandleBackImg = (e) => {
        const targetImage = e.currentTarget.dataset.target;
        const targetText = e.currentTarget.dataset.des;
        selectedWindow(targetImage);

        const ul = document.querySelectorAll('.window-changer ul li')
        ul.forEach((ele,idx)=>{
            if(ele.classList.contains('border-3','border-yellow-700')) {
                ele.classList.remove('border-3','border-yellow-700')
            }
        })
        e.currentTarget.classList.add('border-3','border-yellow-700')

        const windowDes = document.querySelector('.window-descript');
        windowDes.textContent=targetText;


    }

    return (
        <>
            <div className="mt-6 window-changer">
                <p className="mb-4 text-center text-lg font-semibold">배경</p>
                <ul className="flex justify-center gap-3 rounded-full bg-gray-200 pr-4 pl-4 pt-1.5 pb-1.5">
                    {background.map(ele=>(
                        <li data-target={ele.src} data-des={ele.des} key={ele.id}
                        onClick={onhandleBackImg}
                        className={`w-8 h-8 rounded-full overflow-hidden shadow-2xl shadow-gray-300/30 ${ele.default ? 'border-3 border-yellow-700' : ""} `}>
                            <img src={ele.src} alt="" className="w-full h-full object-cover" />
                        </li>
                    ))}
                </ul>
                <p className="window-descript mt-4 text-center text-sm font-semibold">
                    {defaultsText}
                </p>
            </div>
        </>
    )
}