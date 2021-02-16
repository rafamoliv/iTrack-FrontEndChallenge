# Desafio de código Front-end / Mobile

O objetivo deste teste é avaliar conhecimento e experiência com Front-end e/ou Mobile.

## Instruções

- Faça um fork desse projeto.
- Siga as especificações abaixo.
  - Crie um README que explique como rodar a aplicação. Ele será utilizado por nós para verificar a aplicação.
  - Testes automatizados são opcionais, mas super recomendados.
  - Para entrega deve ser realizado um PR (Pull request) para seu fork do projeto e o link do PR deverá ser enviado para o e-mail ***guilherme.miranda@intertrack.com.br*** com o título **Teste Front-End**
  - Você pode entregar o teste em até 10 dias, mas se precisar de mais tempo é só falar com gente!

## Especificações técnicas

Desenvolver uma aplicação Web ou Mobile que exiba as viagens de determinado veículo.

Uma viagem deve possuir:

- vehicleId
- initialDateTime
- finalDateTime
- initialAddress
- finalAddress
- distanceInMeters (Diferença entre hodômetro final e inicial)
- totalTimeInMinutes

Para isso, você terá acesso a alguns endpoints os quais conseguirá recuperar:

Veículos:

`GET http://www15.itrack.com.br/recruitmentpositionapi/vehicles`

```
[{
  id: number
  name: string
  description: string
  brand: string
  model: string
}]
```

Posições:

`GET http://www15.itrack.com.br/recruitmentpositionapi/vehicles/:id/positions`

```
Path Params:
- id: Identificador do veículo
```

```
[{
  id: number
  vehicleId: number
  datetime: number (timestamp em milisegundos)
  latitude: number
  longitude: number
  address: string
  ignition: boolean
  hodometro: number (distância percorrida em metros)
}]
```

Uma `viagem` neste projeto é dado como a primeira posição com ignição ligada, até uma posição com ignição desligada, ex:

Dado estas posições de um determinado veículo:

```
  - Position1: ignition - on
  - Position2: ignition - on
  - Position3: ignition - off
  - Position4: ignition - off
  - Position5: ignition - on
  - Position6: ignition - off
  - Position7: ignition - on
```

O resultado deve ser:

```
  - Travel1: Position1 à Position3
  - Travel2: Position5 à Position6
  - Travel3: Position7
```

## Funcionalidades

### Obrigatórias

- Construir uma visualização com as viagens de determinado veículo. Caso não faça a exibição dos veículos, pode consultar os disponíveis na api e deixar fixo no código ao entregar.

### Opcionais

- Construir uma visualização de veículos em que seja possível pressionar/clicar sobre um veículo e visualizar as suas viagens.
- Permitir o acesso às posições de uma viagem a partir da visualização das mesmas.

## Obrigatório utilizar

- Git

## Critérios de Avaliação

- Sua aplicação atende todos os requisitos e regras?
- Organização do projeto
- Qualidade do código
- Uso do Git
- Testes automatizados (opcional)

## Boa sorte!

Sinta-se a vontade para tirar **qualquer dúvida** que surgir durante o desenvolvimento.
