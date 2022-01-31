import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { checkAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', reviewsCtrl.index)
router.post('/', reviewsCtrl.create)

/*---------- Protected Routes ----------*/

export { router }