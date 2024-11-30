import Tour from '../models/Tour.js';


// create new tour

export const createTour = async(req,res) => {

    const newTour = new Tour(req.body);

    try{
        const savedTour = await newTour.save();

        res.status(200).json({
            sucess:true, 
            message:'Sucessfully created',
            data:savedTour
        });
    } catch(err){
        res.status(500).json({
             sucess:false,
             message:'Failed to create. Try again'});
    } 
    
};
//update tour
export const updateTour = async (req, res) => {
    const id =req.params.id;
    try {
      const updatedTour = await Tour.findByIdAndUpdate(id, {
        $set: req.body
      },{new: true})
      
      res.status(200).json({
        sucess:true, 
        message:'Sucessfully updated',
        data:updateTour,
      });
    } catch(err){
        res.status(500).json({
             sucess:false,
             message:'Failed to update. Try again',
            });
    } 
    
};
//delete tour

export const deleteTour = async (req, res) => {
    const id =req.params.id;
    try {
      await Tour.findByIdAndDelete(id);
      res.status(200).json({
        sucess:true, 
        message:'Sucessfully deleted',
    
      });
    } catch(err){
        res.status(500).json({
             sucess:false,
             message:'Failed to delete. Try again',
            });
    } 
  };
  //get All Tours
  export const getAllTour = async (req, res) => {
const page = parseInt(req.query.page)
console.log(page);
    try {

      const tours = await Tour.find({})
      .populate("reviews")
      .skip(page*8)
      .limit (8);
      res.status(200).json({
        sucess:true,
        count :tours.length, 
        message:'Sucessfull',
        data: tours,
    
      });
    } catch(err){
        res.status(404).json({
             sucess:false,
             message:'not found',
            });
    } 
  };
  //get single tour
  export const getSingleTour = async (req, res) => {

    const id =req.params.id;
    try {
     const tour = await Tour.findById(id).populate("reviews");
      res.status(200).json({
        sucess:true, 
        message:'Sucessfully Deleted',
        data: tour,
      });
    } catch(err){
        res.status(404).json({
             sucess:false,
             message:'not Found',
            });
    } 
  };
  //get tours by search
  export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i');  // Case-insensitive search
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize); // Corrected to parseInt
  
    try {
      const tours = await Tour.find({
        city,
        distance: { $gte: distance },
        maxGroupSize: { $gte: maxGroupSize }
      }).populate("reviews");
  
      res.status(200).json({
        success: true,
        message: 'Successfully retrieved tours',
        data: tours,
      });
  
    } catch (err) {
      res.status(404).json({
        success: false,
        message: 'Tours not found',
      });
    }
  };
  //get featured tour
  export const getFeaturedTour = async (req, res) => {
   
        try {
    
          const tours = await Tour.find({featured:true})
          .populate("reviews")
          .limit (8);
          res.status(200).json({
            sucess:true, 
            message:'Sucessfull',
            data: tours,
        
          });
        } catch(err){
            res.status(404).json({
                 sucess:false,
                 message:'not found',
                });
        } 
      };

      // get tour counts

      export const getTourCount=async(req, res) =>
      {
        try{
          const tourCount = await Tour.estimatedDocumentCount()

          res.status(200).json({success:true, data:tourCount})
        }
        catch (err){
          res.status(500).jason({success:false, message:"failed to fetch"});
        }
      };