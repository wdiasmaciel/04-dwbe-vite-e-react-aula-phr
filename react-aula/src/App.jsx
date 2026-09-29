//dados
import data from "./assets/data/data.json";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardProdutoFixo from "./components/CardProdutoFixo";
import CardProdutoProps from "./components/CardProdutoProps";
import CardProduto from "./components/CardProduto";

const App = () => {

  return (
    <>
      <Header />
      <main className="container-produtos">
        <CardProdutoFixo />
        <CardProdutoFixo />
        <CardProdutoFixo />
        <CardProdutoFixo />

        <CardProdutoProps nome="Notebook Dell" preco={4200} />
        <CardProdutoProps nome="Notebook Dell" preco={4200} />
        <CardProdutoProps nome="Mouse Gamer" preco={180} />
        <CardProdutoProps nome="Teclado Mecânico" preco={350} />
        {
          data.map((element, index) => {
            return (
              <CardProduto
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
