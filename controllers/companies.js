import { Company } from '../models/company.js'
import { Profile } from '../models/profile.js'

async function create(req, res) {
  try {
    const newCompany = await Company.create(req.body)
    const profile = await Profile.findById(req.body.admins)
    profile.company.push(newCompany._id)
    await profile.save()
    res.redirect(`/api/companies`)
  } catch(e) {
    console.log(e)
  }
}

function index(req, res) {
  Company.find({})
  .then((companies) => {
    res.json(companies)
  })
}

function show(req, res) {
  Company.findById(req.params.id)
  .then(company => {
    res.json(company)
  })
}

export {
  create,
  index,
  show,
}