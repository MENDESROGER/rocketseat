**RF** => Requisitos funcionais

**RNF** => Requisitos não funcionais

**RN** => Regra de negócio

# Cadastro de carro

**RF** => Requisitos funcionais
Deve ser possível cadastrar um novo carro
Deve ser possível listar todas as categorias

**RN** => Regra de negócio
Não deve ser possível cadastar um carro com uma placa já existe
Não deve ser possível alterar a placa de um carro já cadastrado
o carro deve ser cadastrado com disponibilidade por padrão
O usuário responsável pelo cadastro deve ser um usuário administrador

# Listagem de carros

**RF** => Requisitos funcionais
Deve ser possível listar todos os carros disponíveis
Deve ser possível listar todos os carros disponíveis pelo nome da categoria
Deve ser possível listar todos os carros disponíveis pelo nome da marca
Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RNF** => Requisitos não funcionais

**RN** => Regra de negócio
O usuário não precisa estar logado no sistema


# Cadastro de Especificação no carro

**RF** => Requisitos funcionais
Deve ser possível cadastrar uma especificação para um carro
Deve ser possíve listar todas as especificações
Deve ser possível listar todos os carros

**RNF** => Requisitos não funcionais

**RN** => Regra de negócio
Não deve ser possível cadastrar uma especificaçao para um carro não cadastrado
Não deve ser possível cadastrar uma especficaão já existente para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário administrador

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro
Dve ser possível listar todos os carros

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastar mais de uma imagem para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário administrador


# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel

**RN**
O aluguel deve ter duraçao minima de 24 horas
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
Não deve ser possível cadastar um novo aluguel caso já exista um aberto para o mesmo carro




