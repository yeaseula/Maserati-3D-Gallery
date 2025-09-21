import React, { useEffect, useState } from "react";

export default function ColorChanger ({selectedColor,product}) {
    const ColorChart = {
        levante: [
            {
                datacolor:'#DDDDDD',
                datatext:'Bianco',
                realcolor:'#DDDDDD',
                default:true
            },
            {
                datacolor:'#898384',
                datatext:'Grigio',
                realcolor:'#898384',
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

    const targetProduct = ColorChart[product]

    const [colorState,setColorState] = useState(
        targetProduct.find((ele)=>ele.default)?.realcolor || targetProduct[0].realcolor
    )
    useEffect(()=>{
        setColorState(targetProduct.find((ele)=>ele.default)?.realcolor)
    },[product])

    const handleColor = (realcolor) => {
        selectedColor(realcolor)
        setColorState(realcolor)
    }

    return (
        <>
            <div className="color-changer">
                <p className="mb-4 text-center text-lg font-semibold">외관</p>
                <ul className="flex justify-center gap-3 rounded-full bg-gray-200 pr-4 pl-4 pt-1.5 pb-1.5">
                    {targetProduct.map((ele)=>(
                        <li data-color={ele.datacolor} data-text={ele.datatext} key={ele.datacolor}
                        onClick={()=>{handleColor(ele.realcolor)}}
                        className={`w-8 h-8 bg-[${ele.realcolor}] rounded-full shadow-2xl shadow-gray-300/30 ${colorState == ele.realcolor ? 'border-3 border-yellow-700' : ""}`}></li>
                    ))}
                </ul>
                <p className="model-descript mt-4 text-center text-sm font-semibold">
                    {targetProduct.find((ele)=>ele.realcolor === colorState)?.datatext}
                </p>
            </div>
        </>
    )
}