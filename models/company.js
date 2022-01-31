import mongoose from 'mongoose'

const companySchema = new mongoose.Schema({
  companyName: String,
  description: String,
  size: {type: String, enum: ['1-10','11-50','51-200','201-1000','1001-5000','5001-10000','10001+']},
  rating: Number,
  location: String,
  admins: [{type: mongoose.Schema.Types.ObjectId, ref:'Profile'}],
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: "Review"}]
},{
    timestamps: true,
})

const Company = mongoose.model('Company', companySchema)

export {Company}
