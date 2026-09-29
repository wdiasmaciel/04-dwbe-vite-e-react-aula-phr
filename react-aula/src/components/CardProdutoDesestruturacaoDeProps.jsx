import "../styles/card.css";

function CardProdutoDesestruturacaoDeProps({ nome, preco }) {
	return (
		<div className="card">
			<h2>{nome}</h2>
			<p>R$ {preco}</p>
		</div>
	);
}

export default CardProdutoDesestruturacaoDeProps;