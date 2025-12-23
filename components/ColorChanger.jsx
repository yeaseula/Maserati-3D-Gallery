import React, { memo, useEffect, useState } from "react";
import ChangerMenu from "./ChangerMenu";

const ColorChanger = memo(({selectedColor,product})=>{
    const ColorChart = {
        levante: [
            {
                state:'#DDDDDD',
                des:'Bianco',
                default:true
            },
            {
                state:'#898384',
                des:'Grigio',
                default:false
            },
            {
                state:'#010102',
                des:'Nero',
                default:false
            },
            {
                state:'#433837',
                des:'Rame',
                default:false
            },
            {
                state:'#021850',
                des:'Blu Nobile',
                default:false
            },
            {
                state:'#a81710',
                des:'ROSSO Potente',
                default:false
            },
        ],
        cielo: [
            {
                state:'#a1a8af',
                des:'Grigio lncognito',
                default:true
            },
            {
                state:'#4e5359',
                des:'Grigio Mistero',
                default:false
            },
            {
                state:'#94020f',
                des:'Rosso Vincente',
                default:false
            },
            {
                state:'#00049b',
                des:'Blu Infinito',
                default:false
            },
            {
                state:'#d0a733',
                des:'Giallo Genio',
                default:false
            },
        ]
    }

    const targetProduct = ColorChart[product]

    const [colorState,setColorState] = useState(
        targetProduct.find((ele)=>ele.default)?.state || targetProduct[0].state
    )
    useEffect(()=>{
        setColorState(targetProduct.find((ele)=>ele.default)?.state)
    },[product])

    const handleColor = (color) => {
        selectedColor(color)
        setColorState(color)
    }

    return (
        <>
            <ChangerMenu
                classTitle={"color-changer"}
                menuTitle={"외관"}
                dataTarget={targetProduct}
                componentState={colorState}
                handlerFunc={handleColor}
                contentsRender={(ele)=>(<span aria-label={`자동차 외관 ${ele.des} 색상`}></span>)}
                style={false}
            />
        </>
    )
})