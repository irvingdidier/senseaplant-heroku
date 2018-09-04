const express = require('express')
const app = express()

const path = require('path')

app.use( express.static( path.resolve( __dirname + '/public' ) ) )

const port = process.env.PORT || 3000

app.get('*', (req, res) => {

    res.sendFile( path.resolve( __dirname + '/public/index.html' ) )
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})