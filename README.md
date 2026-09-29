# 04-dwbe-vite-e-react-aula-phr

# 03-dwbe-vite-e-react-aula-phr

```bash
sudo apt update
```

```bash
sudo apt install -y nodejs
```

```bash
node -v
```

```bash
npm install -g npm@11.19.0
```

```bash
npm -v
```

```bash
npm create vite@latest
```

```bash
cd react-aula
```

```bash
npm install
```

```bash
npm run dev
```

---

## Exercícios

1. Explique a diferença entre um componente e uma função JavaScript comum.

2. Qual é a vantagem de dividir uma aplicação em componentes?

3. O que são Props e qual é a sua finalidade?

4. Reescreva o componente `CardProduto` utilizando desestruturação de Props.

5. Crie um componente `CardAluno` que receba como Props:
    - Nome
    - Curso
    - Período
    - Média

6. Utilize o componente `CardAluno` para exibir três alunos diferentes.

7. Crie um componente `Botao` que receba como Props:

    - Texto

    - Cor de fundo

    - Cor da fonte

8. Pesquise na documentação oficial do React a diferença entre **Props** e **State** e escreva um pequeno resumo (5 a 10 linhas) com suas próprias palavras.

---

# Projeto Integrador

## Evoluindo o Sistema de Gerenciamento de Produtos

Até este momento, o sistema já deve possuir:

```text
Sistema de Produtos

├── Header
├── Menu
├── CardProduto
├── CardProduto
├── CardProduto
└── Footer
```

Cada cartão deve exibir:

- Nome do produto

- Categoria

- Preço

- Quantidade em estoque

Todos os cartões devem utilizar o mesmo componente `CardProduto`, diferenciando-se apenas pelos valores recebidos por meio de Props.

---
