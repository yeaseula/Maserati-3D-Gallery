import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
            <h1 className="text-[120px] font-extrabold tracking-tight text-slate-400">
                404
            </h1>

            <p className="mt-2 text-xl font-semibold">
                페이지를 찾을 수 없어요
            </p>

            <p className="mt-3 text-center text-sm text-slate-400 leading-relaxed">
                주소가 잘못되었거나<br />
                삭제된 페이지입니다.
            </p>

            <button
                onClick={() => navigate('/')}
                className="mt-8 rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
                홈으로 돌아가기
            </button>
        </div>
    )
}