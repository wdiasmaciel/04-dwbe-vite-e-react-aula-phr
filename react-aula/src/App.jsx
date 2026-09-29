//dados
import data from "./assets/data/data.json";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  return(
    <>
      <Header />
      <div className="container-produtos">
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
