const express = require('express')  
const app = express()  
const port = 3000

app.get('/api', (req, res) => {  
  res.status(200).json({
    data: [
      {
        name: "Jane Doe"
      },
      {
        name: "Jon Doe"
      }
    ]
  }).end();
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})