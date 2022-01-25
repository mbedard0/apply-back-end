import { Profile } from '../models/profile.js'
import { Company } from '../models/company.js'
import { User } from '../models/user.js'

function index(req, res) {
  Profile.find({})
    .then(profiles => res.json(profiles))
    .catch(err => {
      res.status(500).json(err)
    })
}

function getProfile(req, res) {
  User.findById(req.params.id)
  .then(user => {
    Profile.findById(user.profile)
    .then(profile => {
      res.json(profile)
    })
  })
}

// need to fix models and then will refactor this to appropriate code, will combine with getProfile
function getCompany(req, res) {
  Company.findOne({ admins: req.params.id })
    .then(company => {
      res.json(company)
    })
}

export { index, getProfile, getCompany }
