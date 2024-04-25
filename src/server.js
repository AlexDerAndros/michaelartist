const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let publicItems = [];

app.get('/public-items', (req, res) => {
    res.json(publicItems);
});

app.post('/save-item', (req, res) => {
    const { item } = req.body;
    if (item.trim() !== '') {
        publicItems.push(item);
        res.json({ success: true });
    } else {
        res.status(400).json({ error: 'Bitte eine Sache eingeben.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
