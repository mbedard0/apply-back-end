import { Profile } from '../models/profile.js'
import { Company } from '../models/company.js'

function index(req, res) {
  Profile.find({})
    .then(profiles => res.json(profiles))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

function getProfile(req, res) {
  Profile.findById(req.params.id)
    .then(profile => {
      res.json(profile)
    })
}

function getCompany(req, res) {
  Company.findOne({ admins: req.params.id })
    .then(company => {
      res.json(company)
    })
}

export { index, getProfile, getCompany }
