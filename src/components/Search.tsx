import lupaIcon from '../assets/images/lupa.svg'

import '../styles/search.css'

export function Search() {
    return(
        <div className="search">
            <input
                type="text"
                placeholder="Search"
              />
            <button>
                <img src={lupaIcon} alt="lupa" />
            </button>  
                
        </div>
    )
}