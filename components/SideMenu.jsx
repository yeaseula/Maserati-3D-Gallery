import { memo } from "react";
import WindowChanger from "./WindowChanger";
import ColorChanger from "./ColorChanger";
import CalliperChanger from './CalliperChanger';
import ModelDescript from "./ModelDescript";

const SideMenu = memo(({sideState})=>{

    return (
        <aside
        className={`side-menu fixed bottom-0 md:bottom-auto md:top-1/2  md:-translate-y-1/2
    z-[999] bg-white p-5 rounded-lg shadow transition-all duration-500
    ${sideState ? "translate-x-0 md:right-10" : "translate-y-full md:right-0 md:translate-x-full"}
    `}>
            <ColorChanger />
            <WindowChanger/>
            <CalliperChanger/>
            <ModelDescript />
        </aside>
    )
})

export default SideMenu