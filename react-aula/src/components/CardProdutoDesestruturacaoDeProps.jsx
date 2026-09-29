import "../styles/card.css";

function CardProdutoDesestruturacaoDeProps({ nome, preco }) {
	return (
		<div>
			<h2>{nome}</h2>
			<p>R$ {preco}</p>
		</div>
	);
}

export default CardProdutoDesestruturacaoDeProps;