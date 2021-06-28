import express from "express";

const app = express();

// rota
app.get("/test", (request, response) => {
   return response.send('Olé Mundo');
})

app.post("/test-post", (req, res) => {
    return res.send('Olá Mundo Post');
})

app.listen(3000 , () => console.log('Server is running'));