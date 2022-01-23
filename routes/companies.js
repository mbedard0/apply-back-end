import { Router } from 'express'
import * as companiesCtrl from '../controllers/companies.js'
import { checkAuth, checkCompanyAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', companiesCtrl.index)
router.get('/:id', companiesCtrl.show)
router.post('/', checkCompanyAuth, companiesCtrl.create)

/*---------- Protected Routes ----------*/

export { router }