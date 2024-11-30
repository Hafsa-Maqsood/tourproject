import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  tourName: {
    type: String,
    required: true,
  },
  numberOfPeople: {
    type: Number,
    required: true,
  },
  bookingAt: {
    type: Date,
    default: Date.now, // Default value for bookingAt
  },
  totalPrice: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
