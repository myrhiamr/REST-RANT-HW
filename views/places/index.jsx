const React = require('react');
const Def = require('../default');

function Index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-6">
                <h2>
                    <a href={`/places/${place.id}`}>
                        {place.name}
                    </a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img className="img-fluid" src={place.pic} alt={place.name} />
                <p>Rating: Currently unrated</p> {/* Rating section */}
                <p>Comments: No comments yet!</p> {/* Comments section */}
            </div>
        );
    });

    return (
        <Def>
            <main className="container">

                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    );
}

module.exports = Index;
