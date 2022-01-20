import { Router } from 'express'
import * as companiesCtrl from '../controllers/companies.js'
import { checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Protected Routes ----------*/
router.post('/', companiesCtrl.create)

export { router }