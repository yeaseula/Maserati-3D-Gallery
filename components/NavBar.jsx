import {Link} from 'react-router-dom';
import { memo } from 'react';
import { useShowroom } from './data/context';

const NavBar = memo(()=>{

    const { loadState, currentProduct } = useShowroom()

    return (
        <nav className={`navbar w-[100%] pl-4 pr-4 fixed top-6 left-[50%]
        translate-x-[-50%] z-99 ${loadState ? 'opacity-100' : 'opacity-0'} duration-400`}
        aria-hidden={!loadState}
        >
            <ul className="flex justify-center gap-5">
                <li className={`${currentProduct=='cielo' ? 'bg-yellow-400 hover:bg-yellow-600 shadow-lg shadow-yellow-500/50':'bg-gray-300 hover:bg-gray-600'} rounded transition`}>
                    <Link to="/" className="inline-block text-white text-sm md:text-lg text-center pt-1 pb-1 pl-5 pr-5">2023 Maserati MC20 Cielo</Link>
                </li>
                <li className={`${currentProduct=='levante' ? 'bg-yellow-400 hover:bg-yellow-600 shadow-lg shadow-yellow-500/50':'bg-gray-300 hover:bg-gray-600'} rounded transition`}>
                    <Link to="/levante" className="inline-block text-white text-sm md:text-lg text-center pt-1 pb-1 pl-5 pr-5">2019 Maserati Levante GTS</Link>
                </li>
            </ul>
        </nav>
    )
})

export default NavBar