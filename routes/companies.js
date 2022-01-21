import { Router } from 'express'
import * as companiesCtrl from '../controllers/companies.js'
import { checkAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', companiesCtrl.index)
router.get('/:id', companiesCtrl.show)
router.post('/', companiesCtrl.create)

/*---------- Protected Routes ----------*/

export { router }