import { Company } from '../models/company.js'

function create(req, res) {
  Company.create(req.body)
  .then(() => {
    res.redirect(`/companies/${req.params.id}`)
  })
}

export {
  create
}