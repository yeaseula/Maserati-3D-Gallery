import WindowChanger from "./WindowChanger";
import ColorChanger from "./ColorChanger";

export default function ChangerMenu({selectedColor, product, selectedWindow}) {
    return (
        <div className="fixed top-[50%] right-15 translate-y-[-50%] z-999">
            <ColorChanger selectedColor={selectedColor} product={product}/>
            <WindowChanger selectedWindow={selectedWindow}/>
        </div>
    )
}