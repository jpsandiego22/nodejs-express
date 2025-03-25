const usersValidation = async(req,res,next)=>{
    const data = req.body;

    if( !data.lname || !data.fname || !data.mname || !data.suffix || !data.email || !data.contact_no || !data.location || !data.status || !data.id) throw res.status(400).json({
        status:'Error',
        message: req.body
    })
    
   
    
    next();
}

module.exports = {
    usersValidation
  };
