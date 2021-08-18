import { Search } from "../components/Search";
import octocat from "../assets/images/octocat.svg"

import '../styles/home.css'
import { Card } from "../components/Card";

export function Home(){
    return(
    <div>
        <div className="home">
            <main>
                <div className="content">
                    <h2>
                        Stalk people on github!
                    </h2>
                    <Search />


                </div>

            </main>
        </div>

        <div className="top-users">
            <section>
                <h4>Top users</h4>
                <div className="cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>
            </section>
        </div>
    </div>

    )
}