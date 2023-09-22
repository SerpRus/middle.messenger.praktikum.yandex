import path from 'path';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const dirname = path.resolve();

app.use(express.static(path.join(dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}! Link: http://localhost:3000/`);
});
