// src/ItemCardapio.jsx

// Recebemos nome e preco através de "props" (propriedades)
/*function ItemCardapio({ nome, preco }) {
  return (
    <div style={styles.item}>
      <span style={styles.nome}>{nome}</span>
      <span style={styles.preco}>R$ {preco.toFixed(2)}</span>
    </div>
  );
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  },
  nome: {
    fontWeight: 'bold',
  },
  preco: {
    color: '#2e7d32',
    fontWeight: 'bold',
  }
};

export default ItemCardapio;*/

function ItemCardapio({ nome, preco, onAdicionar }) {
  return (
    <div className="item-container">
      <div className="item-info">
        <span className="item-nome">{nome}</span>
        <span className="item-preco">R$ {preco.toFixed(2)}</span>
      </div>
      
      <button className="botao-add" onClick={onAdicionar}>
        Adicionar Pedido
      </button>
    </div>
  );
}

export default ItemCardapio;