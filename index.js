const express = require('express');
require('dotenv').config();

const PORT = 3000 || process.env.PORT;

const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
