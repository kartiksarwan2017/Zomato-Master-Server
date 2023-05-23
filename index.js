require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
});
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const PORT = 8000;
const app = express();

app.use(cors);
app.use(express.json());
app.use(helmet());


app.listen(PORT, (err) => {
    
    if(err){
        console.log(err);
        return;
    }

    console.log(`Server is running on port: ${PORT}`);

});

