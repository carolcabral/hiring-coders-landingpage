# Hiring Coders 2021

Este repositório contém o conteúdo desenvolvido durante o treinamento Hiring Coders, da Gama Academy em parceria com a VTEX. O projeto foi desenvolvido utilizando React e TypeScript, e pode ser visualizado [aqui](https://hungry-babbage-f9ad69.netlify.app/).

## Desafio 1:

O desafio era desenvolver uma landing page com cadastro para cadastro de e-mail para recebimento de novidades e promoções, com a Black Friday como tema sugerido.

Foi implementado um banner com um contador até o dia da Black Friday 2021 e com um campo de e-mail, que armazena no localStorage sem nenhum tipo de tratamento.

## Desafio 2:

O segundo desafio consistia em desenvolver um sistema de o cadastro de clientes e produtos, também com armazenamento em localStorage, mas de uma maneira estruturada.

Para o segundo desafio, o banner da Black Friday foi transformado em um pop-up quando o usuário entra na página inicial, e foram criadas duas novas páginas e rotas `/Clients` e `/Products`. É possível acessar essas páginas através de botões na página inicial ou através da barra de navegação.

Ambas as páginas contém um form e salvam suas respectivas informações no localStorage, armazenando-as em uma variável do tipo Client ou Product que contém as chaves necessárias para armazenar os valores de entrada do usuário, além de um campo de identificação, que é incrementando ao armazenar um novo valor no localStorage.
