import express from 'express';

const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.status(404).send({'Page Not Found': '404'});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})