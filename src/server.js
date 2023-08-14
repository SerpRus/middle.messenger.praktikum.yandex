import path from 'path';
import express from 'express';

const app = express();
const PORT = 3000;
// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}! Link: http://localhost:3000/`);
});
