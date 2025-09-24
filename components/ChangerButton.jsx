

export default function ChangerButton({sideState,setSideState}) {

    const handleSideMenu = ()=>{
        setSideState(!sideState)
    }

    return(
        <div className="absolute top-[12%] md:top-[2%] right-4 md:right-10 z-999 flex items-center gap-2">
            <span className="text-xs">사이드메뉴</span>
            <button
            className={`block
            p-1.5 w-10 h-6
            rounded-full transition-2 ${sideState ? 'bg-yellow-700' : 'bg-gray-200'}`}
            onClick={handleSideMenu}>
                <span className={`toggle-btn rounded-full bg-white block w-3 h-[100%] transition-2 ${sideState ? '':'ml-auto'}`}></span>
            </button>
        </div>
    )
}