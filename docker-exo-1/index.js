const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const MAX_RETRIES = 10; 
let retries = 0;

function connectToDatabase() {
  const db = mysql.createConnection({
    host: 'mysql-container', 
    user: 'root',
    password: 'password',
    database: 'testdb',
  });

  db.connect((err) => {
    if (err) {
      console.error(`Tentative ${retries + 1}: Erreur de connexion à la base de données -`, err);
      retries += 1;

      if (retries < MAX_RETRIES) {
        console.log(`Nouvelle tentative dans 2 secondes...`);
        setTimeout(connectToDatabase, 2000); 
      } else {
        console.error('Impossible de se connecter à la base de données après plusieurs tentatives.');
        process.exit(1); 
      }
    } else {
      console.log('Connexion à la base de données MySQL réussie');
    }
  });

  return db;
}

const db = connectToDatabase();

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Erreur de requête:', err);
      res.status(500).json({ error: 'Erreur de requête' });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Serveur Express à http://localhost:${port}`);
});
