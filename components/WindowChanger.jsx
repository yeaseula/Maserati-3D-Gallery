import { useState, memo, useCallback } from "react";
import ChangerMenu from "./ChangerMenu";
import { windowImg } from "./data/carData";
import { useShowroom } from "./data/context";

const WindowChanger = memo(()=>{
    const { setWindowState } = useShowroom()

    const [selectWindow,setSelectWindow] = useState(
        windowImg.find((ele)=>ele.default)?.state || windowImg[0].state
    )

    const onhandleBackImg = useCallback((src)=>{
        setWindowState(src);
        setSelectWindow(src);
    },[setWindowState, setSelectWindow])

    return (
        <>
            <ChangerMenu
                classTitle={"window-changer"}
                menuTitle={"배경"}
                dataTarget={windowImg}
                componentState={selectWindow}
                handlerFunc={onhandleBackImg}
                contentsRender={(ele)=>(
                    <img src={ele.state} alt={ele.des} className="w-full h-full object-cover" />
                )}
                style={true}
            />
        </>
    )
})

export default WindowChanger