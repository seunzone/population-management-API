import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;
const locationSchema = new Schema({
  location: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  totalFemale: {
    type: Number,
    trim: true,
    required: true,
  },
  totalMale: {
    type: Number,
    trim: true,
    required: true,
  },
  totalPopulation: {
    type: Number,
    trim: true,
    required: true,
  }
});


export default mongoose.model('location', locationSchema);
