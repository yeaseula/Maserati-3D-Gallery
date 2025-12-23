import { memo } from "react";
import { useState } from "react";
import ChangerMenu from "./ChangerMenu";

const CalliperChanger = memo(({selectedCalliper})=>{
    const calliper = [
        {
            id:1,
            title: '캘리퍼블루',
            state: '#314aad',
            des: 'Blue',
            default: true
        },
        {
            id:2,
            title: '캘리퍼그레이',
            state: '#888d93',
            des: 'Gray',
            default: false
        },
        {
            id:3,
            title: '캘리퍼네로',
            state: '#13161b',
            des: 'Nero',
            default: false
        },
        {
            id:4,
            title: '캘리퍼로소',
            state: '#e90708',
            des: 'Rosso',
            default: false
        },
        {
            id:5,
            title: '캘리퍼라임',
            state: '#d4fb15',
            des: 'Lime',
            default: false
        },
    ]

    const [selected,setSelected] = useState(
        calliper.find((cal) => cal.default)?.state || calliper[0].state
    )

    const handleCalliper = (color) => {
        setSelected(color);
        selectedCalliper(color);
    }

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