import { Router } from 'express'
import * as jobsCtrl from '../controllers/companies.js'

const router = Router()

router.post('/', jobsCtrl.create)

/*---------- Protected Routes ----------*/

export { router }