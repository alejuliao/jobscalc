const express = require('express');

const server = express()
const routes = require('./routes')
const port = 3000
server.set('view engine', 'ejs')

server.use(express.static('public'))
server.use(routes)
server.listen(port, (req,res)=>{
  console.log(`Server is running on http://localhost:${port}`)
})