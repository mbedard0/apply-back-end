import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
  title: String,
  company: {type: mongoose.Schema.Types.ObjectId, ref: "Company"},
  salary: Number,
  description: String,
  employmentType: {type: String, enum: ['part-time', 'full-time', 'contract']},
  // need to build this out in another branch
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application"}]
},{
    timestamps: true,
})

const Job = mongoose.model('Job', jobSchema)

export {Job}