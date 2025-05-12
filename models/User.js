
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  mobileNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  countryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  stateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  cityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  pincode: { type: String },
  studentType: { type: String }, 
  schoolName: { type: String },
  instituteName:  { type: String }, 
  collegeName:  { type: String }, 
  aadharCard: { type: String },
  marksheet: { type: String },
  className: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);