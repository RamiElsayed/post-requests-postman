const express = require('express');

const PORT =  3000;

const app = express();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

const books = [
    {
        id:'123',
        title: 'Harry Potter',
    },
    {
        id:'456',
        title: 'Harry Potter II',
    }
    
]
app.get("/api/books", (req, res) => {
    res.json(books)
});
app.post("/api/books", (req, res) => {
    const payload = req.body;
    console.log(payload);
    payload.push({
        ...payload, 
        id: 111
    })

    res.json({ success: true });
})

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`)
})