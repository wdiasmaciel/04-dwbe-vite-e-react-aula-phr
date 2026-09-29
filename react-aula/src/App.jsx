//dados
import data from "./assets/data/data.json";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardProdutoFixo from "./components/CardProdutoFixo";
import CardProduto from "./components/CardProduto";

const App = () => {

  return(
    <>
      <Header />
      <div className="container-produtos">
        <CardProdutoFixo />
        <CardProdutoFixo />
        <CardProdutoFixo />
        <CardProdutoFixo />
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
      </div>
      <Footer />
    </>
  );

}

export default App;
