import { Company } from "../models/company.js";
import { Profile } from "../models/profile.js";
import { Review } from "../models/review.js";

async function create(req, res) {
  try {
    const newReview = await Review.create(req.body)
    const company = await Company.findById(req.body.company)
    const userProfile = await Profile.findById(req.body.author)
    userProfile.reviews.push(newReview._id)
    await userProfile.save()
    company.reviews.push(newReview._id)
    await company.save()
    res.redirect(`/api/companies`)
  } catch(e) {
    console.log(e)
  }
}

function index(req, res) {

}

export {
  create,
  index
}