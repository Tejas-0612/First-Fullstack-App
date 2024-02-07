import express from "express"
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const jokes=[
    {
      "id": 1,
      "title": "Why did the scarecrow win an award?",
      "description": "Because he was outstanding in his field!"
    },
    {
      "id": 2,
      "title": "Why don't skeletons fight each other?",
      "description": "They don't have the guts."
    },
    {
      "id": 3,
      "title": "What do you call fake spaghetti?",
      "description": "An impasta!"
    },
    {
      "id": 4,
      "title": "Why did the math book look sad?",
      "description": "Because it had too many problems."
    },
    {
      "id": 5,
      "title": "Why did the bicycle fall over?",
      "description": "Because it was two-tired!"
    }
  ]

  app.get('/api/jokes',(req,res)=>{
    res.send(jokes);
  })


app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
})