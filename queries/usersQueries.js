const db = require('../db');
const getquery = 'SELECT * FROM users where id= ?';
const getAllData = async(req,res)=>{
    try{
        const query = 'SELECT * FROM users';
        db.query(query,(err,result,fields) => {
            if (err) throw res.send(err);
            res.json({
                status:'success',
                data: result
            });
        });
    } catch (error) {
        console.log(error)
    }
}

const getDataByID = async(req,res)=>{
    try{
       
        db.query(getquery,req.params.id,(err,result,fields) => {
            if (err) throw res.send(err);
            if(!result.length) return res.status('401').json({status:'Error',message: 'No record Found.'});
    
            res.json({
                status:'success',
                data: result
            });
        });
    } catch (error) {
        console.log(error)
    }
}

const deleteDatabyID = async(req,res)=>{
    try{
        const query = 'Delete FROM users where id= ?';
        db.query(query,req.params.id,(err,result,fields) => {
            if (err) throw res.send(err);
            if(result.affectedRows != 0) return  res.json({
                status:'success',
                data: 'Record Deleted.'
            });
            else
            {
                return  res.status('401').json({
                    status:'Error',
                    data: 'No Record Found.'
                });
            }
           
        });
    } catch (error) {
        console.log(error)
    }
}

const insertUser = async(req,res)=>{
    try{

        const query = 'INSERT INTO users set ?';
        try {
            db.query(query,req.body,(err,result) => {
                if (err) throw res.send(err);
                db.query(getquery,result.insertId,(error,results,fields) => {
                    if (error) throw res.send(error);
                    res.json({
                        status:'success',
                        message:'New Users successfully added.',
                        data: results
                    });
                });
            });
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async(req,res)=>{
  
        const body = req.body
        const query = 'UPDATE `users` SET `lname`=?,`fname`=?,`mname`=?,`suffix`=?,`email`=?,`contact_no`=?,`location`=?,`status`=? WHERE id=?';
        try {
            db.query(query,[body.lname, body.fname, body.mname, body.suffix, body.email, body.contact_no, body.location, body.status,body.id],(err,result) => {
                if (err) throw res.send(err);
                db.query(getquery,result.insertId,(error,results) => {
                    if (error) throw res.send(error);
                    res.json({
                        status:'success',
                        message:'Users successfully updated.',
                    });
                });
            });
        } catch (error) {
            console.log(error)
        }
  
}

module.exports = {getAllData, getDataByID, deleteDatabyID, insertUser, updateUser};