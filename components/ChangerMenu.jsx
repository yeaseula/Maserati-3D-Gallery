export default function ChangerMenu({classTitle, menuTitle, dataTarget, componentState, handlerFunc, contentsRender, style}) {

    return (
    <>
    <section className={`${classTitle} ${style? 'mt-6 pt-6 border-t-1 border-gray-300': ''}`}>
        <h2 className="sr-only">{menuTitle} 선택</h2>
        <p className="mb-4 text-center text-lg font-semibold">{menuTitle}</p>
        <ul className="flex justify-center gap-3 rounded-full bg-gray-200 pr-4 pl-4 pt-1.5 pb-1.5">
            {dataTarget.map((ele)=>(
                <li data-color={ele.state} data-text={ele.des} key={ele.des}
                onClick={()=>{handlerFunc(ele.state)}}
                style={{ backgroundColor: ele.state }}
                className={`w-8 h-8 rounded-full shadow-2xl shadow-gray-300/30 ${componentState == ele.state? 'border-3 border-yellow-700' : ""}`}>
                    <button
                    className="changer-btn w-[100%] h-[100%] rounded-full overflow-hidden"
                    aria-label={`${ele.des} 버튼`}
                    >
                        {contentsRender(ele)}
                    </button>
                </li>
            ))}
        </ul>
        <p className="model-descript mt-4 h-5 text-center text-sm font-semibold">
            {dataTarget.find((ele)=>ele.state === componentState)?.des}
        </p>
    </section>
    </>
 )
}