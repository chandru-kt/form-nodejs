// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');
// const axios = require('axios');
// const app = express();
// const port = process.env.PORT || 3000;

const { text } = require('body-parser');

// const pool = new Pool({
// 	user: 'chan',
// 	host: 'dpg-cfuc26arrk0c831npb1g-a.oregon-postgres.render.com',
// 	database: 'bank_det',
// 	password: 'l3AK61KAp0yrosaj2CFvDaiayUYkWTTD',
// 	port: 5432,
// 	ssl: true,
//   });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// app.post('/api', async (req, res) => {
//   const { title, content } = req.body;
//   const client = await pool.connect();
//   try {
//     const result = await client.query('INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Something went wrong' });
//   } finally {
//     client.release();
//   }
// axios.post('http://localhost:3000/api', {
//     title,
//     content
//   })
//   .then(response => {
//     console.log(response.data);
//     res.send(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//     res.status(500).send('Something went wrong');
//   });
// });
// app.get('/api', async (req, res) => {
//     const client = await pool.connect();
//     try {
//       const result = await client.query('SELECT * FROM posts');
//       res.json(result.rows);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Something went wrong' });
//     } finally {
//       client.release();
//     }
//   });
  

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

const Pool = require('pg').Pool
const pool = new Pool({
     	user: 'chan',
     	host: 'dpg-cfuc26arrk0c831npb1g-a.oregon-postgres.render.com',
     	database: 'bank_det',
     	password: 'l3AK61KAp0yrosaj2CFvDaiayUYkWTTD',
     	port: 5432,
     	ssl: true,
       });
const createUser = (request, response) => {
const { title, content } = request.body
    console.log(request.body);
        pool.query('INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *', [title,content], (error, results) => {
          if (error) {
            throw error
          }
          // response.status(201).send(`${title}`)
          response.status(201).send(`User added with ID: ${title} ${content}`)
        })
      }

const getUser = (request, response) => {
        const id = parseInt(request.params.id)
      
        pool.query('SELECT * FROM posts', (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
        })
      }
    
module.exports={
    createUser,
    getUser
}