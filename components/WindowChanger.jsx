import { useState } from "react";
import ChangerMenu from "./ChangerMenu";

export default function WindowChanger({selectedWindow}) {
    const windowImg = [
        {
            id:1,
            title: '배경1',
            state: '/image/tree-background.jpg',
            des: '단풍으로 물든 숲 속',
            default: true
        },
        {
            id:2,
            title: '배경2',
            state: '/image/tree-background2.jpg',
            des: '푸른 녹음이 가득한 여름날',
            default: false
        },
        {
            id:3,
            title: '배경3',
            state: '/image/city.jpg',
            des: '야경 속 강변 드라이브',
            default: false
        },
        {
            id:4,
            title: '배경4',
            state: '/image/city2.jpg',
            des: '도시의 불빛',
            default: false
        },
    ]

    const [windowState,setWindowState] = useState(
        windowImg.find((ele)=>ele.default)?.state || windowImg[0].state
    )

    const onhandleBackImg = (src) => {
        selectedWindow(src);
        setWindowState(src);
    }

    return (
        <>
            <ChangerMenu
                classTitle={"window-changer"}
                menuTitle={"배경"}
                dataTarget={windowImg}
                componentState={windowState}
                handlerFunc={onhandleBackImg}
                contentsRender={(ele)=>(
                    <img src={ele.state} alt={ele.des} className="w-full h-full object-cover" />
                )}
                style={true}
            />
        </>
    )
}