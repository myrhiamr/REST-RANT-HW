const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} alt={data.place.name} />
        <p>
          Located in {data.place.city}, {data.place.state} and serving {" "}
          {data.place.cuisines}
        </p>
      </main>
    </Def>
  );
}

module.exports = show;
