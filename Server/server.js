//----------------------------
const dotenv = require('dotenv');
dotenv.config();
//----------------------------



//----------------------------
const express = require('express');
//----------------------------



//---------connecting the database-------------------
require('./DB/index')
//----------------connecting the database------------



const cors = require('cors');



//----------------importing the passport module-----------
const passport = require('passport');
//----------------importing the passport module-----------



//----------importing the function from passport file and invoce the func-------
require('./Config/passport')(passport);
//----------importing the function from passport file and invoce the func-------



const app = express();



app.use(express.json());

app.use(cors());



const PORT = process.env.PORT || 8000;

app.listen(PORT);



app.use(passport.initialize());
