import express from 'express'
const app = express()
const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("user are coming soon")
})

const users =[
    {id:1,name:"John",email:"john@example.com"},
    {id:2,name:"Jane",email:"jane@example.com"},
    {id:3,name:"Bob",email:"bob@example.com"},
    {id:4,name:"Alice",email:"alice@example.com"}
]

app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/profile',(req,res)=>{
    res.send("user profile")
})

app.listen(PORT,()=>{
    console.log(`Running in Port ${PORT}`)
})