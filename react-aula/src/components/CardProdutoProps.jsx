import "../styles/card.css";

const CardProdutoProps = (props) => {

    return (
        <div className="card">
            <h2>{props.nome}</h2>
            <p>{props.preco}</p>
        </div>
    );

}

export default CardProdutoProps;