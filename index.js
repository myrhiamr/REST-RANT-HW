require('dotenv').config() 
const express = require('express')
const app = express()

app.use('/places',require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('tu puedes mi vidaaaa!')
})

app.get('*',(req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});