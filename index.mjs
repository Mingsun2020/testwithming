import express from 'express'

const app = express()

app.use('/hello', (req, res)=>res.send('OK'))

app.listen(3000)