const express = require("express");
const itemsrouter = require("./items/items.router");
const sizeRouter = require('./size/size.router')
const userRouter = require('./users/users.router')

const port = 4444;

const app = express();

app.use(express.json());

app.use("/items", itemsrouter);

app.use('/user', userRouter)

app.use('/', sizeRouter)



app.get("*", (req, res) => {
  res.status(404).json({
    data: null,
    error: "Route not found",
  });
});

app.listen(port, () => console.log(`lISTENING TO PORT: ${port}`));
