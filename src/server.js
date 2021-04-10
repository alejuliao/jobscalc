const express = require('express');
const server = express()
const routes = require('./routes')
const path = require('path')

const port = 3000
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))


server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))

server.use(routes)
server.listen(port, (req,res)=>{
  console.log(`Server is running on http://localhost:${port}`)
})