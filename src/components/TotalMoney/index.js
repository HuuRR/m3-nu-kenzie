import "./style.css";
function TotalMoney({ listTransactions }) {
  return (
    <div className="container--total">
      <div className="div-infos">
        <label>Valor Total</label>
        <span>O valor se refere ao saldo</span>
      </div>
      <div className="div--valor">
        <p>
          R$
          {listTransactions.reduce((acc, atual) => {
            if (atual.type === "entrada") {
              acc += Number(atual.value);
            } else if (atual.type === "saída") {
              acc -= Number(atual.value);
            }
            return acc;
          }, 0)}
        </p>
      </div>
    </div>
  );
}

export default TotalMoney;
