import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Server is ready");
});

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id : 1,
            joke : "Joke 1"
        }, 
        {
            id : 2,
            joke : "joke 2"
        }
    ];
    res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http:localhost:${port}`)
})

