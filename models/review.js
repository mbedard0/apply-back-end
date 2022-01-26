import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  content: String,
  company: {type: mongoose.Schema.Types.ObjectId, ref:'Company'},
  rating: Number,
  author: {type: mongoose.Schema.Types.ObjectId, ref:'Profile'},
  // how long the author has worked at the company
  length: {type: String, enum: ['Less than a year','1-3 years','3-5 years','5-10 years','10+ years']},
},{
    timestamps: true,
})

const Review = mongoose.model('Review', reviewSchema)

export {Review}
