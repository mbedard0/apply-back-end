import { Company } from '../models/company.js'

function create(req, res) {
  Company.create(req.body)
  .then(c => {
    console.log(c)
    res.redirect(`/api/companies`)
  })
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