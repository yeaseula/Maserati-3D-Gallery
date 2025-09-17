import React from "react";
import { div } from "three/tsl";

export default function ColorChanger ({selectedColor,product}) {
    const ColorChart = {
        levante: [
            {
                datacolor:'#898384',
                datatext:'Grigio',
                realcolor:'#898384',
                default:true
            },
            {
                datacolor:'#DDDDDD',
                datatext:'Bianco',
                realcolor:'#DDDDDD',
                default:false
            },
            {
                datacolor:'#010102',
                datatext:'Nero',
                realcolor:'#010102',
                default:false
            },
            {
                datacolor:'#433837',
                datatext:'Rame',
                realcolor:'#433837',
                default:false
            },
            {
                datacolor:'#021850',
                datatext:'Blu Nobile',
                realcolor:'#021850',
                default:false
            },
            {
                datacolor:'#a81710',
                datatext:'ROSSO Potente',
                realcolor:'#a81710',
                default:false
            },
        ]
    }
    const defaultText = {
        lavente : 'Nero'
    }

    const targetProduct = ColorChart[product]
    const defaultsText = defaultText[product]

    const handleColor = (e) => {
        const targetColor = e.currentTarget.dataset.color;
        const targetText = e.currentTarget.dataset.text;
        selectedColor(targetColor)
        const ul = document.querySelectorAll('ul li')
        ul.forEach((ele,idx)=>{
            if(ele.classList.contains('border-2','border-purple-300')) {
                ele.classList.remove('border-2','border-purple-300')
            }
        })
        e.currentTarget.classList.add('border-2','border-purple-300')

        const modelDescript = document.querySelector('.model-descript');
        modelDescript.textContent=targetText
    }

    return (
        <div>
            <div className="fixed bottom-15 left-[50%] translate-x-[-50%] z-999">
                <ul className="flex justify-center gap-3 rounded-full bg-gray-400 pr-4 pl-4 pt-1.5 pb-1.5">
                    {targetProduct.map((ele)=>(
                        <li data-color={ele.datacolor} data-text={ele.datatext} key={ele.datacolor} onClick={handleColor} className={`w-8 h-8 bg-[${ele.realcolor}] rounded-full shadow-2xl shadow-gray-300/30 ${ele.default ? 'border-2 border-purple-300' : ""}`}></li>
                    ))}
                </ul>
            </div>
            <p className="model-descript text-center text-white text-sm fixed bottom-5.5 left-[50%] z-99 translate-x-[-50%]">{defaultsText}</p>
        </div>
    )
}