const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)
app.use('', (req, res) => res.redirect('/'))

app.listen(8080, () => console.log('Executando'))