const React = require("react");
const Def = require("../default");

function Show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )

  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
          let stars = ''
          for (let i = 0; i < averageRating; i++) {
            stars += 'â­ï¸'
          }
    rating = (
      <h3>
      { stars } stars
      </h3>
    )    
  }
  
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }


  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            { rating }
            <img src={data.place.images} alt={data.place.name} /> 
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h2> Description </h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <h2>Comments</h2>
            { comments } 
          </div>



          <div className="col-sm-6">
      <form action="/comments" method="POST" class="form">    
      
  <div class="form-group">
    <label for="author">Author</label>
    <input type="text" id="author" name="author" class="form-control" required />
  </div>
  <div class="form-group">
    <label for="content">Content</label>
    <textarea id="content" name="content" class="form-control" rows="4" required></textarea>
  </div>
  <div class="form-group">
    <label for="starRating">Star Rating</label>
    <input type="number" id="starRating" name="starRating" class="form-control" step="0.5" min="0" max="5" required />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" id="rant" name="rant" class="form-check-input" />
    <label for="rant" class="form-check-label">Rant</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>     
    </div>
        </div>

        <h1>Edit Place</h1>
<form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
    <div className="row">
        <div className="form-group col-sm-4">
            <label htmlFor="founded">Founded</label>
            <input className="form-control" 
              id="founded" 
              name="founded" 
              value={data.place.founded} 
            />
        </div>
    </div>
    <input className="btn btn-primary" type="submit" value="Update Place" />
</form>




        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger"> Delete </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = Show
