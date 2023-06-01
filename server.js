const express = require('express');

const app = express();


app.use(express.json());


app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
    ];
    return res.json(users);
});


app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = {
        id: parseInt(userId),
        name: 'John Doe',
    };
    return res.status(200).json(user);
});

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newUser = {
        id: 1,
        name,
        email,
    };

    return res.status(201).json(newUser);
});


app.get('*', (req, res) => {
    return res.status(404).send('404  - Page not found')
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app; 