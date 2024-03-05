const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('North Park Place')
})

module.exports = router
