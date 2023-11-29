const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'ImAsher@18',
    port: 5432
});

client.connect();

const createBookingTableQuery = `
    CREATE TABLE IF NOT EXISTS BOOKINGLIST (
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(100) not null,
        lastname VARCHAR(100) not null,
        bikemodel VARCHAR(100),
        carmodel VARCHAR(100),
        startdate DATE,
        enddate DATE
    );
`;

client.query(createBookingTableQuery, (err, res) => {
    if (err) {
        console.error('Error creating Booking Table:', err);
    } else {
        console.log('Booking Table created successfully');
    }
});

module.exports = client;