import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}! Link: http://localhost:3000/`);
});
