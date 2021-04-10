const express = require('express');
const routes = express.Router()
const ProfileController = require('./controllers/ProfileController')
const JobController = require('./controllers/JobController');
const DashboardController = require('./controllers/DashboardController');
// const ProfileModel = require('./model/Profile')

// const basePath = __dirname + '/views'

// routes.get('/', (req,res)=>{
//     return res.render(basePath + '/index.html')
//   console.log(dir)
//   res.send('ola')
//   })
// const helmet = require('helmet')
// routes.use(helmet())
// routes.disable('x-powered-by')
// const views = __dirname + '/views/'

// routes.get('/index.html', (req,res)=>{
//   return res.redirect('/')
// })


routes.get('/', DashboardController.index)

routes.get('/job', JobController.create)
routes.post('/job', JobController.save)

routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)

routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)


module.exports = routes;