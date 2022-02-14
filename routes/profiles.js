import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/:id', checkAuth, profilesCtrl.getProfile)
router.get('/company-owned/:id', checkAuth, profilesCtrl.getCompany)
// router.get('/all-company-admin/:id', checkAuth, profilesCtrl.getAllCompanies)

export { router }
