# ppw2-final

End points
1. /donos
2. /cartoes

Parametros endpoint /donos
1. String nome = Nome do dono
2. int limit = Limite de registros
3. int skip = Registros que serão ignorados

Parametros endpoint /cartoes
1. String bin = numero cartao de credito
2. int limit = Limite de registros
3. int skip = Registros que serão ignorados
##

Heroku: https://ppw2-final.herokuapp.com
##

Libs
1. express como servidor http  
2. axios para realizar requests http  
##

Metodos
1. GET
2. POST
3. PUT
4. DELETE 
##

# Exemplo de api Donos
GET: https://ppw2-final.herokuapp.com/donos
Retorno:
````
[
  {
    "_id": "60dd1026ad4157272c59f94f",
    "nome": "Arthur F.",
    "cpf": "045634239123",
    "nascimento": "2000-01-15T00:00:00.000Z",
    "createdAt": "2021-07-01T00:45:26.255Z",
    "updatedAt": "2021-07-02T21:39:22.066Z",
    "__v": 0,
    "endereco": "60df858f4e610600159b3b0d"
  }
]
````
# Exemplo de api Cartao
GET: https://ppw2-final.herokuapp.com/cartoes/?bin=123456
Retorno:
````
[
  {
    "_id": "60dd135c9034ea14945b30cd",
    "bin": "123456",
    "validade": "2026-05-21T03:00:00.000Z",
    "cvv": "311",
    "nome": "Arthur Fernandes",
    "marca": "Mastercard",
    "dono": {
      "_id": "60dd1026ad4157272c59f94f",
      "nome": "Arthur F.",
      "cpf": "045634239123",
      "nascimento": "2000-01-15T00:00:00.000Z",
      "createdAt": "2021-07-01T00:45:26.255Z",
      "updatedAt": "2021-07-02T21:39:22.066Z",
      "__v": 0,
      "endereco": "60df858f4e610600159b3b0d"
    },
    "createdAt": "2021-07-01T00:59:08.545Z",
    "updatedAt": "2021-07-01T00:59:08.545Z",
    "__v": 0
  }
]
````
 
