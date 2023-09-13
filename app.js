const express = require('express')
const path = require ('path')
const fs = require('fs').promises

const port = 3002 
const app = express()

app.use(express.static('views'))

const HomepagePath = path.join(__dirname, 'views', 'index.html')
const NotFoundPagePath = path.join(__dirname, 'views', '404.html') 

const handleHomePage = async (req, res) => {
    const file = await fs.readFile(HomepagePath);
    res.status(200);
    res.sendFile(file);
}

const handleNotFoundPage = async (req, res) => {
    const file = await fs.readFile(NotFoundPagePath);
    res.sendFile(NotFoundPagePath);
}
app.get('/index.html', handleHomePage) 

app.get('*', handleNotFoundPage)

// app.listen (port, () => console.log(`We are listening to port ${port}`))

app.listen(port, () =>{
    console.log(`We are listening to port ${port}`);
})