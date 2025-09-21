import WindowChanger from "./WindowChanger";
import ColorChanger from "./ColorChanger";
import CalliperChanger from './CalliperChanger';
import ModelDescript from "./ModelDescript";

export default function SideMenu({selectedColor, product, selectedWindow, selectedCalliper}) {
    return (
        <div className="side-menu fixed top-[50%] right-10 translate-y-[-50%] z-999 bg-white p-5 rounded-lg shadow">
            <ColorChanger selectedColor={selectedColor} product={product}/>
            <WindowChanger selectedWindow={selectedWindow}/>
            <CalliperChanger selectedCalliper={selectedCalliper}/>
            <ModelDescript product={product}/>
        </div>
    )
}