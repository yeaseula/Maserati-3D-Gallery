import React from "react";

export default function CalliperChanger ({selectedCalliper}) {
    const calliper = [
        {
            id:1,
            title: '캘리퍼블루',
            color: '#314aad',
            des: 'Blue',
            default: true
        },
        {
            id:2,
            title: '캘리퍼그레이',
            color: '#888d93',
            des: 'Gray',
            default: false
        },
        {
            id:3,
            title: '캘리퍼네로',
            color: '#13161b',
            des: 'Nero',
            default: false
        },
        {
            id:4,
            title: '캘리퍼로소',
            color: '#e90708',
            des: 'Rosso',
            default: false
        },
        {
            id:5,
            title: '캘리퍼라임',
            color: '#d4fb15',
            des: 'Lime',
            default: false
        },
    ]

    const defaultsCalliperText = 'Blue'

    const handleCalliper = (e) => {
        const targetCalliper = e.currentTarget.dataset.color;
        const targetCalliperText = e.currentTarget.dataset.text;
        selectedCalliper(targetCalliper)
        const ul = document.querySelectorAll('.calliper-changer ul li')
        ul.forEach((ele,idx)=>{
            if(ele.classList.contains('border-3','border-yellow-700')) {
                ele.classList.remove('border-3','border-yellow-700')
            }
        })
        e.currentTarget.classList.add('border-3','border-yellow-700')

        const calliperDescript = document.querySelector('.calliper-descript');
        calliperDescript.textContent=targetCalliperText;
    }

    return (
        <>
            <div className="mt-6 calliper-changer">
                <p className="mb-4 text-center text-lg font-semibold">브레이크 캘리퍼</p>
                <ul className="flex justify-center gap-3 rounded-full bg-gray-200 pr-4 pl-4 pt-1.5 pb-1.5">
                    {calliper.map((ele)=>(
                        <li data-color={ele.color} data-text={ele.des} key={ele.id}
                        onClick={handleCalliper}
                        className={`w-8 h-8 bg-[${ele.color}] rounded-full shadow-2xl shadow-gray-300/30 ${ele.default ? 'border-3 border-yellow-700' : ""}`}></li>
                    ))}
                </ul>
                <p className="calliper-descript mt-4 text-center text-sm font-semibold">
                    {defaultsCalliperText}
                </p>
            </div>
        </>
    )
}