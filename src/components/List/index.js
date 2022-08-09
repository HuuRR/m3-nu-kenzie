import "./style.css";
import Card from "../Card";

function List({ listTransactions }) {
  return (
    <div className="container--list">
      <nav>
        <label>Resumo Financeiro</label>
        <div className="buttons--nav">
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </div>
      </nav>
      <ul>
        {listTransactions.map((transaction, index) => (
          <Card transaction={transaction} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default List;
