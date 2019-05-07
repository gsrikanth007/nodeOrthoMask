var express = require('express');
var app = express();

const studies = require('./src/studies/studies.js');
const patients = require('./src/patients/patient.js');
const instance = require('./src/instances/instance.js');
const series = require('./src/series/series.js');


app.use(studies);
app.use(patients);
app.use(instance);
app.use(series);


app.listen(3000, () =>{
    console.log('Server Started On 3000');
});

