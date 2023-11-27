const app = require('express')()
const body = require('body-parser')
app.use(body.urlencoded({extended:true}))
app.use(body.json())

const port = 9000;

app.listen( port , ()=>
{
    console.log(`the server is listening on port:${port}`)
})



