const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Rest-Rant</h1>
                <div>
                    <img src="/images/carnita.jpg" alt="taquitos de asada" width="150px" height="90px"/>
                    Photo by <a href="https://unsplash.com/@jeswinthomas">Jeswin Thomas</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>

            </main>
        </Def>
    )
}

module. exports = home