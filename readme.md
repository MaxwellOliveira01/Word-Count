## Word Count -- Code Golf programming style

Este é um projeto simples em Node.js que analisa um arquivo de texto e apresenta as 25 palavras mais frequentes, ignorando palavras de parada especificadas em um arquivo separado. O projeto inclui testes usando a biblioteca Jest.

O projeto foi implementado utilizando um estilo de programação chamado "Code golf", onde o objetivo principal é criar o programa utilizando a menor quantidade de linhas possível. 

Para facilitar o entendimento do código, há duas versões: uma utilizando o CodeGolf ao pé da letra e outra de forma menos rigorosa, priorizando a legibilidade e performance.

### Requisitos

Certifique de ter o Node.js instalado na sua máquina.

### Como rodar

Clone este repositório e, em seguida, dê um "npm install" para instalar as dependências necessárias. Após isso, basta executar o seguinte comando

```node wordcount.js caminho-para-arquivo-de-texto caminho-para-arquivo-de-stopwords```

Por exemplo, ```node wordcount.js files/words.txt files/stop_words.txt```

Isso apresentará as 25 palavras mais frequentes no arquivo de texto, ignorando as palavras de parada especificadas.

### Testes

O projeto inclui testes automatizados para garantir que tudo funcione conforme o esperado. Os testes são escritos usando a biblioteca Jest.

Para rodar os testes basta entrar na pasta "tests" e usar o seguinte comando:

```npx jest```

