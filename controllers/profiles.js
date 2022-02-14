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

function getCompany(req, res) {
  Company.findById(req.params.id)
    .then(company => {
      res.json(company)
    })
}

// function getAllCompanies(req, res) {
//   Company.find({admins: req.params.id})
//     .then(companies => {
//       console.log(companies)
//       res.json(companies)
//     })
// }

export { index, getProfile, getCompany }
