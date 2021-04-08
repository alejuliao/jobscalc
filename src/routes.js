const express = require('express');
const routes = express.Router()
// const basePath = __dirname + '/views'

// routes.get('/', (req,res)=>{
  //   return res.render(basePath + '/index.html')
  // console.log(dir)
  // res.send('ola')
  // })
  
const views = __dirname + '/views/'
const profile = {
  name: "Alexandre Julião",
  avatar:"https://github.com/alejuliao.png",
  "monthly-budget": 3000,
  "days-per-day": 5,
  "hours-per-day":5,
  "vacation-per-year": 4

}
 
// routes.get('/index.html', (req,res)=>{
//   return res.redirect('/')
// })

routes.get('/', (req,res)=> res.render(views + 'index'))
routes.get('/job', (req,res)=> res.render(views + 'job'))
routes.get('/job-edit', (req,res)=> res.render(views + 'job-edit'))
routes.get('/profile', (req,res)=> res.render(views + "profile", {profile: profile}))


module.exports = routes;