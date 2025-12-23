import { useCallback, useEffect, useState, memo } from "react";
import ChangerMenu from "./ChangerMenu";
import { useShowroom } from "./data/context";
import { ColorChart } from "./data/carData";

const ColorChanger = memo(()=>{

    const { currentProduct, setColors } = useShowroom()

    const targetProduct = ColorChart[currentProduct]

    const [selectColor,setSelectColor] = useState(
        targetProduct.find((ele)=>ele.default)?.state || targetProduct[0].state
    )
    useEffect(()=>{
        setSelectColor(targetProduct.find((ele)=>ele.default)?.state)
    },[currentProduct])


    const handleColor = useCallback((color)=>{
        setColors(color)
        setSelectColor(color)
    },[setColors, setSelectColor])

    return (
        <>
            <ChangerMenu
                classTitle={"color-changer"}
                menuTitle={"외관"}
                dataTarget={targetProduct}
                componentState={selectColor}
                handlerFunc={handleColor}
                contentsRender={(ele)=>(<span aria-label={`자동차 외관 ${ele.des} 색상`}></span>)}
                style={false}
            />
        </>
    )
})

export default ColorChanger