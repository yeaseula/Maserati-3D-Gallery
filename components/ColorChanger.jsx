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
        ],
        cielo: [
            {
                datacolor:'#a1a8af',
                datatext:'Grigio lncognito',
                realcolor:'#a1a8af',
                default:true
            },
            {
                datacolor:'#4e5359',
                datatext:'Grigio Mistero',
                realcolor:'#4e5359',
                default:false
            },
            {
                datacolor:'#94020f',
                datatext:'Rosso Vincente',
                realcolor:'#94020f',
                default:false
            },
            {
                datacolor:'#00049b',
                datatext:'Blu Infinito',
                realcolor:'#00049b',
                default:false
            },
            {
                datacolor:'#d0a733',
                datatext:'Giallo Genio',
                realcolor:'#d0a733',
                default:false
            },
        ]
    }
    const defaultText = {
        levante : 'Grigio',
        cielo : 'Grigio lncognito'
    }

    const targetProduct = ColorChart[product]
    const defaultsText = defaultText[product]

    const handleColor = (e) => {
        const targetColor = e.currentTarget.dataset.color;
        const targetText = e.currentTarget.dataset.text;
        selectedColor(targetColor)
        const ul = document.querySelectorAll('.color-changer ul li')
        ul.forEach((ele,idx)=>{
            if(ele.classList.contains('border-3','border-yellow-700')) {
                ele.classList.remove('border-3','border-yellow-700')
            }
        })
        e.currentTarget.classList.add('border-3','border-yellow-700')

        const modelDescript = document.querySelector('.model-descript');
        modelDescript.textContent=targetText
    }

    return (
        <>
            <div className="color-changer">
                <p className="mb-4 text-center text-lg font-semibold">외관</p>
                <ul className="flex justify-center gap-3 rounded-full bg-gray-200 pr-4 pl-4 pt-1.5 pb-1.5">
                    {targetProduct.map((ele)=>(
                        <li data-color={ele.datacolor} data-text={ele.datatext} key={ele.datacolor}
                        onClick={handleColor}
                        className={`w-8 h-8 bg-[${ele.realcolor}] rounded-full shadow-2xl shadow-gray-300/30 ${ele.default ? 'border-3 border-yellow-700' : ""}`}></li>
                    ))}
                </ul>
                <p className="model-descript mt-4 text-center text-sm font-semibold">
                    {defaultsText}
                </p>
            </div>
        </>
    )
}