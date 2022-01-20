import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function getProfile(req, res){
  Profile.findById(req.params.id)
  .then(profile => {
    res.json(profile)
  })
}

export { index, getProfile }
