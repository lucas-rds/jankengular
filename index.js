const express = require('express');

const app = express();

const root = './dist/Joken';

app.use(express.static(root));
app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Running app on :${PORT}`));