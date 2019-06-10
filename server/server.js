const express = require('express')
const coffeeRouter = require('./routers/coffeeRouter')

const app = express()

const port = process.env.PORT || 3000

app.use(coffeeRouter)

app.listen(port, () => {
    console.log(`server started on the ${port} ...`)
})
