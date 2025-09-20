import React from "react";
import {Link} from 'react-router-dom';

export default function NavBar({currentlocation}){

    return (
        <nav className="navbar fixed top-15 left-[50%] translate-x-[-50%] z-99">
            <ul className="flex justify-center gap-5">
                <li className={`${currentlocation=='levante' ? 'bg-yellow-400 hover:bg-yellow-600 shadow-lg shadow-yellow-500/50':'bg-gray-300 hover:bg-gray-600'} rounded transition`}>
                    <Link to="/" className="inline-block text-white text-lg pt-1 pb-1 pl-5 pr-5">2019 Maserati Levante GTS</Link>
                </li>
                <li className={`${currentlocation=='cielo' ? 'bg-yellow-400 hover:bg-yellow-600 shadow-lg shadow-yellow-500/50':'bg-gray-300 hover:bg-gray-600'} rounded transition`}>
                    <Link to="/cielo" className="inline-block text-white text-lg pt-1 pb-1 pl-5 pr-5">2023 Maserati MC20 Cielo</Link>
                </li>
            </ul>
        </nav>
    )
}