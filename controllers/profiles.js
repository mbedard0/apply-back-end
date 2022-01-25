import { Profile } from '../models/profile.js'
import { Company } from '../models/company.js'
import { User } from '../models/user.js'

function index(req, res) {
  Profile.find({})
    .then(profiles => res.json(profiles))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

function getProfile(req, res) {
  // console.log(req.params.id)
  User.findById(req.params.id)
  .then(user => {
    // console.log(user.profile)
    Profile.findById(user.profile)
    .then(profile => {
      // console.log(profile)
      res.json(profile)
    })
  })
}

// function getProfile(req, res) {
//   Profile.findById(req.params.id)
//     .then(profile => {
//       res.json(profile)
//     })
// }

// need to fix models and then will refactor this to appropriate code
function getCompany(req, res) {
  Company.findOne({ admins: req.params.id })
    .then(company => {
      res.json(company)
    })
}

export { index, getProfile, getCompany }
