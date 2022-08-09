import "./style.css";
function Card({ transaction }) {
  return (
    <li
      className={`card ${
        transaction.type === "saída" ? "card--neg" : "card--pos"
      }`}
    >
      <div className="desc-tipe">
        <p className="desc">{transaction.description}</p>
        <p className="type">{transaction.type}</p>
      </div>
      <p className="value">R$ {transaction.value}</p>
      <span>
        <i className="fa-solid fa-trash-can"></i>
      </span>
    </li>
  );
}

export default Card;
