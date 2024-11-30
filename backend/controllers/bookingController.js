import Booking from "../models/Booking.js";

// Create a booking
export const createBooking = async (req, res) => {
  const { phone, name, tourName, numberOfPeople, bookingAt } = req.body;

  try {
    // Calculate total price (assuming a price variable is passed in the request or fetched from a tour data source)
    const pricePerPerson = 100;  // Adjust this as needed
    const totalPrice = pricePerPerson * numberOfPeople;

    const newBooking = new Booking({
      phone,
      name,
      tourName,
      numberOfPeople,
      bookingAt,
      totalPrice,
    });

    const savedBooking = await newBooking.save();

    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to create booking" });
  }
};

// Get single booking
export const getBooking = async (req, res) => {
    const id = req.params.id;
    try {
        const book = await Booking.findById(id);
        if (!book) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }
        res.status(200).json({
            success: true,
            message: "Booking retrieved successfully",
            data: book,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};
//get all booking
export const getAllBooking = async (req, res) => {
    try {
        const books = await Booking.find();
        res.status(200).json({
            success: true,
            message: "Successfully retrieved all bookings",
            data: books,
        });
    } catch (err) {
        console.error(err); // Optional: Log the error for debugging
        res.status(500).json({ 
            success: false, 
            message: "Internal server error" 
        });
    }
};
