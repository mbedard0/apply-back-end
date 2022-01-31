import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  picture: String,
  resume: String,
  status: {type: String, enum: ['individual', 'company'], default: 'individual'},
  company: [{type: mongoose.Schema.Types.ObjectId, ref: "Company"}],
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: "Review"}]
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
