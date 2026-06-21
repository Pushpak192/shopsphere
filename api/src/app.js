const express = require('express');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        service: 'shopsphere-api',
        version: '1.0.0'
    });
});

app.get('/ready', (req, res) => {
    res.status(200).json({
        status: 'READY'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
