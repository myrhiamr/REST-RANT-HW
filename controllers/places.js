const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Crudo',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Mexican',
        pic: '/images/ceviche.jpg'
      }, {
        name: 'Born & Raise',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Urban',
        pic: '/images/carnita.jpg'
      }]
      

      router.get('/new', (req, res) => {
        res.render('places/new')
      })
      


    res.render('places/index', { places })
})




module.exports = router
