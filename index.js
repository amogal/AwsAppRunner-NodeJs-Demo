const express = require('express')
const app = express()

const port = process.env.PORT || 3030;

app.get('/', (req, res) => res.send('This is a test Node JS app for Aws App Runner!'))

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
      console.log(`Aws App Runner NodeJs app listening on port ${port}`);
  });
