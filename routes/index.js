import users from './users.js'
import authors from './authors.js'
import express from 'express'
let router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('minga server ready')
})

router.use('/auth',users)
router.use('/authors', authors)

export default router