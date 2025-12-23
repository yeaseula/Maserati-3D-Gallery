import { memo, useCallback } from "react";
import { useState } from "react";
import ChangerMenu from "./ChangerMenu";
import { calliper } from "./data/carData";
import { useShowroom } from "./data/context";

const CalliperChanger = memo(()=>{

    const { setCalliper } = useShowroom();

    const [selected,setSelected] = useState(
        calliper.find((cal) => cal.default)?.state || calliper[0].state
    )

    const handleCalliper = useCallback((color)=>{
        setSelected(color);
        setCalliper(color);
    },[setSelected, setCalliper])

    return (
        <>
            <ChangerMenu
                classTitle={"calliper-changer"}
                menuTitle={"브레이크 캘리퍼"}
                dataTarget={calliper}
                componentState={selected}
                handlerFunc={handleCalliper}
                contentsRender={(ele)=>(<span aria-label={`브레이크 캘리퍼 ${ele.des} 색상`}></span>)}
                style={true}
            />
        </>
    )
})

export default CalliperChanger