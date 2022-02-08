# FastBundle

### Aplicação ainda em produção, criada para vendas e compras de produtos novos ou usados.

Para rodar a aplicação, faça o clone do projeto com:

```
git@github.com:JorgeWillianPaez/FastBundle.git
```

Após isso, entre no diretório "server" e instale as depêndencias, executando no terminal o comando:

```
yarn install
```

Agora, para rodar o "server-side" execute:

```
yarn run dev
```

Para rodar o "cliente-side", abra outro terminal, entre no diretório "client", e execute o mesmo comando para instalar as dependências (yarn install), e para rodar a aplicação, execute:

```
yarn start
```

Após isso, pressione a tecla "Y" para aceitar que a aplicação seja rodada na porta 3001 (já que o "server-side" está usando a 3000 como padrão).

### Lembrando! Como a aplicação está sendo rodada localmente, é necessário fazer a conexão manual com o banco de dados, para isso você precisará criar um banco de dados no POSTGRESQL e preencher o arquivo ".env" de acordo com seu banco.

#### Após ter feito isso, já é possível fazer as requisições e testar a aplicação!

## Endpoints:

# /users

## POST

```
{
	"username": "Legolas",
	"name": "Jorge Willian",
	"email": "jorgewillian@gmail.com",
	"password": "123456"
}
{
  "username": "Legolas",
	"name": "Jorge Willian",
	"email": "jorgewillian@gmail.com",
	"password": "123456"
}

# retorno
{
  "username": "Legolas",
	"name": "Jorge Willian",
	"email": "jorgewillian@gmail.com",
	"password": "123456",
  "uuid": "99b9157d-9f71-4a0c-b108-fd0d03e8f49f"
}
```

# /users/login

```
{
	"username": "Legolas",
	"password": "123456"
}

# retorno
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxlZ29sYXMiLCJpYXQiOjE2NDQyODIxNTAsImV4cCI6MTY0NDI4MjE1MX0.SVoF1B470XM08AwmUxUOMRjrd3euXfXUY2Y4EEnzJtA"
}
```

# /products

## POST

```
{
  "name": "Sandero",
  "category": "Automóveis",
  "price": 54.000,
  "condition": "Novo"
}

# retorno
{
  "uuid": "88df1ad4-72ed-4eca-a80f-b0a76ccea9a",
  "name": "Sandero",
  "category": "Automóveis",
  "price": 54.000,
  "condition": "Novo"
}
```

## GET

```
{
  "uuid": "88df1ad4-72ed-4eca-a80f-b0a76cc1ea9a",
  "name": "Sandero",
  "category": "Automóveis",
  "price": 54.0000,
  "condition": "Novo"
},
{
  "uuid": "cb6394a1-cdef-4662-b1c2-bca57902d0ce",
  "name": "Playstation 5",
  "category": "Games",
  "price": 6.000,
  "condition": "Novo"
}
```
