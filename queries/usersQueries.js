const db = require('../db');

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
        const query = 'SELECT * FROM users where id= ?';
        db.query(query,req.params.id,(err,result,fields) => {
            if (err) throw res.send(err);
            if(!result.length) return res.json({status:'failed',message: 'No record Found.'});
    
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
            if(!result.length) return res.json({status:'Error',message: 'No record Found.'});
    
            res.json({
                status:'success',
                data: result
            });
        });
    } catch (error) {
        console.log(error)
    }
}

const InsertUser = async(req,res)=>{
    try{
        res.json({
            status:'success',
            data: req.body.id
        });
        // const query = 'SELECT * FROM users where id= ?';
        // db.query(query,req.params.id,(err,result,fields) => {
        //     if (err) throw res.send(err);
        //     if(!result.length) return res.json({status:'failed',message: 'No record Found.'});
    
        //     res.json({
        //         status:'success',
        //         data: result
        //     });
        // });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getAllData, getDataByID, deleteDatabyID, InsertUser};