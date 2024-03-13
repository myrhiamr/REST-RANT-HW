const router = require('express').Router()
const places = require('../models/places.js')

// New

router.get('/new', (req, res) => {
    res.render('places/new')
  })

  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      req.body.pic = '/images/funny.png'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body);
  res.redirect("/places");
  })

//PUT ** checked
  router.put('/:id', (req, res) => {
    let id = Number(req.params.id);
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      if (!req.body.pic) {
        req.body.pic = '/images/funny.png'
      }
      if (!req.body.city) {
        req.body.city = 'Anytown'
      }
      if (!req.body.state) {
        req.body.state = 'USA'
      }
      places[id] = req.body
      res.redirect(`/places/${id}`)
    } 
  })
  
  

// index 

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

// SHOW ** checked

router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})


// EDIT 

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id], id })
  }
})



// DELETE


router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})




module.exports = router 
