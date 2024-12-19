import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/github-token', (req, res) => {
    res.json({ token: process.env.GITHUB_TOKEN });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 