const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)
















// module.exports = [{
//     name: 'Born & Raise',
//     city: 'San Diego',
//     state: 'CA',
//     cuisines: 'Urban',
//     pic: '/images/carnita.jpg'
// }, {
//     name: 'Crudo',
//     city: 'San Diego',
//     state: 'CA',
//     cuisines: 'Mariscos',
//     pic: '/images/ceviche.jpg'
// }]
