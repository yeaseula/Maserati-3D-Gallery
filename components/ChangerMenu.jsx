import WindowChanger from "./WindowChanger";
import ColorChanger from "./ColorChanger";
import CalliperChanger from './CalliperChanger';

export default function ChangerMenu({selectedColor, product, selectedWindow, selectedCalliper}) {
    return (
        <div className="fixed top-[50%] right-15 translate-y-[-50%] z-999">
            <ColorChanger selectedColor={selectedColor} product={product}/>
            <WindowChanger selectedWindow={selectedWindow}/>
            <CalliperChanger selectedCalliper={selectedCalliper}/>
        </div>
    )
}