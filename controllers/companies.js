import { Company } from '../models/company.js'

function create(req, res) {
  Company.create(req.body)
  .then(c => {
    console.log(c)
    res.redirect(`/companies/${req.params.id}`)
  })
}

function index(req, res) {
  Company.find({})
  .then((companies) => {
    res.json(companies)
  })
}

export {
  create,
  index,
}