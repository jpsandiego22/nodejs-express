const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const usersUpdateValidation = async(req,res,next)=>{
    const data = req.body;
    try {
        if( !data.lname || !data.fname || !data.mname || !data.suffix || !data.email || !data.contact_no || !data.location || !data.status || !data.id) throw res.status(400).json({
            status:'Error',
            message: 'Invalid Parameter'
        })
         //VALIDATE EMAIL
         if( !regex.test(data.email)) throw res.status(400).json({
            status:'Error',
            message: 'Invalid Email Format.'
        })
    } catch (err) {
        next(err);
    }

    
    next();
}
const usersInsertValidation = async(req,res,next)=>{
    const data = req.body;
    try {
        if( !data.lname || !data.fname || !data.mname || !data.suffix || !data.email || !data.contact_no || !data.location ) throw res.status(400).json({
            status:'Error',
            message: 'Invalid Parameter'
        })

        //VALIDATE EMAIL
        if( !regex.test(data.email)) throw res.status(400).json({
            status:'Error',
            message: 'Invalid Email Format.'
        })
    } catch (err) {
        next(err);
    }
    
    next();
}

module.exports = {
    usersUpdateValidation,
    usersInsertValidation
  };
