const express = require('express');

const userController = require('./src/controllers/userController');
const categoriesController = require('./src/controllers/categoriesController');
const blogPostController = require('./src/controllers/blogPostController');

const PORT = 3000 || process.env.PORT;

const app = express();
app.use(express.json());

app.use('/', userController);
app.use('/', categoriesController);
app.use('/', blogPostController);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
