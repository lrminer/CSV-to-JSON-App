const express = require("express");
const PORT = PROCESS.ENV.PORT || 1234;

const app = express();

app.listen(PORT, ()=> {
    console.log('Serving on ')
})