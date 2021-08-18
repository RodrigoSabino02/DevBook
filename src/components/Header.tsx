
import logoImg from '../assets/images/devBook.svg'

import '../styles/header.css'
import { Search } from './Search'

export function Header(){
    return(
        <header>
            <div className="logo">
            <img src={logoImg} alt="logo" />
            </div>
            <div className="search">
                <Search />
            </div>
        </header>
    )   
}