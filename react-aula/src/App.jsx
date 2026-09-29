//dados
import data from "./assets/data/data.json";

import './App.css'

import Header from "./components/Header";
import Footer from "./components/Footer";
import CardProdutoFixo from "./components/CardProdutoFixo";
import CardProdutoProps from "./components/CardProdutoProps";
import CardProdutoDesestruturacaoDeProps from "./components/CardProdutoDesestruturacaoDeProps";

const App = () => {

  return (
    <>
      <Header />
      <Menu />

      <main className="container-produtos">
        <CardProdutoFixo />
        <CardProdutoFixo />
        <CardProdutoFixo />
        <CardProdutoFixo />

        <CardProdutoProps nome="Notebook Dell" preco={4200} />
        <CardProdutoProps nome="Notebook Dell" preco={4200} />
        <CardProdutoProps nome="Mouse Gamer" preco={180} />
        <CardProdutoProps nome="Teclado Mecânico" preco={350} />

        <CardProdutoDesestruturacaoDeProps nome="TV" preco={3259} />
        <CardProdutoDesestruturacaoDeProps nome="Monitor" preco={1899} />

        <CardProdutoDesestruturacaoDePropsMaisInformacao nome="Notebook Dell" categoria="Informática" preco={4200} estoque={10} />
        <CardProdutoDesestruturacaoDePropsMaisInformacao nome="Monitor LG" categoria="Monitores" preco={980} estoque={5} />

        {
          data.map((element, index) => {
            return (
              <CardProdutoDesestruturacaoDePropsMaisInformacao
                key={index}
                nome={element.nome}
                categoria={element.categoria}
                preco={element.preco}
                estoque={element.estoque}
              />
            );
          })
        }
      </main>
      
      <Footer />
    </>
  );

}

export default App;
