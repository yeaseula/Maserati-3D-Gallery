import WindowChanger from "./WindowChanger";
import ColorChanger from "./ColorChanger";
import CalliperChanger from './CalliperChanger';
import ModelDescript from "./ModelDescript";

export default function SideMenu({selectedColor, product, selectedWindow, selectedCalliper,sideState, loadState}) {
    return (
        <aside className={`side-menu
        fixed bottom-0 md:bottom-[unset] md:top-[50%] md:right-10 md:translate-y-[-50%] z-999
        bg-white p-5 rounded-lg shadow ${sideState ? 'visible' :'bottom-[-100%] md:mr-[-100%]'}
        ${loadState ? 'opacity-100' : 'opacity-0'} duration-400
        `}>
            <ColorChanger selectedColor={selectedColor} product={product}/>
            <WindowChanger selectedWindow={selectedWindow}/>
            <CalliperChanger selectedCalliper={selectedCalliper}/>
            <ModelDescript product={product}/>
        </aside>
    )
}