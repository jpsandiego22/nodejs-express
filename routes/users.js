const express = require("express")
const app = express();
const usedTokens = new Set();
const router = express.Router()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// VALIDATION MODULE
const {usersValidation} = require('../validation/usersValidation')

// QUERIES TO DB MODULE
const {getAllData,getDataByID,deleteDatabyID, InsertUser} = require('../queries/usersQueries')

// GET ALL DATA
router.get("/getalldata",getAllData);

// INSERT & UPDATE MODULE
router.route("/submit")
.post(jsonParser, usersValidation, InsertUser)
.put(jsonParser,deleteDatabyID)


// GET SPECIFIC DATA & DELETE
router.route("/:id")
.post(jsonParser,getDataByID)
.delete(jsonParser,deleteDatabyID)



module.exports = router;