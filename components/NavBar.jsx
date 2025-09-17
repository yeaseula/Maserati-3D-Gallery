import React from "react";
import {Link} from 'react-router-dom';

export default function NavBar(){
    return (
        <nav className="navbar fixed top-15 left-[50%] translate-x-[-50%] z-99">
            <ul className="flex justify-center gap-5">
                <li className="bg-purple-400 hover:bg-purple-600 rounded shadow-lg shadow-indigo-500/50 transition"><Link to="/" className="inline-block text-white text-lg pt-1 pb-1 pl-5 pr-5">2019 Maserati Levante GTS</Link></li>
            </ul>
        </nav>
    )
}