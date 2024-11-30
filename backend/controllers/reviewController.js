import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: savedReview });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to submit review" });
  }
};

// GET reviews for a specific tour
export const getReviews = async (req, res) => {
  const tourId = req.params.tourId;

  try {
    const reviews = await Review.find({ tour: tourId }); // Assuming `tour` is a field in your `Review` schema

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ success: false, message: "No reviews found" });
    }

    res.status(200).json({ success: true, data: reviews });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch reviews" });
  }
};
