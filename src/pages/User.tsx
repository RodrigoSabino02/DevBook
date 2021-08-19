import '../styles/user.css'

export function User() {
    return(
        <div className="page-user">

                <h1>Rodrigo Sabino</h1>

            

            <h2>▼ GitHub stats</h2>

            <section className="stats">
            <img height="250em"  src="https://github-readme-stats.vercel.app/api?username=RodrigoSabino02&show_icons=true&theme=midnight-purple&include_all_commits=true&count_private=true"/>
            <img height="200em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=RodrigoSabino02&layout=compact&langs_count=7&theme=midnight-purple"/>
            </section>

            <h2>▼ Repos</h2>
            <section className="stats">

            </section>
        </div>
    )
}