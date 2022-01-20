import { Router } from 'express'
import * as companiesCtrl from '../controllers/companies.js'
import { checkAuth } from '../middleware/auth.js'

const router = Router()

router.post('/', companiesCtrl.create)
router.get('/', companiesCtrl.index)

/*---------- Protected Routes ----------*/

export { router }