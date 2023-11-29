const express = require('express');
const app = express();
const path = require('path');
const indexPath = path.join(__dirname, 'src', 'html', 'index.html');
const client = require('./dbconfig');

app.use(express.static('src'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.get('/getData', (req, res) => {
const {bikeData,carData,startDate,endDate}=req.query;
console.log(bikeData +" "+ carData + " "+ startDate+ " "+ endDate);
const sql = 'SELECT * FROM BOOKINGLIST WHERE bikemodel= $1 AND carmodel = $2 AND (startdate BETWEEN $3 AND $4 or enddate BETWEEN $3 AND $4)'
    console.log(sql)
      client.query(sql, [bikeData,carData,startDate,endDate], (err, result) => {  
    if (err) {
      console.error('Error inserting data:', err.message);
      res.status(500).json({ error: 'Error submitting data' });
    } else {
      console.log('Data Checked successfully');
      res.status(200).json(result.rows);
      console.log(result.rows);
    }
  });
});

app.post('/bookingData', (req, res) => {
const {firstName,lastName,bikeModel,carModel,startDate,endDate} = req.body;
console.log(firstName + lastName + bikeModel + carModel + startDate + endDate);
  
  const sql = 'INSERT INTO BOOKINGLIST (firstname,lastname,bikemodel,carmodel,startdate,enddate) VALUES ($1,$2,$3,$4,$5,$6)';
  client.query(sql, [firstName,lastName,bikeModel,carModel,startDate,endDate], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err.message);
      res.status(500).json({ error: 'Error submitting data' });
    } else {
      console.log('Data inserted successfully');
      res.status(200).json(result.rows);
    }
  });
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
  });