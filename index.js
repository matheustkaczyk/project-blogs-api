const express = require('express');

const userController = require('./controllers/userController');
const categoriesController = require('./controllers/categoriesController');

const PORT = 3000 || process.env.PORT;

const app = express();
app.use(express.json());

app.use('/', userController);
app.use('/', categoriesController);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
