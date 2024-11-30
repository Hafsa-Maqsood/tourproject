import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: String, // Or mongoose.Types.ObjectId if you're referencing a User model
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    tour: {
      type: mongoose.Types.ObjectId,
      ref: "Tour", // Reference to the Tour model
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
