Projeto desenvolvido durante o curso de desenvolvimento de software na Trybe. O objetivo foi criar uma API REST de um blog utilizando banco de dados relacionado com ORM, neste caso usando o Sequelize.

Data de entrega: 17/01/2022

# Habilidades 

 - Construir um back-end usando `ORM` com o pacote `sequelize` do `npm`
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`

# Lista de Requisitos:

### 1 - Sua aplicação deve ter o endpoint POST `/user`

- O endpoint deve ser capaz de adicionar um novo user a sua tabela no banco de dados;

### 2 - Sua aplicação deve ter o endpoint POST `/login`

- O endpoint deve ser capaz de logar na aplicação, recebendo um token de autenticação;

### 3 - Sua aplicação deve ter o endpoint GET `/user`

- Deve listar todos os **Users**;

### 4 - Sua aplicação deve ter o endpoint GET `/user/:id`

- Retorna os detalhes do usuário baseado no `id` da rota.

### 5 - Sua aplicação deve ter o endpoint POST `/categories`

- Esse endpoint deve receber uma _Categoria_ no corpo da requisição e criá-la no banco.

### 6 - Sua aplicação deve ter o endpoint GET `/categories`

- Esse endpoint deve listar todas as Categorias;

### 7 - Sua aplicação deve ter o endpoint POST `/post`

- Esse endpoint deve receber um _BlogPost_ no corpo da requisição e criá-lo no banco. 

### 8 - Sua aplicação deve ter o endpoint GET `/post`

- Esse endpoint deve listar todos os _BlogPosts_ ;

### 9 - Sua aplicação deve ter o endpoint GET `post/:id`

- Retorna um **BlogPost** com o `id` especificado.

### 10 - Sua aplicação deve ter o endpoint PUT `/post/:id`

- O endpoint deve receber um **BlogPost** que irá sobrescrever o original com o `id` especificado na URL. Só deve ser permitido para o usuário que criou o **BlogPost**.
