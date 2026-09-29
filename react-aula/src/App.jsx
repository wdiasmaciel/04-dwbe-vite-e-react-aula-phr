//dados
import data from "./assets/data/data.json";

import './App.css'

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import CardProdutoFixo from "./components/CardProdutoFixo";
import CardProdutoProps from "./components/CardProdutoProps";
import CardProdutoDesestruturacaoDeProps from "./components/CardProdutoDesestruturacaoDeProps";
import CardProdutoDesestruturacaoDePropsMaisInformacao from "./components/CardProdutoDesestruturacaoDePropsMaisInformacao";

const App = () => {

  return (
    <>
      <Header />
      <Menu />

      <hr/>
      <h2>CardProdutoFixo:</h2>
      <div className="container-produtos">
        <CardProdutoFixo />
        <CardProdutoFixo />
        <CardProdutoFixo />
        <CardProdutoFixo />
      </div>

      <hr/>
      <h2>CardProdutoProps:</h2>
      <div className="container-produtos">
        <CardProdutoProps nome="Notebook Dell" preco={4200} />
        <CardProdutoProps nome="Notebook Dell" preco={4200} />
        <CardProdutoProps nome="Mouse Gamer" preco={180} />
        <CardProdutoProps nome="Teclado Mecânico" preco={350} />
      </div>

      <hr/>
      <h2>CardProdutoDesestruturacaoDeProps:</h2>
      <div className="container-produtos">
        <CardProdutoDesestruturacaoDeProps nome="TV" preco={3259} />
        <CardProdutoDesestruturacaoDeProps nome="Monitor" preco={1899} />
        <CardProdutoDesestruturacaoDeProps nome="Suporte de TV" preco={459} />
        <CardProdutoDesestruturacaoDeProps nome="Suporte de Monitor" preco={189} />
      </div>

      <hr/>
      <h2>CardProdutoDesestruturacaoDePropsMaisInformacao:</h2>
      <div className="container-produtos">
        <CardProdutoDesestruturacaoDePropsMaisInformacao nome="Notebook Dell" categoria="Informática" preco={4200} estoque={10} />
        <CardProdutoDesestruturacaoDePropsMaisInformacao nome="Monitor LG" categoria="Monitores" preco={980} estoque={5} />
        <CardProdutoDesestruturacaoDePropsMaisInformacao nome="Tablet Samsung" categoria="Informática" preco={2200} estoque={10} />
        <CardProdutoDesestruturacaoDePropsMaisInformacao nome="Tablet Vaio" categoria="Monitores" preco={1980} estoque={5} />
      </div>

      <hr/>
      <h2>CardProdutoDesestruturacaoDePropsMaisInformacao com '.map()'':</h2>
      <div className="container-produtos">
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
      </div>

      <Footer />
    </>
  );

}

export default App;
