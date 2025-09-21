export default function ChangerMenu({classTitle, menuTitle, dataTarget, componentState, handlerFunc, contentsRender, style}) {

    return (
    <>
    <div className={`${classTitle} ${style? 'mt-6 pt-6 border-t-1 border-gray-300': ''}`}>
        <p className="mb-4 text-center text-lg font-semibold">{menuTitle}</p>
        <ul className="flex justify-center gap-3 rounded-full bg-gray-200 pr-4 pl-4 pt-1.5 pb-1.5">
            {dataTarget.map((ele)=>(
                <li data-color={ele.state} data-text={ele.des} key={ele.des}
                onClick={()=>{handlerFunc(ele.state)}}
                className={`w-8 h-8 bg-[${ele.state}] rounded-full shadow-2xl overflow-hidden shadow-gray-300/30 ${componentState == ele.state? 'border-3 border-yellow-700' : ""}`}>
                    {contentsRender(ele)}
                </li>
            ))}
        </ul>
        <p className="model-descript mt-4 text-center text-sm font-semibold">
            {dataTarget.find((ele)=>ele.state === componentState)?.des}
        </p>
    </div>
    </>
 )
}