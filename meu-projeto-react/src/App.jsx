/*import './App.css'

function App() {
  // Lista de objetos representando os itens do cardápio
  const lanches = [
    { id: 1, nome: "X-Burguer", preco: 15.90 },
    { id: 2, nome: "X-Salada", preco: 18.50 },
    { id: 3, nome: "Cachorro Quente Especial", preco: 12.00 },
    { id: 4, nome: "Misto Quente", preco: 8.50 },
    { id: 5, nome: "Batata Frita G", preco: 22.00 }
  ];

  return (
    <main style={styles.container}>
      <h1 style={styles.titulo}>Cardápio Lanchonete</h1>
      
      <ul style={styles.lista}>
        {lanches.map((item) => (
          <li key={item.id} style={styles.item}>
            <span style={styles.nome}>{item.nome}</span>
            <span style={styles.preco}>R$ {item.preco.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

// Estilização básica inline para o cardápio não ficar bagunçado
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    color: '#333'
  },
  titulo: {
    textAlign: 'center',
    color: '#d32f2f'
  },
  lista: {
    listStyle: 'none',
    padding: 0
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #ddd'
  },
  nome: {
    fontWeight: 'bold'
  },
  preco: {
    color: '#2e7d32',
    fontWeight: 'bold'
  }
};

export default App;*/

// src/App.jsx
/*import './App.css';
import ItemCardapio from './ItemCardapio';

function App() {
  return (
    <div className="container">
      <h1 className="titulo">Cardápio Lanchonete</h1>
      
      <ItemCardapio nome="X-Burguer" preco={15.90} />
      <ItemCardapio nome="X-Salada" preco={18.50} />
      <ItemCardapio nome="Cachorro Quente" preco={12.00} />
      <ItemCardapio nome="Misto Quente" preco={8.50} />
      <ItemCardapio nome="Batata Frita G" preco={22.00} />
    </div>
  );
}

export default App;*/

import { useState } from 'react';
import './App.css';
import ItemCardapio from './ItemCardapio';

function App() {
  const [totalItems, setTotalItems] = useState(0);

  const handleAdicionar = () => {
    setTotalItems(totalItems + 1);
  };

  return (
    <div className="container">
      <div className="carrinho-topo">
        <h3>Total de itens no pedido: {totalItems}</h3>
      </div>

      <h1 className="titulo">Cardápio Lanchonete</h1>
      
      <ItemCardapio nome="X-Burguer" preco={15.90} onAdicionar={handleAdicionar} />
      <ItemCardapio nome="X-Salada" preco={18.50} onAdicionar={handleAdicionar} />
      <ItemCardapio nome="Cachorro Quente" preco={12.00} onAdicionar={handleAdicionar} />
      <ItemCardapio nome="Misto Quente" preco={8.50} onAdicionar={handleAdicionar} />
      <ItemCardapio nome="Batata Frita G" preco={22.00} onAdicionar={handleAdicionar} />
    </div>
  );
}

return (
    <div className="container">
      <div className="carrinho-topo">
        <h3>Total de itens no pedido: {totalItems}</h3>
      </div>

      <h1 className="titulo">Cardápio Lanchonete</h1>
      
      <ItemCardapio nome="X-Burguer" preco={15.90} onAdicionar={handleAdicionar} />
      <ItemCardapio nome="X-Salada" preco={18.50} onAdicionar={handleAdicionar} />
      <ItemCardapio nome="Cachorro Quente" preco={12.00} onAdicionar={handleAdicionar} />
      <ItemCardapio nome="Misto Quente" preco={8.50} onAdicionar={handleAdicionar} />
      <ItemCardapio nome="Batata Frita G" preco={22.00} onAdicionar={handleAdicionar} />
    </div>
  );



export default App;